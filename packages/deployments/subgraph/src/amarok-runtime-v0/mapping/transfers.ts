/* eslint-disable prefer-const */
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";

import {
  XCalled,
  Executed,
  Reconciled,
  TransferRelayerFeesIncreased,
  SlippageUpdated,
} from "../../../generated/Connext/Connext";
import { Router, OriginTransfer, DestinationTransfer, OriginMessage, SlippageUpdate } from "../../../generated/schema";

import {
  getChainId,
  getOrCreateAsset,
  getOrCreateAssetBalance,
  getOrCreateTransferRelayFee,
  getOrCreateTransferRelayFeeIncrease,
  getRouterDailyTVL,
} from "./helper";

/// MARK - Connext Bridge
/**
 * Creates subgraph records when TransactionPrepared events are emitted.
 *
 * @param event - The contract event used to create the subgraph record
 */
export function handleXCalled(event: XCalled): void {
  // contract checks ensure that this cannot exist at this point, so we can safely create new
  // NOTE: the above case is not always true since malicious users can reuse IDs to try to break the
  // subgraph. we can protect against this by overwriting if we are able to load a Transaction
  let transfer = OriginTransfer.load(event.params.transferId.toHexString());
  if (transfer == null) {
    transfer = new OriginTransfer(event.params.transferId.toHexString());
  }

  // Meta
  transfer.chainId = getChainId();
  transfer.transferId = event.params.transferId;
  transfer.nonce = event.params.nonce;
  transfer.status = "XCalled";
  transfer.messageHash = event.params.messageHash;

  // Call Params
  transfer.originDomain = event.params.params.originDomain;
  transfer.destinationDomain = event.params.params.destinationDomain;
  transfer.to = event.params.params.to;
  transfer.delegate = event.params.params.delegate;
  transfer.receiveLocal = event.params.params.receiveLocal;
  transfer.callData = event.params.params.callData;
  transfer.slippage = event.params.params.slippage;
  transfer.originSender = event.params.params.originSender;

  // Assets
  transfer.bridgedAmt = event.params.params.bridgedAmt;
  transfer.normalizedIn = event.params.params.normalizedIn;
  transfer.canonicalId = event.params.params.canonicalId;
  transfer.canonicalDomain = event.params.params.canonicalDomain;
  transfer.asset = getOrCreateAsset(event.params.local).id;
  transfer.transactingAsset = event.params.asset;

  // Message
  let message = OriginMessage.load(event.params.messageHash.toHex());
  if (message == null) {
    message = new OriginMessage(event.params.messageHash.toHex());
  }
  message.leaf = event.params.messageHash;
  message.destinationDomain = event.params.params.destinationDomain;
  message.transferId = event.params.transferId;
  message.message = event.params.messageBody;
  message.save();
  transfer.message = message.id;

  // XCall Transaction
  // NOTE: Using originSender as the caller, since it should have been set to msg.sender.
  transfer.caller = event.params.params.originSender;
  transfer.transactionHash = event.transaction.hash;
  transfer.timestamp = event.block.timestamp;
  transfer.gasPrice = event.transaction.gasPrice;
  transfer.gasLimit = event.transaction.gasLimit;
  transfer.blockNumber = event.block.number;
  // transaction caller is tx.origin
  transfer.txOrigin = event.transaction.from;

  transfer.save();
}

/**
 * Updates subgraph records when Fulfilled events are emitted
 *
 * @param event - The contract event used to update the subgraph
 */
