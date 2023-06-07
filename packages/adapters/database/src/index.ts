import {
  jsonifyError,
  XTransfer,
  XTransferStatus,
  RouterBalance,
  XMessage,
  RootMessage,
  Logger,
  AggregatedRoot,
  PropagatedRoot,
  ReceivedAggregateRoot,
  StableSwapPool,
  StableSwapExchange,
  XTransferErrorStatus,
  StableSwapPoolEvent,
  RouterDailyTVL,
  SlippageUpdate,
  Asset,
  AssetPrice,
  StableSwapTransfer,
  StableSwapLpBalance,
  RootMessageStatus,
} from "@connext/nxtp-utils";
import { Pool } from "pg";
import { TxnClientForRepeatableRead } from "zapatos/db";

import {
  getTransfersByStatus,
  getTransfersWithOriginPending,
  getTransfersWithDestinationPending,
  getPendingTransfersByDomains,
  saveTransfers,
  saveRouterBalances,
  saveMessages,
  saveSentRootMessages,
  saveProcessedRootMessages,
  saveCheckPoint,
  getCheckPoint,
  transaction,
  getRootMessages,
  saveAggregatedRoots,
  savePropagatedRoots,
  saveReceivedAggregateRoot,
  getUnProcessedMessages,
  getUnProcessedMessagesByIndex,
  getUnProcessedMessagesByDomains,
  getAggregateRoot,
  getAggregateRootByRootAndDomain,
  getAggregateRootCount,
  getMessageRootIndex,
  getLatestMessageRoot,
  getLatestAggregateRoots,
  getMessageRootAggregatedFromIndex,
  getMessageRootsFromIndex,
  getMessageRootCount,
  getMessageRootStatusFromIndex,
  getSpokeNode,
  getSpokeNodes,
  getHubNode,
  getHubNodes,
  getRoot,
  putRoot,
  getCompletedTransfersByMessageHashes,
  increaseBackoff,
  saveStableSwapExchange,
  saveStableSwapPool,
  saveStableSwapPoolEvent,
  saveStableSwapLpBalances,
  saveStableSwapTransfers,
  resetBackoffs,
  updateErrorStatus,
  saveRouterDailyTVL,
  updateSlippage,
  markRootMessagesProcessed,
  updateExecuteSimulationData,
  getPendingTransfersByMessageStatus,
  getMessageByLeaf,
  saveAssets,
  getAssets,
  saveAssetPrice,
} from "./client";

export * as db from "zapatos/db";

export type Checkpoints = {
  prefix: string;
  checkpoints: { domain: string; checkpoint: number }[];
};

