import { BigNumber } from "ethers";
import { createLoggingContext, createRequestContext, jsonifyError, RelayerTaskStatus } from "@connext/nxtp-utils";
import interval from "interval-promise";
import { CachedTaskData } from "@connext/nxtp-adapters-cache/dist/lib/caches/tasks";

import { getContext } from "../../relayer";

export const MIN_GAS_LIMIT = BigNumber.from(4_000_000);
export const DEFAULT_POLL_INTERVAL = 1_000;

export const bindRelays = async (_pollInterval?: number) => {
  const { config } = getContext();
  const pollInterval = _pollInterval ?? DEFAULT_POLL_INTERVAL;
  interval(async (_, stop) => {
    if (config.mode.cleanup) {
      stop();
    } else {
      await pollCache();
    }
  }, pollInterval);
};

export const pollCache = async () => {
  const {
    adapters: { cache, wallet, txservice },
    logger,
    chainToDomainMap,
  } = getContext();
  const { requestContext: _requestContext, methodContext } = createLoggingContext(pollCache.name);

  // Retrieve all pending tasks.
  const pending = await cache.tasks.getPending();
  if (pending.length === 0) {
    return;
  }
  logger.debug("Retrieved pending tasks", _requestContext, methodContext, { pending });

  // Organize pending tasks by chain property.
  const tasksByChain: { [chainId: number]: (CachedTaskData & { id: string })[] } = {};
  for (const taskId of pending) {
    const requestContext = createRequestContext(pollCache.name, taskId);
    const task: CachedTaskData | undefined = await cache.tasks.getTask(taskId);
    if (!task) {
      // Sanity: task should exist.
      logger.warn("Task entry not found for task ID", requestContext, methodContext, { taskId });
      continue;
    }
    const { chain } = task;
    if (!tasksByChain[chain]) {
      tasksByChain[chain] = [];
    }
    tasksByChain[chain].push({
      ...task,
      id: taskId,
    });
  }

  // TODO: Promise.all with map for each chain.
  for (const chainIdKey of Object.keys(tasksByChain)) {
    // Set up context for this chain: get domain, provider, and connect a signer.
    const chain = Number(chainIdKey);
    const domain = chainToDomainMap.get(chain)!;

    for (const task of tasksByChain[chain]) {
      // TODO: Sanity check: should have enough balance to pay for gas on the specified chain.
      const taskId = task.id;
      const requestContext = createRequestContext(pollCache.name, taskId);
      const status = await cache.tasks.getStatus(taskId);
      if (status !== RelayerTaskStatus.ExecPending) {
        // Sanity: task should be pending.
        // Possible in the event of a race while updating the cache.
        logger.debug("Task status was not pending task ID", requestContext, methodContext, { taskId });
        continue;
      }

      const { data, to } = task;

      // TODO: Queue up fee claiming for this transfer after this (assuming transaction is successful)!
      try {
        const transaction = {
          domain,
          to,
          data,
          from: await wallet.getAddress(),
        };
        // Estimate gas limit.
        // TODO: For `proveAndProcess` calls, we should be providing:
        // gas limit = expected gas cost + PROCESS_GAS + RESERVE_GAS
        // We need to read those values from on-chain IFF this is a `proveAndProcess` call.

        // Execute the calldata.
        logger.info("Sending tx", requestContext, methodContext, { chain, taskId, data });
        const receipt = await txservice.sendTx(
          {
            ...transaction,
            gasLimit: MIN_GAS_LIMIT,
            value: 0,
          },
          requestContext,
        );

        await cache.tasks.setHash(taskId, receipt.transactionHash);
        logger.info("Transaction confirmed.", requestContext, methodContext, {
          chain,
          taskId,
          hash: receipt.transactionHash,
        });
      } catch (error: any) {
        // Save the error to the cache for this transfer. If the error was not previously recorded, log it.
        await cache.tasks.setError(taskId, JSON.stringify(error));
        logger.error("Error executing task", requestContext, methodContext, jsonifyError(error as Error), {
          chain,
          taskId,
          data,
        });
      }
    }
  }
};
