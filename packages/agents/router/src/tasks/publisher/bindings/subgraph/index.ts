import { createLoggingContext, jsonifyError } from "@connext/nxtp-utils";
import interval from "interval-promise";

import { retryXCalls } from "../../operations";
import { getXCalls } from "../../operations/getXCalls";
import { getContext } from "../../publisher";

export const bindSubgraph = async (_pollInterval?: number) => {
  const { config, logger } = getContext();
  const { requestContext, methodContext } = createLoggingContext(bindSubgraph.name);
  const pollInterval = _pollInterval ?? config.polling.subgraph;
  interval(async (_, stop) => {
    if (config.mode.cleanup) {
      stop();
    } else {
      try {
        // 1. fetch `XCalled` transfers from the subgraph and store them to the cache
        await getXCalls();

        // 2. read `XCalled` transfers from the cache and re check statuses on the destination chain
        // If the status is one of both `Reconciled` and `Executed`, that transferId needs to be deleted on the cache
        // If the status is `XCalled`, submits the transfer to the sequencer.
        await retryXCalls();
      } catch (e: unknown) {
        logger.error(
          "Error getting xcalls, waiting for next loop",
          requestContext,
          methodContext,
          jsonifyError(e as Error),
        );
      }
    }
  }, pollInterval);
};
