import {
  mkAddress,
  Bid,
  expect,
  ExecStatus,
  getRandomBytes32,
  getNtpTimeSeconds,
  XTransfer,
  XTransferStatus,
  mkSig,
  RelayerType,
  mkBytes32,
} from "@connext/nxtp-utils";
import { stub, restore, reset, SinonStub } from "sinon";
import { constants, BigNumber } from "ethers";
import Broker from "foo-foo-mq";

import { ctxMock, getOperationsStub, getHelpersStub } from "../../../globalTestHook";
import { mock } from "../../../mock";
import { AuctionExpired, MissingXCall, NoBidsSent, ParamsInvalid } from "../../../../src/lib/errors";
import { executeFastPathData, storeFastPathData } from "../../../../src/lib/operations/execute";
import { getAllSubsets, getBidsRoundMap, getMinimumBidsCountForRound } from "../../../../src/lib/helpers/auctions";

const { requestContext } = mock.loggingContext("BID-TEST");

describe("Operations:Execute:FastPath", () => {
  // db
  let getQueuedTransfersStub: SinonStub;
  let getAuctionStub: SinonStub;
  let pruneAuctionData: SinonStub;
  let upsertTaskStub: SinonStub;
  let upsertAuctionStub: SinonStub;
  let getStatusStub: SinonStub;
  let setStatusStub: SinonStub;
  let getTransferStub: SinonStub;
  let storeTransfersStub: SinonStub;
  let pruneTransfersByIds: SinonStub;
  let setLiquidityStub: SinonStub;
  let getLiquidityStub: SinonStub;
  let publishStub: SinonStub;
  let canSubmitToRelayerStub: SinonStub;

  // operations
  let sendExecuteFastToRelayerStub: SinonStub<any[], any>;

  // helpers
  let encodeExecuteFromBidStub: SinonStub;
  let getDestinationLocalAssetStub: SinonStub;
  beforeEach(() => {
    const { auctions, transfers, routers } = ctxMock.adapters.cache;
    upsertAuctionStub = stub(auctions, "upsertAuction").resolves(0);
    getAuctionStub = stub(auctions, "getAuction");
    pruneAuctionData = stub(auctions, "pruneAuctionData").resolves();

    getStatusStub = stub(auctions, "getExecStatus").resolves(ExecStatus.None);
    setStatusStub = stub(auctions, "setExecStatus").resolves(1);

    getQueuedTransfersStub = stub(auctions, "getQueuedTransfers");

    upsertTaskStub = stub(auctions, "upsertMetaTxTask").resolves(0);

    getTransferStub = stub(transfers, "getTransfer");
    storeTransfersStub = stub(transfers, "storeTransfers");
    pruneTransfersByIds = stub(transfers, "pruneTransfersByIds").resolves();

    setLiquidityStub = stub(routers, "setLiquidity");
    getLiquidityStub = stub(routers, "getLiquidity");

    sendExecuteFastToRelayerStub = stub().resolves();
    getOperationsStub.returns({
      relayer: {
        sendExecuteFastToRelayer: sendExecuteFastToRelayerStub,
      },
    });

    encodeExecuteFromBidStub = stub().resolves(getRandomBytes32());
    getDestinationLocalAssetStub = stub().resolves(mock.asset.A.address);
    canSubmitToRelayerStub = stub().resolves({ canSubmit: true, needed: "0" });

    getHelpersStub.returns({
      auctions: {
        encodeExecuteFromBid: encodeExecuteFromBidStub,
        getDestinationLocalAsset: getDestinationLocalAssetStub,
        getBidsRoundMap,
        getAllSubsets,
        getMinimumBidsCountForRound,
      },
      relayerfee: {
        canSubmitToRelayer: canSubmitToRelayerStub,
      },
    });

    publishStub = stub(Broker, "publish").resolves();
  });

  describe("#storeFastPathData", () => {
    it("happy: should store bid in auction cache", async () => {
      const transfer: XTransfer = mock.entity.xtransfer();
      const transferId = transfer.transferId;
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(transfer);

      const bid: Bid = mock.entity.bid({ transferId });

      getStatusStub.onCall(0).resolves(ExecStatus.None);
      getStatusStub.onCall(1).resolves(ExecStatus.Enqueued);

      await storeFastPathData(bid, requestContext);

      expect(upsertAuctionStub).to.have.been.calledOnceWithExactly({
        transferId,
        origin: transfer.xparams.originDomain,
        destination: transfer.xparams.destinationDomain,
        bid,
      });
      expect(getStatusStub.callCount).to.eq(2);
      expect(getStatusStub.getCall(0).args).to.be.deep.eq([transferId]);
      expect(getStatusStub.getCall(1).args).to.be.deep.eq([transferId]);
    });

    it("should error if the auction has expired", async () => {
      const bid: Bid = mock.entity.bid();
      getStatusStub.resolves(ExecStatus.Completed);
      await expect(storeFastPathData(bid, requestContext)).to.be.rejectedWith(AuctionExpired);
    });

    it("should error if transfer is missing", async () => {
      getTransferStub.resolves(undefined);
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(undefined);
      const bid: Bid = mock.entity.bid();
      await expect(storeFastPathData(bid, requestContext)).to.be.rejectedWith(MissingXCall);
    });

    it("should error if xcall is missing", async () => {
      const transfer: XTransfer = mock.entity.xtransfer();
      getTransferStub.resolves({
        ...transfer,
        origin: undefined,
      });
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(undefined);
      const bid: Bid = mock.entity.bid();
      await expect(storeFastPathData(bid, requestContext)).to.be.rejectedWith(MissingXCall);
    });

    it("should cache transfer if missing from cache but found in subgraph", async () => {
      getTransferStub.resolves(undefined);
      const bid: Bid = mock.entity.bid();
      const transfer: XTransfer = {
        ...mock.entity.xtransfer(),
        transferId: bid.transferId,
      };
      (ctxMock.adapters.subgraph as any).getOriginTransferById.resolves(transfer);
      await storeFastPathData(bid, requestContext);
      expect(storeTransfersStub).to.have.been.calledOnceWithExactly([transfer]);
    });

    it("should throw expired if transfer.execute or transfer.reconcile are defined", async () => {
      const bid: Bid = mock.entity.bid();
      const transfer: XTransfer = {
        ...mock.entity.xtransfer({
          status: XTransferStatus.Executed,
        }),
        transferId: bid.transferId,
      };
      (ctxMock.adapters.subgraph as any).getOriginTransferById.resolves(transfer);
      await expect(storeFastPathData(bid, requestContext)).to.be.rejectedWith(AuctionExpired);
    });
  });

  describe("#executeFastPathData", () => {
    beforeEach(() => {});
    afterEach(() => {
      restore();
      reset();
    });
    const mockAuctionDataBatch = (count: number) =>
      new Array(count).fill(0).map(() =>
        mock.entity.auction({
          timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        }),
      );

    it("should pick up the auction rounds which has enough number of bids", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);

      const router1 = mkAddress("0x111");
      const router2 = mkAddress("0x112");
      const router3 = mkAddress("0x113");
      const router4 = mkAddress("0x114");
      const router5 = mkAddress("0x115");
      const router6 = mkAddress("0x116");
      const router7 = mkAddress("0x117");
      const bids: Record<string, Bid> = {};
      bids[router1] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router1,
        signatures: {
          "1": mkSig("0xrouter1_1"),
        },
      };
      bids[router2] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router2,
        signatures: {
          "1": mkSig("0xrouter2_1"),
          "2": mkSig("0xrouter2_2"),
          "4": mkSig("0xrouter2_4"),
        },
      };
      bids[router3] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router3,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };
      bids[router4] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router4,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };
      bids[router5] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router5,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };
      bids[router6] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router6,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };
      bids[router7] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router7,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };

      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids,
      });
      getAuctionStub.resolves(auction);

      const transfer = mock.entity.xtransfer({ transferId });
      getTransferStub.resolves(transfer);
      await executeFastPathData(transferId, requestContext);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[0]).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[1][0]).to.deep.contain({
        origin: "1111",
        routerVersion: "0.0.0",
        transferId,
      });
      // bid is random
      expect([router1, router2, router3, router4, router5, router6, router7]).to.deep.include(
        sendExecuteFastToRelayerStub.getCall(0).args[1][0].router,
      );
      expect(setStatusStub.getCall(0).args).to.be.deep.eq([transferId, ExecStatus.Sent]);
      expect(upsertTaskStub.getCall(0).args).to.be.deep.eq([{ transferId, taskId }]);
    });

    it("should pick up a round-2 auction if a round-1 auction doesn't exist", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);

      const router1 = mkAddress("0x111");
      const router2 = mkAddress("0x112");
      const router3 = mkAddress("0x113");
      const bids: Record<string, Bid> = {};
      bids[router1] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router1,
        signatures: {
          "2": mkSig("0xrouter1_2"),
          "3": mkSig("0xrouter1_3"),
          "4": mkSig("0xrouter1_4"),
        },
      };
      bids[router2] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router2,
        signatures: {
          "2": mkSig("0xrouter2_2"),
          "3": mkSig("0xrouter2_3"),
        },
      };

      bids[router3] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router3,
        signatures: {
          "2": mkSig("0xrouter3_2"),
          "4": mkSig("0xrouter3_4"),
        },
      };

      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids,
      });
      getAuctionStub.resolves(auction);

      const transfer = mock.entity.xtransfer({ transferId });
      getTransferStub.resolves(transfer);
      await executeFastPathData(transferId, requestContext);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);

      // round-2 needs to be selected
      expect(sendExecuteFastToRelayerStub.getCall(0).args[0]).to.be.eq(2);
      sendExecuteFastToRelayerStub.getCall(0).args[1].forEach((bid: Bid) => {
        expect(bid).to.deep.contain({
          routerVersion: "0.0.0",
          transferId: transferId,
          origin: "1111",
        });
        expect(bid.signatures["2"]).to.be.ok;
      });
      expect(setStatusStub.getCall(0).args).to.be.deep.eq([transferId, ExecStatus.Sent]);
      expect(upsertTaskStub.getCall(0).args).to.be.deep.eq([{ transferId, taskId }]);
    });

    it("should skip the combination with the bid of which router has insufficient liquidity", async () => {
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);

      const router1 = mkAddress("0x111");
      const router2 = mkAddress("0x112");
      const router3 = mkAddress("0x113");
      const bids: Record<string, Bid> = {};
      bids[router1] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router1,
        signatures: {
          "2": mkSig("0xrouter1_2"),
          "3": mkSig("0xrouter1_3"),
          "4": mkSig("0xrouter1_4"),
        },
      };
      bids[router2] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router2,
        signatures: {
          "2": mkSig("0xrouter2_2"),
          "3": mkSig("0xrouter2_3"),
        },
      };

      bids[router3] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router3,
        signatures: {
          "2": mkSig("0xrouter3_2"),
          "4": mkSig("0xrouter3_4"),
        },
      };

      getLiquidityStub.callsFake((router: string, destination: string, asset: string) => {
        if (router == router3) {
          return BigNumber.from("499");
        } else {
          return BigNumber.from("500");
        }
      });

      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids,
      });
      getAuctionStub.resolves(auction);

      const transfer = mock.entity.xtransfer({ transferId });
      getTransferStub.resolves(transfer);
      await executeFastPathData(transferId, requestContext);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);

      // round-2 needs to be selected
      expect(sendExecuteFastToRelayerStub.getCall(0).args[0]).to.be.eq(2);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[1]).to.be.deep.eq([
        {
          routerVersion: "0.0.0",
          transferId: transferId,
          origin: "1111",
          router: router1,
          signatures: {
            "2": mkSig("0xrouter1_2"),
          },
        },
        {
          routerVersion: "0.0.0",
          transferId: transferId,
          origin: "1111",
          router: router2,
          signatures: {
            "2": mkSig("0xrouter2_2"),
          },
        },
      ]);
      expect(setStatusStub.getCall(0).args).to.be.deep.eq([transferId, ExecStatus.Sent]);
      expect(upsertTaskStub.getCall(0).args).to.be.deep.eq([{ transferId, taskId }]);
    });

    it("should wait then proceed if time elapsed is insufficient", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const router1 = mkAddress("0x1");
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mock.entity.auction({
        timestamp: getNtpTimeSeconds().toString(),
        bids: { [router1]: mock.entity.bid() },
      });
      getAuctionStub.resolves(auction);

      await executeFastPathData(transferId, requestContext);

      expect(getTransferStub.callCount).to.be.eq(1);
    });

    it("should ignore if transfer is undefined", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mockAuctionDataBatch(1)[0];
      getAuctionStub.resolves(auction);
      getTransferStub.resolves(undefined);

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("should ignore if transfer is executed", async () => {
      (ctxMock.adapters.subgraph.getDestinationTransferById as SinonStub).resolves({ foo: "bar" });

      getTransferStub.resolves(mock.entity.xtransfer());

      getQueuedTransfersStub.resolves([mock.entity.xtransfer().transferId]);
      const auction = mockAuctionDataBatch(1)[0];
      getAuctionStub.resolves(auction);

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("should ignore if transfer xcall or relayer fee undefined", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mockAuctionDataBatch(1)[0];
      getAuctionStub.resolves(auction);
      const transfer: XTransfer = mock.entity.xtransfer();
      getTransferStub.resolves({
        ...transfer,
        origin: undefined,
      });

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("should skip if not enough bids for the round(s)", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids: {
          [mkAddress()]: {
            ...mock.entity.bid(),
            signatures: {
              "2": mock.signature,
            },
          },
        },
      });
      getAuctionStub.resolves(auction);

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("should skip if no liquidity found for router in subgraph", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mockAuctionDataBatch(1)[0];
      getAuctionStub.resolves(auction);

      getLiquidityStub.resolves(undefined);
      (ctxMock.adapters.subgraph as any).getAssetBalance.resolves(constants.Zero);

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("should cache liquidity", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const router = mkAddress("0x1");
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids: { router: mock.entity.bid() },
      });
      getAuctionStub.resolves(auction);

      const amountSent = BigNumber.from("100");
      const routerFunds = BigNumber.from("10000");
      const expectedRouterFunds = routerFunds.sub(amountSent);

      const transfer: XTransfer = mock.entity.xtransfer({
        amount: amountSent.toString(), // amount required
      });
      getTransferStub.resolves(transfer);

      getLiquidityStub.resolves(undefined);
      (ctxMock.adapters.subgraph as any).getAssetBalance.resolves(routerFunds);

      await executeFastPathData(mkBytes32(), requestContext);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      // Should update beforehand since the getLiquidity cache stub returned undefined.
      expect(setLiquidityStub.getCall(0).args).to.be.deep.eq([
        mkAddress("0xc0ffeebabe"),
        transfer.xparams.destinationDomain,
        transfer.origin!.assets.bridged.asset,
        routerFunds,
      ]);
      // Should update to reflect new "theoretical amount".
      expect(setLiquidityStub.getCall(1).args).to.be.deep.eq([
        mkAddress("0xc0ffeebabe"),
        transfer.xparams.destinationDomain,
        transfer.origin!.assets.bridged.asset,
        expectedRouterFunds,
      ]);

      // Should have sent!
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);
    });

    it("should skip router with insufficient liquidity", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });

      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);
      const auction = mockAuctionDataBatch(1)[0];
      getAuctionStub.resolves(auction);
      const transfer = mock.entity.xtransfer();
      getTransferStub.resolves(transfer);
      getLiquidityStub.resolves(undefined);

      (ctxMock.adapters.subgraph as any).getAssetBalance.resolves(BigNumber.from("1"));

      await expect(executeFastPathData(mkBytes32(), requestContext)).to.be.rejectedWith(NoBidsSent);

      expect(getAuctionStub.callCount).to.be.eq(1);
      expect(getTransferStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(0);
    });

    it("does nothing if none queued", async () => {
      getQueuedTransfersStub.resolves([]);
      await executeFastPathData(mkBytes32(), requestContext);
    });

    it("should succeed with 0-value amount", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);

      const amount = "0";

      const router1 = mkAddress("0x111");
      const router2 = mkAddress("0x112");
      const router3 = mkAddress("0x113");
      const bids: Record<string, Bid> = {};
      bids[router1] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router1,
        signatures: {
          "1": mkSig("0xrouter1_1"),
        },
      };
      bids[router2] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router2,
        signatures: {
          "1": mkSig("0xrouter2_1"),
          "2": mkSig("0xrouter2_2"),
          "4": mkSig("0xrouter2_4"),
        },
      };
      bids[router3] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router3,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };

      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids,
      });
      getAuctionStub.resolves(auction);

      const transfer = mock.entity.xtransfer({ transferId, amount });
      getTransferStub.resolves(transfer);
      await executeFastPathData(transferId, requestContext);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[0]).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[1][0]).to.deep.contain({
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
      });
      expect([router1, router2, router3]).to.deep.contain(sendExecuteFastToRelayerStub.getCall(0).args[1][0].router);
      expect(setStatusStub.getCall(0).args).to.be.deep.eq([transferId, ExecStatus.Sent]);
      expect(upsertTaskStub.getCall(0).args).to.be.deep.eq([{ transferId, taskId }]);
    });

    it("should succeed with native asset", async () => {
      getLiquidityStub.resolves(BigNumber.from("10000000000000000000"));
      const taskId = getRandomBytes32();
      sendExecuteFastToRelayerStub.resolves({ taskId });
      const transferId = getRandomBytes32();
      getQueuedTransfersStub.resolves([transferId]);

      const asset = constants.AddressZero;
      const amount = "0";

      const router1 = mkAddress("0x111");
      const router2 = mkAddress("0x112");
      const router3 = mkAddress("0x113");
      const bids: Record<string, Bid> = {};
      bids[router1] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router1,
        signatures: {
          "1": mkSig("0xrouter1_1"),
        },
      };
      bids[router2] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router2,
        signatures: {
          "1": mkSig("0xrouter2_1"),
          "2": mkSig("0xrouter2_2"),
          "4": mkSig("0xrouter2_4"),
        },
      };
      bids[router3] = {
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
        router: router3,
        signatures: {
          "1": mkSig("0xrouter3_1"),
          "2": mkSig("0xrouter3_2"),
          "3": mkSig("0xrouter3_3"),
        },
      };

      const auction = mock.entity.auction({
        timestamp: (getNtpTimeSeconds() - ctxMock.config.auctionWaitTime - 20).toString(),
        bids,
      });
      getAuctionStub.resolves(auction);

      const transfer = mock.entity.xtransfer({ transferId, amount, asset });
      getTransferStub.resolves(transfer);
      await executeFastPathData(transferId, requestContext);
      expect(sendExecuteFastToRelayerStub.callCount).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[0]).to.be.eq(1);
      expect(sendExecuteFastToRelayerStub.getCall(0).args[1][0]).to.be.deep.contain({
        routerVersion: "0.0.0",
        transferId: transferId,
        origin: "1111",
      });
      expect([router1, router2, router3]).to.deep.contain(sendExecuteFastToRelayerStub.getCall(0).args[1][0].router);
      expect(setStatusStub.getCall(0).args).to.be.deep.eq([transferId, ExecStatus.Sent]);
      expect(upsertTaskStub.getCall(0).args).to.be.deep.eq([{ transferId, taskId }]);
    });
  });
});
