import { createRequestContext, expect, mkBytes32 } from "@connext/nxtp-utils";
import { createStubInstance, SinonStub, SinonStubbedInstance, stub } from "sinon";
import { BigNumber, constants, providers } from "ethers";

import { NoHubConnector, NoProviderForDomain, NoSpokeConnector } from "../../../../src/tasks/propagate/errors";
import * as Mockable from "../../../../src/mockable";
import { getPropagateParams } from "../../../../src/tasks/propagate/helpers/arbitrum";
import { getInterfaceMock, propagateCtxMock, getBestProviderMock } from "../../../globalTestHook";
import { mock } from "../../../mock";
import { L1ToL2MessageGasEstimator } from "@arbitrum/sdk";

const requestContext = createRequestContext("test");

const estimateSubmissionFee = Promise.resolve(constants.One);
const estimateRetryableTicketGasLimit = Promise.resolve(constants.Two);
let l1ToL2: SinonStubbedInstance<L1ToL2MessageGasEstimator>;

describe("Helpers: Arbitrum ", () => {
  beforeEach(() => {
    l1ToL2 = createStubInstance(L1ToL2MessageGasEstimator, { estimateSubmissionFee, estimateRetryableTicketGasLimit });
    stub(Mockable, "getJsonRpcProvider").returns(createStubInstance(providers.JsonRpcProvider));
    stub(Mockable, "getL1ToL2MessageGasEstimator").returns(l1ToL2);
    stub(Mockable, "getBaseFee").resolves(BigNumber.from(1));
    getInterfaceMock.returns({ encodeFunctionData: stub().resolves(mkBytes32("0xcalldadta")) });
  });

  describe("#getPropagateParams", () => {
    it("should throw an error if no provider for spoke domain", async () => {
      delete propagateCtxMock.config.chains[mock.domain.B];
      getBestProviderMock.resolves(undefined);
      await expect(
        getPropagateParams(mock.domain.B, +mock.chain.B, +mock.chain.A, requestContext),
      ).to.eventually.be.rejectedWith(NoProviderForDomain);
    });

    it("should throw an error if no spoke connector", async () => {
      (propagateCtxMock.adapters.deployments.spokeConnector as SinonStub).returns(undefined);
      await expect(
        getPropagateParams(mock.domain.B, +mock.chain.B, +mock.chain.A, requestContext),
      ).to.eventually.be.rejectedWith(NoSpokeConnector);
    });

    it("should throw an error if no hub connector", async () => {
      (propagateCtxMock.adapters.deployments.hubConnector as SinonStub).returns(undefined);
      await expect(
        getPropagateParams(mock.domain.B, +mock.chain.B, +mock.chain.A, requestContext),
      ).to.eventually.be.rejectedWith(NoHubConnector);
    });

    it("should return necessary data successfully", async () => {
      l1ToL2.estimateAll.resolves({
        gasLimit: BigNumber.from(100),
        maxSubmissionFee: BigNumber.from(100),
        maxFeePerGas: BigNumber.from(100),
        totalL2GasCosts: BigNumber.from(100),
      });
      const data = await getPropagateParams(mock.domain.B, +mock.chain.B, +mock.chain.A, requestContext);
      expect(data).to.deep.eq({
        _connector: "",
        _fee: "64000",
        _encodedData:
          "0x00000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000005dc000000000000000000000000000000000000000000000000000000000000002a",
      });
    });

    it("should return dummy data if errors", async () => {
      l1ToL2.estimateAll.rejects("foo");
      const data = await getPropagateParams(mock.domain.B, +mock.chain.B, +mock.chain.A, requestContext);
      expect(data).to.deep.eq({
        _connector: "",
        _fee: "0",
        _encodedData:
          "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      });
    });
  });
});
