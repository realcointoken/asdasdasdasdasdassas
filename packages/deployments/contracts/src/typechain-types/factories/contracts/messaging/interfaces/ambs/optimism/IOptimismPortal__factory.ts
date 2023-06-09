/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOptimismPortal,
  IOptimismPortalInterface,
} from "../../../../../../contracts/messaging/interfaces/ambs/optimism/IOptimismPortal";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Types.WithdrawalTransaction",
        name: "_tx",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_l2OutputIndex",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "version",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "stateRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "messagePasserStorageRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "latestBlockhash",
            type: "bytes32",
          },
        ],
        internalType: "struct Types.OutputRootProof",
        name: "_outputRootProof",
        type: "tuple",
      },
      {
        internalType: "bytes[]",
        name: "_withdrawalProof",
        type: "bytes[]",
      },
    ],
    name: "proveWithdrawalTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOptimismPortal__factory {
  static readonly abi = _abi;
  static createInterface(): IOptimismPortalInterface {
    return new utils.Interface(_abi) as IOptimismPortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOptimismPortal {
    return new Contract(address, _abi, signerOrProvider) as IOptimismPortal;
  }
}
