import BN from "bn.js";
import BigNumber from "bignumber.js";
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from "ethereum-abi-types-generator";

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  AppStore,
  AppStoreMethodNames,
  AppStoreEventsContext,
  AppStoreEvents
>;
export type AppStoreEvents = "OnBuy" | "OnSell" | "OnVerify";
export interface AppStoreEventsContext {
  OnBuy(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OnSell(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OnVerify(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type AppStoreMethodNames =
  | "new"
  | "appMap"
  | "appNTF"
  | "totalCount"
  | "getTokenURI"
  | "getAppName"
  | "getAppSeller"
  | "getAppPrice"
  | "getAppBuyers"
  | "sell"
  | "buy"
  | "verify";
export interface OnBuyEventEmittedResponse {
  buyer: string;
  seller: string;
  tokenId: string;
  price: string;
}
export interface OnSellEventEmittedResponse {
  seller: string;
  tokenId: string;
  name: string;
  price: string;
}
export interface OnVerifyEventEmittedResponse {
  verified: boolean;
  tokenId: string;
}
export interface AppMapResponse {
  price: string;
  seller: string;
}
export interface AppStore {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  "new"(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  appMap(parameter0: string): MethodConstantReturnContext<AppMapResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  appNTF(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalCount(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getTokenURI(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getAppName(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getAppSeller(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getAppPrice(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getAppBuyers(tokenId: string): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param name Type: string, Indexed: false
   * @param tokenURI Type: string, Indexed: false
   * @param price Type: uint256, Indexed: false
   */
  sell(name: string, tokenURI: string, price: string): MethodReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  buy(tokenId: string): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   * @param buyer Type: address, Indexed: false
   */
  verify(tokenId: string, buyer: string): MethodReturnContext;
}
