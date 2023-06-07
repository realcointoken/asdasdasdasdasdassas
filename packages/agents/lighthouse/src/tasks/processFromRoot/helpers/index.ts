import { RequestContext } from "@connext/nxtp-utils";

export { getProcessFromOptimismRootArgs } from "./optimism";
export { getProcessFromPolygonRootArgs } from "./polygon";
export { getProcessFromGnosisRootArgs } from "./gnosis";
export { getProcessFromArbitrumRootArgs } from "./arbitrum";
export { getProcessFromZkSyncRootArgs } from "./zksync";

export type GetProcessArgsParams = {
  spokeChainId: number;
  hubChainId: number;
  spokeDomainId: string;
  hubDomainId: string;
  spokeProvider: string;
  hubProvider: string;
  message: string;
  sendHash: string;
  blockNumber: number;
  _requestContext: RequestContext;
};