export type Database = {
  saveTransfers: (xtransfers: XTransfer[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  getTransfersByStatus: (
    status: XTransferStatus,
    limit: number,
    offset?: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XTransfer[]>;
  getPendingTransfersByDomains: (
    origin_domain: string,
    destination_domain: string,
    limit: number,
    offset: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string[]>;
  getTransfersWithOriginPending: (
    domain: string,
    limit: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string[]>;
  getTransfersWithDestinationPending: (
    domain: string,
    limit: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string[]>;
  getCompletedTransfersByMessageHashes: (
    message_hashes: string[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XTransfer[]>;
  saveRouterBalances: (routerBalances: RouterBalance[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveAssets: (assets: Asset[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  getAssets: (limit?: number, offset?: number, _pool?: Pool | TxnClientForRepeatableRead) => Promise<Asset[]>;
  saveAssetPrice: (prices: AssetPrice[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveMessages: (messages: XMessage[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  getRootMessages: (
    processed: boolean | undefined,
    limit?: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<RootMessage[]>;
  saveSentRootMessages: (messages: RootMessage[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveProcessedRootMessages: (messages: RootMessage[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveCheckPoint: (check: string, point: number, _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  getCheckPoint: (check_name: string, _pool?: Pool | TxnClientForRepeatableRead) => Promise<number>;
  transaction: (callback: (client: TxnClientForRepeatableRead) => Promise<void>) => Promise<void>;
  saveAggregatedRoots: (roots: AggregatedRoot[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  savePropagatedRoots: (roots: PropagatedRoot[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveReceivedAggregateRoot: (
    roots: ReceivedAggregateRoot[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  getUnProcessedMessages: (
    origin_domain: string,
    limit?: number,
    offset?: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XMessage[]>;
  getUnProcessedMessagesByDomains: (
    origin_domain: string,
    destination_domain: string,
    limit?: number,
    offset?: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XMessage[]>;
  getUnProcessedMessagesByIndex: (
    origin_domain: string,
    destination_domain: string,
    index: number,
    offset: number,
    limit?: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XMessage[]>;
  getAggregateRoot: (messageRoot: string, _pool?: Pool | TxnClientForRepeatableRead) => Promise<string | undefined>;
  getAggregateRootCount: (
    aggregateRoot: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<number | undefined>;
  getMessageRootIndex: (
    domain: string,
    messageRoot: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<number | undefined>;
  getLatestMessageRoot: (
    domain: string,
    aggregate_root: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<RootMessage | undefined>;
  getLatestAggregateRoots: (
    domain: string,
    limit: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<ReceivedAggregateRoot[]>;
  getAggregateRootByRootAndDomain: (
    domain: string,
    aggregatedRoot: string,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<ReceivedAggregateRoot | undefined>;
  getMessageRootAggregatedFromIndex: (
    domain: string,
    index: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<RootMessage | undefined>;
  getMessageRootsFromIndex: (
    domain: string,
    index: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<RootMessage[]>;
  getMessageRootCount: (
    domain: string,
    messageRoot: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<number | undefined>;
  getMessageRootStatusFromIndex: (
    domain: string,
    index: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<RootMessageStatus>;
  getSpokeNode: (
    domain: string,
    index: number,
    count: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string | undefined>;
  getSpokeNodes: (
    domain: string,
    start: number,
    end: number,
    count: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string[]>;
  getHubNode: (index: number, count: number, _pool?: Pool | TxnClientForRepeatableRead) => Promise<string | undefined>;
  getHubNodes: (
    start: number,
    end: number,
    count: number,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<string[]>;
  getRoot: (domain: string, path: string, _pool?: Pool | TxnClientForRepeatableRead) => Promise<string | undefined>;
  putRoot: (domain: string, path: string, hash: string, _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  increaseBackoff: (transferId: string, _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  resetBackoffs: (transferIds: string[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveStableSwapPool: (_swapPools: StableSwapPool[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveStableSwapExchange: (
    _swapExchanges: StableSwapExchange[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  updateErrorStatus: (transferId: string, error: XTransferErrorStatus) => Promise<void>;
  saveStableSwapPoolEvent: (
    _poolEvents: StableSwapPoolEvent[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  saveStableSwapTransfers: (
    _transfers: StableSwapTransfer[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  saveStableSwapLpBalances: (
    _transfers: StableSwapLpBalance[],
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  markRootMessagesProcessed: (rootMessages: RootMessage[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  saveRouterDailyTVL: (_tvls: RouterDailyTVL[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  updateSlippage: (_slippageUpdates: SlippageUpdate[], _pool?: Pool | TxnClientForRepeatableRead) => Promise<void>;
  updateExecuteSimulationData: (
    transferId: string,
    executeSimulationInput: string,
    executeSimulationFrom: string,
    executeSimulationTo: string,
    executeSimulationNetwork: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<void>;
  getPendingTransfersByMessageStatus: (
    domain: string,
    offset: number,
    limit: number,
    orderDirection?: "ASC" | "DESC",
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XTransfer[]>;
  getMessageByLeaf: (
    origin_domain: string,
    leaf: string,
    _pool?: Pool | TxnClientForRepeatableRead,
  ) => Promise<XMessage | undefined>;
};

export let pool: Pool;

export const getDatabase = async (databaseUrl: string, logger: Logger): Promise<Database> => {
  pool = new Pool({ connectionString: databaseUrl, idleTimeoutMillis: 3000, allowExitOnIdle: true });
  pool.on("error", (err: Error) => logger.error("Database error", undefined, undefined, jsonifyError(err))); // don't let a pg restart kill your app

  try {
    await pool.query("SELECT NOW()");
  } catch (e: unknown) {
    logger.error("Database connection error", undefined, undefined, jsonifyError(e as Error));
    throw new Error("Database connection error");
  }

  return {
    saveTransfers,
    getTransfersByStatus,
    getTransfersWithOriginPending,
    getTransfersWithDestinationPending,
    getPendingTransfersByDomains,
    getCompletedTransfersByMessageHashes,
    saveRouterBalances,
    saveAssets,
    getAssets,
    saveAssetPrice,
    saveMessages,
    getRootMessages,
    saveSentRootMessages,
    saveProcessedRootMessages,
    saveCheckPoint,
    getCheckPoint,
    transaction,
    saveAggregatedRoots,
    savePropagatedRoots,
    saveReceivedAggregateRoot,
    getUnProcessedMessages,
    getUnProcessedMessagesByDomains,
    getUnProcessedMessagesByIndex,
    getAggregateRoot,
    getAggregateRootByRootAndDomain,
    getAggregateRootCount,
    getMessageRootIndex,
    getLatestMessageRoot,
    getLatestAggregateRoots,
    getMessageRootAggregatedFromIndex,
    getMessageRootsFromIndex,
    getMessageRootCount,
    getMessageRootStatusFromIndex,
    getSpokeNode,
    getSpokeNodes,
    getHubNode,
    getHubNodes,
    getRoot,
    putRoot,
    increaseBackoff,
    resetBackoffs,
    saveStableSwapPool,
    saveStableSwapExchange,
    saveStableSwapTransfers,
    saveStableSwapLpBalances,
    updateErrorStatus,
    saveStableSwapPoolEvent,
    markRootMessagesProcessed,
    saveRouterDailyTVL,
    updateSlippage,
    updateExecuteSimulationData,
    getPendingTransfersByMessageStatus,
    getMessageByLeaf,
  };
};

export const closeDatabase = async (): Promise<void> => {
  await pool.end();
};