export function handleExecuted(event: Executed): void {
  // Load transfer details
  let transfer = DestinationTransfer.load(event.params.transferId.toHexString());
  if (transfer == null) {
    transfer = new DestinationTransfer(event.params.transferId.toHexString());
  }

  const routers: string[] = [];
  if (transfer.status != "Reconciled") {
    // Handle router asset balances if this is fast liquidity path.
    const num = event.params.args.routers.length;
    const amount = event.params.args.params.bridgedAmt;
    // TODO: Move from using hardcoded fee calc to using configured liquidity fee numerator.
    const feesTaken = amount.times(BigInt.fromI32(5)).div(BigInt.fromI32(10000));
    const routerAmount = amount.minus(feesTaken).div(BigInt.fromI32(num));
    for (let i = 0; i < num; i++) {
      const param = event.params.args.routers[i].toHex();
      let router = Router.load(param);
      if (router == null) {
        // TODO: Shouldn't we be throwing an error here? How did a transfer get made with a non-existent
        // router?
        router = new Router(param);
        router.isActive = true;
        router.save();
      }

      routers.push(router.id);

      // Update router's liquidity
      const assetBalance = getOrCreateAssetBalance(event.params.local, event.params.args.routers[i]);

      assetBalance.feesEarned = assetBalance.feesEarned.plus(feesTaken.div(BigInt.fromI32(num)));
      assetBalance.amount = assetBalance.amount.minus(routerAmount);
      assetBalance.save();

      // update router tvl
      const routerTvl = getRouterDailyTVL(event.params.local, event.params.args.routers[i], event.block.timestamp);
      if (routerTvl) {
        routerTvl.balance = assetBalance.amount;
        routerTvl.save();
      }
    }

    transfer.routersFee = feesTaken;
  } // otherwise no routers used

  // Meta
  transfer.chainId = getChainId();
  transfer.transferId = event.params.transferId;
  transfer.nonce = event.params.args.params.nonce;

  // Call Params
  transfer.originDomain = event.params.args.params.originDomain;
  transfer.destinationDomain = event.params.args.params.destinationDomain;
  transfer.to = event.params.args.params.to;
  transfer.delegate = event.params.args.params.delegate;
  transfer.receiveLocal = event.params.args.params.receiveLocal;
  transfer.callData = event.params.args.params.callData;
  transfer.slippage = event.params.args.params.slippage;
  transfer.originSender = event.params.args.params.originSender;

  // Assets
  transfer.bridgedAmt = event.params.args.params.bridgedAmt;
  transfer.normalizedIn = event.params.args.params.normalizedIn;
  transfer.amount = event.params.amount;
  transfer.canonicalId = event.params.args.params.canonicalId;
  transfer.canonicalDomain = event.params.args.params.canonicalDomain;
  transfer.asset = getOrCreateAsset(event.params.local).id;

  // Event Data
  if (transfer.status == "Reconciled") {
    transfer.status = "CompletedSlow";
  } else {
    transfer.status = "Executed";
  }
  transfer.routers = routers;

  // Executed Transaction
  transfer.executedCaller = event.params.caller;
  transfer.executedTransactionHash = event.transaction.hash;
  transfer.executedTimestamp = event.block.timestamp;
  transfer.executedGasPrice = event.transaction.gasPrice;
  transfer.executedGasLimit = event.transaction.gasLimit;
  transfer.executedBlockNumber = event.block.number;
  transfer.executedTxOrigin = event.transaction.from;

  transfer.save();
}

/**
 * Updates subgraph records when Reconciled events are emitted
 *
 * @param event - The contract event used to update the subgraph
 */
export function handleReconciled(event: Reconciled): void {
  let transfer = DestinationTransfer.load(event.params.transferId.toHexString());
  if (transfer == null) {
    transfer = new DestinationTransfer(event.params.transferId.toHexString());
  }

  const amount = event.params.amount;
  // If the routers have already been set by an execute event, don't overwrite them.
  const routers: string[] = [];
  if (transfer.routers !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const r: string[] = transfer.routers!;
    const n = r.length;
    for (let i = 0; i < n; i++) {
      const router: string = r[i];
      routers.push(router);

      // Update router's liquidity
      const assetBalance = getOrCreateAssetBalance(event.params.local, Address.fromString(router));
      assetBalance.amount = assetBalance.amount.plus(amount.div(BigInt.fromI32(n)));
      assetBalance.save();

      // update router tvl
      const routerTvl = getRouterDailyTVL(event.params.local, Address.fromString(router), event.block.timestamp);
      if (routerTvl) {
        routerTvl.balance = assetBalance.amount;
        routerTvl.save();
      }
    }
  }

  // Meta
  transfer.chainId = getChainId();
  transfer.transferId = event.params.transferId;

  // Call Params
  transfer.originDomain = event.params.originDomain;

  // Assets
  transfer.asset = getOrCreateAsset(event.params.local).id;

  // Event Data
  if (transfer.status == "Executed") {
    transfer.status = "CompletedFast";
  } else {
    transfer.status = "Reconciled";
  }
  transfer.routers = routers;

  // Reconcile Transaction
  transfer.reconciledCaller = event.params.caller;
  transfer.reconciledTransactionHash = event.transaction.hash;
  transfer.reconciledTimestamp = event.block.timestamp;
  transfer.reconciledGasPrice = event.transaction.gasPrice;
  transfer.reconciledGasLimit = event.transaction.gasLimit;
  transfer.reconciledBlockNumber = event.block.number;
  transfer.reconciledTxOrigin = event.transaction.from;

  transfer.save();
}

