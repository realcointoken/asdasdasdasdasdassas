/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface IArbitrumInboxInterface extends utils.Interface {
  functions: {
    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createRetryableTicket"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createRetryableTicket",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "createRetryableTicket",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IArbitrumInbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IArbitrumInboxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createRetryableTicket(
      destAddr: PromiseOrValue<string>,
      arbTxCallValue: PromiseOrValue<BigNumberish>,
      maxSubmissionCost: PromiseOrValue<BigNumberish>,
      submissionRefundAddress: PromiseOrValue<string>,
      valueRefundAddress: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createRetryableTicket(
    destAddr: PromiseOrValue<string>,
    arbTxCallValue: PromiseOrValue<BigNumberish>,
    maxSubmissionCost: PromiseOrValue<BigNumberish>,
    submissionRefundAddress: PromiseOrValue<string>,
    valueRefundAddress: PromiseOrValue<string>,
    maxGas: PromiseOrValue<BigNumberish>,
    gasPriceBid: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createRetryableTicket(
      destAddr: PromiseOrValue<string>,
      arbTxCallValue: PromiseOrValue<BigNumberish>,
      maxSubmissionCost: PromiseOrValue<BigNumberish>,
      submissionRefundAddress: PromiseOrValue<string>,
      valueRefundAddress: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    createRetryableTicket(
      destAddr: PromiseOrValue<string>,
      arbTxCallValue: PromiseOrValue<BigNumberish>,
      maxSubmissionCost: PromiseOrValue<BigNumberish>,
      submissionRefundAddress: PromiseOrValue<string>,
      valueRefundAddress: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createRetryableTicket(
      destAddr: PromiseOrValue<string>,
      arbTxCallValue: PromiseOrValue<BigNumberish>,
      maxSubmissionCost: PromiseOrValue<BigNumberish>,
      submissionRefundAddress: PromiseOrValue<string>,
      valueRefundAddress: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}