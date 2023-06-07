import {
  BaseRequestContext,
  createRequestContext,
  expect,
  Logger,
  mock,
  RelayerType,
  RootMessage,
  mkBytes32,
  RelayerTaskStatus,
  getNtpTimeSeconds,
} from "@connext/nxtp-utils";
import { SinonStub, stub } from "sinon";

import * as ProcessFromRootFns from "../../../../src/tasks/processFromRoot/operations/processFromRoot";
import { CouldNotFindRelayer } from "../../../../src/tasks/processFromRoot/errors";
import * as MockableFns from "../../../../src/mockable";
import { processFromRootCtxMock, sendWithRelayerWithBackupStub } from "../../../globalTestHook";
import { ProcessConfigNotAvailable } from "../../../../src/tasks/processFromRoot/errors";
import { DEFAULT_RELAYER_WAIT_TIME } from "../../../../src/config";

const requestContext = createRequestContext("test");
describe("Operations: ProcessFromRoot", () => {
  describe("#processSingleRootMessage", () => {
    let configStub: SinonStub<any[], any>;

    beforeEach(() => {
      configStub = stub(ProcessFromRootFns, "processorConfigs").value({
        [mock.entity.rootMessage().spokeDomain]: {
          getArgs: () => Promise.resolve([]),
          hubConnectorPrefix: "Optimism",
        },
      });
      stub(MockableFns, "encodeProcessMessageFromRoot").returns("0xfaded");
    });

    it("should process message from root", async () => {
      const rootMsg = mock.entity.rootMessage();
      await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(sendWithRelayerWithBackupStub).to.have.been.calledOnce;
    });

    it("should process message from root", async () => {
      const rootMsg = mock.entity.rootMessage();
      await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(sendWithRelayerWithBackupStub).to.have.been.calledOnce;
    });

    it("should error if cannot find relayer", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Connext;

      await expect(ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext)).to.be.rejectedWith(
        CouldNotFindRelayer,
      );
    });

    it("should not send if successfully sent", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Mock;
      const ret = await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(ret).to.be.eq(undefined);
      expect(sendWithRelayerWithBackupStub).to.not.have.been.called;
    });

    it("should send again if exec pending", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Mock;
      (processFromRootCtxMock.adapters.relayers[0].instance.getTaskStatus as SinonStub).resolves(
        RelayerTaskStatus.ExecPending,
      );
      await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(sendWithRelayerWithBackupStub).to.have.been.calledOnce;
    });

    it("should send again if exec failed", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Mock;
      (processFromRootCtxMock.adapters.relayers[0].instance.getTaskStatus as SinonStub).resolves(
        RelayerTaskStatus.Cancelled,
      );
      await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(sendWithRelayerWithBackupStub).to.have.been.calledOnce;
    });

    it("should not send if sent timestamp is within window", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Mock;
      rootMsg.sentTimestamp = getNtpTimeSeconds() - 30;
      (processFromRootCtxMock.adapters.relayers[0].instance.getTaskStatus as SinonStub).resolves(
        RelayerTaskStatus.ExecPending,
      );
      const ret = await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(ret).to.be.eq(undefined);
      expect(sendWithRelayerWithBackupStub).to.callCount(0);
    });

    it("should send if sent timestamp is outside window", async () => {
      const rootMsg = mock.entity.rootMessage();
      rootMsg.sentTaskId = mkBytes32("0xdeadbeef");
      rootMsg.relayerType = RelayerType.Mock;
      rootMsg.sentTimestamp = getNtpTimeSeconds() - (DEFAULT_RELAYER_WAIT_TIME + 1);
      (processFromRootCtxMock.adapters.relayers[0].instance.getTaskStatus as SinonStub).resolves(
        RelayerTaskStatus.ExecPending,
      );
      await ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext);
      expect(sendWithRelayerWithBackupStub).to.have.been.calledOnce;
      expect(processFromRootCtxMock.adapters.database.saveSentRootMessages).to.have.been.calledOnceWithExactly([
        rootMsg,
      ]);
    });

    it("should error if no config", async () => {
      configStub.value({});
      const rootMsg = mock.entity.rootMessage();
      await expect(ProcessFromRootFns.processSingleRootMessage(rootMsg, requestContext)).to.be.rejectedWith(
        ProcessConfigNotAvailable,
      );
    });
  });

  describe("#processFromRoot", () => {
    let processSingleRootMessageStub: SinonStub<
      [
        rootMessage: {
          id: string;
          spokeDomain: string;
          hubDomain: string;
          root: string;
          caller: string;
          transactionHash: string;
          timestamp: number;
          gasPrice: string;
          gasLimit: string;
          blockNumber: number;
          processed: boolean;
          count: number;
        },
        requestContext: BaseRequestContext,
      ],
      Promise<string | undefined>
    >;
    beforeEach(() => {
      processSingleRootMessageStub = stub(ProcessFromRootFns, "processSingleRootMessage").resolves("0xbeefee");
    });

    it("should not process if error but still work", async () => {
      processSingleRootMessageStub.rejects(new Error("test"));
      await expect(ProcessFromRootFns.processFromRoot()).to.be.fulfilled;
    });

    it("should only process a single root message for each domain", async () => {
      processSingleRootMessageStub.resolves(mkBytes32());
      const rootMessages: RootMessage[] = [
        { ...mock.entity.rootMessage(), timestamp: 1, spokeDomain: "test1" },
        { ...mock.entity.rootMessage(), timestamp: 2, spokeDomain: "test1" },
        { ...mock.entity.rootMessage(), timestamp: 1, spokeDomain: "test2" },
        { ...mock.entity.rootMessage(), timestamp: 2, spokeDomain: "test2" },
        { ...mock.entity.rootMessage(), timestamp: 1, spokeDomain: "test3" },
        { ...mock.entity.rootMessage(), timestamp: 2, spokeDomain: "test3" },
      ];

      (processFromRootCtxMock.adapters.database.getRootMessages as SinonStub).resolves(rootMessages);

      await ProcessFromRootFns.processFromRoot();

      expect(processSingleRootMessageStub).to.be.calledWith(rootMessages[1]);
      expect(processSingleRootMessageStub).to.be.calledWith(rootMessages[3]);
      expect(processSingleRootMessageStub).to.be.calledWith(rootMessages[5]);
      expect(processSingleRootMessageStub).to.callCount(3);
    });
  });
});