export function handleRelayerFeesIncreasedNativeOnly(event: TransferRelayerFeesIncreased): void {
  let transfer = OriginTransfer.load(event.params.transferId.toHexString());

  if (transfer == null) {
    transfer = new OriginTransfer(event.params.transferId.toHexString());
  }

  if (transfer.bumpRelayerFeeCount === BigInt.fromI32(0)) {
    transfer.initialRelayerFeeAsset = Bytes.fromHexString("0x0000000000000000000000000000000000000000");
  }

  transfer.bumpRelayerFeeCount = (
    transfer.bumpRelayerFeeCount ? transfer.bumpRelayerFeeCount : BigInt.fromI32(0)
  )!.plus(BigInt.fromI32(1));

  const transferRelayerFee = getOrCreateTransferRelayFee(
    transfer.id,
    Bytes.fromHexString("0x0000000000000000000000000000000000000000"),
  );
  transferRelayerFee.fee = transferRelayerFee.fee.plus(event.params.increase);
  transferRelayerFee.save();

  transfer.relayerFees = transfer.relayerFees
    ? transfer.relayerFees!.concat([transferRelayerFee.id])
    : [transferRelayerFee.id];
  transfer.save();

  const relayerFeesIncrease = getOrCreateTransferRelayFeeIncrease(
    event.params.transferId.toHexString(),
    "0x0000000000000000000000000000000000000000",
    event,
  );
  relayerFeesIncrease.transfer = transfer.id;
  relayerFeesIncrease.increase = event.params.increase;
  relayerFeesIncrease.asset = Bytes.fromHexString("0x0000000000000000000000000000000000000000");
  relayerFeesIncrease.save();
}

/**
 * Updates subgraph records when TransferRelayerFeesIncreased events are emitted
 *
 * @param event - The contract event used to update the subgraph
 */
export function handleRelayerFeesIncreased(event: TransferRelayerFeesIncreased): void {
  let transfer = OriginTransfer.load(event.params.transferId.toHexString());

  if (transfer == null) {
    transfer = new OriginTransfer(event.params.transferId.toHexString());
  }

  if (transfer.bumpRelayerFeeCount === BigInt.fromI32(0)) {
    transfer.initialRelayerFeeAsset = event.params.asset;
  }

  transfer.bumpRelayerFeeCount = (
    transfer.bumpRelayerFeeCount ? transfer.bumpRelayerFeeCount : BigInt.fromI32(0)
  )!.plus(BigInt.fromI32(1));

  const transferRelayerFee = getOrCreateTransferRelayFee(transfer.id, event.params.asset);
  transferRelayerFee.fee = transferRelayerFee.fee.plus(event.params.increase);
  transferRelayerFee.save();

  transfer.relayerFees = transfer.relayerFees
    ? transfer.relayerFees!.concat([transferRelayerFee.id])
    : [transferRelayerFee.id];
  transfer.save();

  const relayerFeesIncrease = getOrCreateTransferRelayFeeIncrease(
    event.params.transferId.toHexString(),
    event.params.asset.toHexString(),
    event,
  );

  relayerFeesIncrease.transfer = transfer.id;
  relayerFeesIncrease.increase = event.params.increase;
  relayerFeesIncrease.asset = event.params.asset;
  relayerFeesIncrease.save();
}

/**
 * Updates subgraph records when SlippageUpdated events are emitted
 *
 * @param event - The contract event used to update the subgraph
 */
export function handleSlippageUpdated(event: SlippageUpdated): void {
  let transfer = DestinationTransfer.load(event.params.transferId.toHexString());

  if (transfer == null) {
    transfer = new DestinationTransfer(event.params.transferId.toHexString());
  }

  transfer.bumpSlippageCount = transfer.bumpSlippageCount
    ? transfer.bumpSlippageCount!.plus(BigInt.fromI32(1))
    : BigInt.fromI32(1);
  transfer.save();

  // should never be more than 1 but just in case theres somehow multiple in the same tx
  let slippageUpdate = SlippageUpdate.load(
    `${event.params.transferId.toHexString()}-${event.transaction.hash.toHexString()}`,
  );
  if (slippageUpdate == null) {
    slippageUpdate = new SlippageUpdate(
      `${event.params.transferId.toHexString()}-${event.transaction.hash.toHexString()}`,
    );
  }

  slippageUpdate.transfer = transfer.id;
  slippageUpdate.slippage = event.params.slippage;

  // tx
  slippageUpdate.caller = event.transaction.from;
  slippageUpdate.blockNumber = event.block.number;
  slippageUpdate.timestamp = event.block.timestamp;
  slippageUpdate.transactionHash = event.transaction.hash;
  slippageUpdate.gasLimit = event.transaction.gasLimit;
  slippageUpdate.gasPrice = event.transaction.gasPrice;
  slippageUpdate.save();
}
