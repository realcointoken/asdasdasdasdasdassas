// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConnextZkSync2TestTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  zksync2test_BigDecimal: any;
  BigInt: any;
  zksync2test_Bytes: any;
};

export type zksync2test_AggregateRoot = {
  id: Scalars['ID'];
  root: Scalars['zksync2test_Bytes'];
  blockNumber: Scalars['BigInt'];
};

export type zksync2test_AggregateRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  root?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_AggregateRoot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_AggregateRoot_filter>>>;
};

export type zksync2test_AggregateRoot_orderBy =
  | 'id'
  | 'root'
  | 'blockNumber';

export type zksync2test_Asset = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['zksync2test_Bytes']>;
  decimal?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['zksync2test_Bytes']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  adoptedAsset?: Maybe<Scalars['zksync2test_Bytes']>;
  localAsset?: Maybe<Scalars['zksync2test_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  status?: Maybe<zksync2test_AssetStatus>;
};

export type zksync2test_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  locked: Scalars['BigInt'];
  supplied: Scalars['BigInt'];
  removed: Scalars['BigInt'];
  router: zksync2test_Router;
  asset: zksync2test_Asset;
  feesEarned: Scalars['BigInt'];
};

export type zksync2test_AssetBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  locked?: InputMaybe<Scalars['BigInt']>;
  locked_not?: InputMaybe<Scalars['BigInt']>;
  locked_gt?: InputMaybe<Scalars['BigInt']>;
  locked_lt?: InputMaybe<Scalars['BigInt']>;
  locked_gte?: InputMaybe<Scalars['BigInt']>;
  locked_lte?: InputMaybe<Scalars['BigInt']>;
  locked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  locked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplied?: InputMaybe<Scalars['BigInt']>;
  supplied_not?: InputMaybe<Scalars['BigInt']>;
  supplied_gt?: InputMaybe<Scalars['BigInt']>;
  supplied_lt?: InputMaybe<Scalars['BigInt']>;
  supplied_gte?: InputMaybe<Scalars['BigInt']>;
  supplied_lte?: InputMaybe<Scalars['BigInt']>;
  supplied_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplied_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  removed?: InputMaybe<Scalars['BigInt']>;
  removed_not?: InputMaybe<Scalars['BigInt']>;
  removed_gt?: InputMaybe<Scalars['BigInt']>;
  removed_lt?: InputMaybe<Scalars['BigInt']>;
  removed_gte?: InputMaybe<Scalars['BigInt']>;
  removed_lte?: InputMaybe<Scalars['BigInt']>;
  removed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  removed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<zksync2test_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<zksync2test_Asset_filter>;
  feesEarned?: InputMaybe<Scalars['BigInt']>;
  feesEarned_not?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lt?: InputMaybe<Scalars['BigInt']>;
  feesEarned_gte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_lte?: InputMaybe<Scalars['BigInt']>;
  feesEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_AssetBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_AssetBalance_filter>>>;
};

export type zksync2test_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'locked'
  | 'supplied'
  | 'removed'
  | 'router'
  | 'router__id'
  | 'router__isActive'
  | 'router__owner'
  | 'router__recipient'
  | 'router__proposedOwner'
  | 'router__proposedTimestamp'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'feesEarned';

export type zksync2test_AssetStatus = {
  id: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
};

export type zksync2test_AssetStatus_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Scalars['Boolean']>;
  status_not?: InputMaybe<Scalars['Boolean']>;
  status_in?: InputMaybe<Array<Scalars['Boolean']>>;
  status_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_AssetStatus_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_AssetStatus_filter>>>;
};

export type zksync2test_AssetStatus_orderBy =
  | 'id'
  | 'status';

export type zksync2test_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  key_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  decimal?: InputMaybe<Scalars['BigInt']>;
  decimal_not?: InputMaybe<Scalars['BigInt']>;
  decimal_gt?: InputMaybe<Scalars['BigInt']>;
  decimal_lt?: InputMaybe<Scalars['BigInt']>;
  decimal_gte?: InputMaybe<Scalars['BigInt']>;
  decimal_lte?: InputMaybe<Scalars['BigInt']>;
  decimal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedAsset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<Scalars['String']>;
  status_not?: InputMaybe<Scalars['String']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<Scalars['String']>>;
  status_not_in?: InputMaybe<Array<Scalars['String']>>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_nocase?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_nocase?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_?: InputMaybe<zksync2test_AssetStatus_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_Asset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_Asset_filter>>>;
};

export type zksync2test_Asset_orderBy =
  | 'id'
  | 'key'
  | 'decimal'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'adoptedAsset'
  | 'localAsset'
  | 'blockNumber'
  | 'status'
  | 'status__id'
  | 'status__status';

export type zksync2test_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type zksync2test_Block_height = {
  hash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type zksync2test_ConnectorMeta = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  amb?: Maybe<Scalars['zksync2test_Bytes']>;
  rootManager?: Maybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector?: Maybe<Scalars['zksync2test_Bytes']>;
};

export type zksync2test_ConnectorMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amb?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  amb_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  amb_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  amb_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  rootManager_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  rootManager_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  rootManager_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  mirrorConnector_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  mirrorConnector_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  mirrorConnector_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_ConnectorMeta_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_ConnectorMeta_filter>>>;
};

export type zksync2test_ConnectorMeta_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'amb'
  | 'rootManager'
  | 'mirrorConnector';

export type zksync2test_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['zksync2test_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<zksync2test_TransferStatus>;
  routers?: Maybe<Array<zksync2test_Router>>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['zksync2test_Bytes']>;
  delegate?: Maybe<Scalars['zksync2test_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['zksync2test_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  bumpSlippageCount?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['zksync2test_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['zksync2test_Bytes']>;
  asset?: Maybe<zksync2test_Asset>;
  amount?: Maybe<Scalars['BigInt']>;
  routersFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['zksync2test_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  executedTxOrigin?: Maybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller?: Maybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['zksync2test_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledTxOrigin?: Maybe<Scalars['zksync2test_Bytes']>;
};


export type zksync2test_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Router_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Router_filter>;
};

export type zksync2test_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<zksync2test_TransferStatus>;
  status_not?: InputMaybe<zksync2test_TransferStatus>;
  status_in?: InputMaybe<Array<zksync2test_TransferStatus>>;
  status_not_in?: InputMaybe<Array<zksync2test_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<zksync2test_Router_filter>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  to_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpSlippageCount?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_not?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_gt?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_lt?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_gte?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_lte?: InputMaybe<Scalars['BigInt']>;
  bumpSlippageCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpSlippageCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<zksync2test_Asset_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee?: InputMaybe<Scalars['BigInt']>;
  routersFee_not?: InputMaybe<Scalars['BigInt']>;
  routersFee_gt?: InputMaybe<Scalars['BigInt']>;
  routersFee_lt?: InputMaybe<Scalars['BigInt']>;
  routersFee_gte?: InputMaybe<Scalars['BigInt']>;
  routersFee_lte?: InputMaybe<Scalars['BigInt']>;
  routersFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  routersFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTxOrigin?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedTxOrigin_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  executedTxOrigin_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  executedTxOrigin_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTimestamp?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTxOrigin?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledTxOrigin_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  reconciledTxOrigin_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  reconciledTxOrigin_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_DestinationTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_DestinationTransfer_filter>>>;
};

export type zksync2test_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'routers'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'bumpSlippageCount'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'amount'
  | 'routersFee'
  | 'executedCaller'
  | 'executedTransactionHash'
  | 'executedTimestamp'
  | 'executedGasPrice'
  | 'executedGasLimit'
  | 'executedBlockNumber'
  | 'executedTxOrigin'
  | 'reconciledCaller'
  | 'reconciledTransactionHash'
  | 'reconciledTimestamp'
  | 'reconciledGasPrice'
  | 'reconciledGasLimit'
  | 'reconciledBlockNumber'
  | 'reconciledTxOrigin';

/** Defines the order direction, either ascending or descending */
export type zksync2test_OrderDirection =
  | 'asc'
  | 'desc';

export type zksync2test_OriginMessage = {
  id: Scalars['ID'];
  transferId?: Maybe<Scalars['zksync2test_Bytes']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  leaf?: Maybe<Scalars['zksync2test_Bytes']>;
  index?: Maybe<Scalars['BigInt']>;
  message?: Maybe<Scalars['zksync2test_Bytes']>;
  root?: Maybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: Maybe<Scalars['zksync2test_Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  rootCount?: Maybe<zksync2test_RootCount>;
};

export type zksync2test_OriginMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  message?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  message_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rootCount?: InputMaybe<Scalars['String']>;
  rootCount_not?: InputMaybe<Scalars['String']>;
  rootCount_gt?: InputMaybe<Scalars['String']>;
  rootCount_lt?: InputMaybe<Scalars['String']>;
  rootCount_gte?: InputMaybe<Scalars['String']>;
  rootCount_lte?: InputMaybe<Scalars['String']>;
  rootCount_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_contains?: InputMaybe<Scalars['String']>;
  rootCount_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_contains?: InputMaybe<Scalars['String']>;
  rootCount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_?: InputMaybe<zksync2test_RootCount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_OriginMessage_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_OriginMessage_filter>>>;
};

export type zksync2test_OriginMessage_orderBy =
  | 'id'
  | 'transferId'
  | 'destinationDomain'
  | 'leaf'
  | 'index'
  | 'message'
  | 'root'
  | 'transactionHash'
  | 'blockNumber'
  | 'rootCount'
  | 'rootCount__id'
  | 'rootCount__count';

export type zksync2test_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['zksync2test_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<zksync2test_TransferStatus>;
  messageHash?: Maybe<Scalars['zksync2test_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['zksync2test_Bytes']>;
  delegate?: Maybe<Scalars['zksync2test_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['zksync2test_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['zksync2test_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['zksync2test_Bytes']>;
  asset?: Maybe<zksync2test_Asset>;
  transactingAsset?: Maybe<Scalars['zksync2test_Bytes']>;
  message?: Maybe<zksync2test_OriginMessage>;
  bumpRelayerFeeCount?: Maybe<Scalars['BigInt']>;
  relayerFees?: Maybe<Array<zksync2test_RelayerFee>>;
  initialRelayerFeeAsset?: Maybe<Scalars['zksync2test_Bytes']>;
  caller?: Maybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: Maybe<Scalars['zksync2test_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  txOrigin?: Maybe<Scalars['zksync2test_Bytes']>;
};


export type zksync2test_OriginTransferrelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RelayerFee_filter>;
};

export type zksync2test_OriginTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<zksync2test_TransferStatus>;
  status_not?: InputMaybe<zksync2test_TransferStatus>;
  status_in?: InputMaybe<Array<zksync2test_TransferStatus>>;
  status_not_in?: InputMaybe<Array<zksync2test_TransferStatus>>;
  messageHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  messageHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  messageHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  messageHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  to_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<zksync2test_Asset_filter>;
  transactingAsset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_?: InputMaybe<zksync2test_OriginMessage_filter>;
  bumpRelayerFeeCount?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_not?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_gt?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_lt?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_gte?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_lte?: InputMaybe<Scalars['BigInt']>;
  bumpRelayerFeeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bumpRelayerFeeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFees?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_contains?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  relayerFees_?: InputMaybe<zksync2test_RelayerFee_filter>;
  initialRelayerFeeAsset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  initialRelayerFeeAsset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  initialRelayerFeeAsset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  initialRelayerFeeAsset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txOrigin?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  txOrigin_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  txOrigin_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  txOrigin_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_OriginTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_OriginTransfer_filter>>>;
};

export type zksync2test_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'messageHash'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'transactingAsset'
  | 'message'
  | 'message__id'
  | 'message__transferId'
  | 'message__destinationDomain'
  | 'message__leaf'
  | 'message__index'
  | 'message__message'
  | 'message__root'
  | 'message__transactionHash'
  | 'message__blockNumber'
  | 'bumpRelayerFeeCount'
  | 'relayerFees'
  | 'initialRelayerFeeAsset'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber'
  | 'txOrigin';

export type Query = {
  zksync2test_asset?: Maybe<zksync2test_Asset>;
  zksync2test_assets: Array<zksync2test_Asset>;
  zksync2test_assetStatus?: Maybe<zksync2test_AssetStatus>;
  zksync2test_assetStatuses: Array<zksync2test_AssetStatus>;
  zksync2test_assetBalance?: Maybe<zksync2test_AssetBalance>;
  zksync2test_assetBalances: Array<zksync2test_AssetBalance>;
  zksync2test_router?: Maybe<zksync2test_Router>;
  zksync2test_routers: Array<zksync2test_Router>;
  zksync2test_routerDailyTVL?: Maybe<zksync2test_RouterDailyTVL>;
  zksync2test_routerDailyTVLs: Array<zksync2test_RouterDailyTVL>;
  zksync2test_setting?: Maybe<zksync2test_Setting>;
  zksync2test_settings: Array<zksync2test_Setting>;
  zksync2test_relayer?: Maybe<zksync2test_Relayer>;
  zksync2test_relayers: Array<zksync2test_Relayer>;
  zksync2test_sequencer?: Maybe<zksync2test_Sequencer>;
  zksync2test_sequencers: Array<zksync2test_Sequencer>;
  zksync2test_relayerFee?: Maybe<zksync2test_RelayerFee>;
  zksync2test_relayerFees: Array<zksync2test_RelayerFee>;
  zksync2test_originTransfer?: Maybe<zksync2test_OriginTransfer>;
  zksync2test_originTransfers: Array<zksync2test_OriginTransfer>;
  zksync2test_destinationTransfer?: Maybe<zksync2test_DestinationTransfer>;
  zksync2test_destinationTransfers: Array<zksync2test_DestinationTransfer>;
  zksync2test_originMessage?: Maybe<zksync2test_OriginMessage>;
  zksync2test_originMessages: Array<zksync2test_OriginMessage>;
  zksync2test_aggregateRoot?: Maybe<zksync2test_AggregateRoot>;
  zksync2test_aggregateRoots: Array<zksync2test_AggregateRoot>;
  zksync2test_connectorMeta?: Maybe<zksync2test_ConnectorMeta>;
  zksync2test_connectorMetas: Array<zksync2test_ConnectorMeta>;
  zksync2test_rootCount?: Maybe<zksync2test_RootCount>;
  zksync2test_rootCounts: Array<zksync2test_RootCount>;
  zksync2test_rootMessageSent?: Maybe<zksync2test_RootMessageSent>;
  zksync2test_rootMessageSents: Array<zksync2test_RootMessageSent>;
  zksync2test_relayerFeesIncrease?: Maybe<zksync2test_RelayerFeesIncrease>;
  zksync2test_relayerFeesIncreases: Array<zksync2test_RelayerFeesIncrease>;
  zksync2test_slippageUpdate?: Maybe<zksync2test_SlippageUpdate>;
  zksync2test_slippageUpdates: Array<zksync2test_SlippageUpdate>;
  /** Access to subgraph metadata */
  zksync2test__meta?: Maybe<zksync2test__Meta_>;
};


export type Queryzksync2test_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Asset_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Asset_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_assetStatusArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_assetStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AssetStatus_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AssetStatus_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AssetBalance_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Router_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Router_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_routerDailyTVLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_routerDailyTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RouterDailyTVL_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RouterDailyTVL_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Setting_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Setting_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Relayer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Relayer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Sequencer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Sequencer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RelayerFee_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_OriginTransfer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_DestinationTransfer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_OriginMessage_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AggregateRoot_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_ConnectorMeta_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RootCount_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RootCount_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RootMessageSent_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayerFeesIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_relayerFeesIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RelayerFeesIncrease_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RelayerFeesIncrease_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_slippageUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test_slippageUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_SlippageUpdate_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_SlippageUpdate_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryzksync2test__metaArgs = {
  block?: InputMaybe<zksync2test_Block_height>;
};

export type zksync2test_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['zksync2test_Bytes']>;
};

export type zksync2test_RelayerFee = {
  id: Scalars['ID'];
  transfer: zksync2test_OriginTransfer;
  fee: Scalars['BigInt'];
  asset: Scalars['zksync2test_Bytes'];
};

export type zksync2test_RelayerFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<zksync2test_OriginTransfer_filter>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_RelayerFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_RelayerFee_filter>>>;
};

export type zksync2test_RelayerFee_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__messageHash'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__transactingAsset'
  | 'transfer__bumpRelayerFeeCount'
  | 'transfer__initialRelayerFeeAsset'
  | 'transfer__caller'
  | 'transfer__transactionHash'
  | 'transfer__timestamp'
  | 'transfer__gasPrice'
  | 'transfer__gasLimit'
  | 'transfer__blockNumber'
  | 'transfer__txOrigin'
  | 'fee'
  | 'asset';

export type zksync2test_RelayerFeesIncrease = {
  id: Scalars['ID'];
  transfer: zksync2test_OriginTransfer;
  increase?: Maybe<Scalars['BigInt']>;
  asset?: Maybe<Scalars['zksync2test_Bytes']>;
  caller: Scalars['zksync2test_Bytes'];
  transactionHash: Scalars['zksync2test_Bytes'];
  timestamp: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type zksync2test_RelayerFeesIncrease_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<zksync2test_OriginTransfer_filter>;
  increase?: InputMaybe<Scalars['BigInt']>;
  increase_not?: InputMaybe<Scalars['BigInt']>;
  increase_gt?: InputMaybe<Scalars['BigInt']>;
  increase_lt?: InputMaybe<Scalars['BigInt']>;
  increase_gte?: InputMaybe<Scalars['BigInt']>;
  increase_lte?: InputMaybe<Scalars['BigInt']>;
  increase_in?: InputMaybe<Array<Scalars['BigInt']>>;
  increase_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  asset?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_RelayerFeesIncrease_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_RelayerFeesIncrease_filter>>>;
};

export type zksync2test_RelayerFeesIncrease_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__messageHash'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__transactingAsset'
  | 'transfer__bumpRelayerFeeCount'
  | 'transfer__initialRelayerFeeAsset'
  | 'transfer__caller'
  | 'transfer__transactionHash'
  | 'transfer__timestamp'
  | 'transfer__gasPrice'
  | 'transfer__gasLimit'
  | 'transfer__blockNumber'
  | 'transfer__txOrigin'
  | 'increase'
  | 'asset'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type zksync2test_Relayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  relayer?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_Relayer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_Relayer_filter>>>;
};

export type zksync2test_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type zksync2test_RootCount = {
  id: Scalars['ID'];
  count?: Maybe<Scalars['BigInt']>;
};

export type zksync2test_RootCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_RootCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_RootCount_filter>>>;
};

export type zksync2test_RootCount_orderBy =
  | 'id'
  | 'count';

export type zksync2test_RootMessageSent = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['zksync2test_Bytes']>;
  count?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: Maybe<Scalars['zksync2test_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type zksync2test_RootMessageSent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  root_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_RootMessageSent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_RootMessageSent_filter>>>;
};

export type zksync2test_RootMessageSent_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'root'
  | 'count'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type zksync2test_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['zksync2test_Bytes']>;
  recipient?: Maybe<Scalars['zksync2test_Bytes']>;
  proposedOwner?: Maybe<Scalars['zksync2test_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<zksync2test_AssetBalance>;
};


export type zksync2test_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AssetBalance_filter>;
};

export type zksync2test_RouterDailyTVL = {
  id: Scalars['ID'];
  router: zksync2test_Router;
  asset: zksync2test_Asset;
  timestamp: Scalars['BigInt'];
  balance: Scalars['BigInt'];
};

export type zksync2test_RouterDailyTVL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<zksync2test_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<zksync2test_Asset_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_RouterDailyTVL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_RouterDailyTVL_filter>>>;
};

export type zksync2test_RouterDailyTVL_orderBy =
  | 'id'
  | 'router'
  | 'router__id'
  | 'router__isActive'
  | 'router__owner'
  | 'router__recipient'
  | 'router__proposedOwner'
  | 'router__proposedTimestamp'
  | 'asset'
  | 'asset__id'
  | 'asset__key'
  | 'asset__decimal'
  | 'asset__canonicalId'
  | 'asset__canonicalDomain'
  | 'asset__adoptedAsset'
  | 'asset__localAsset'
  | 'asset__blockNumber'
  | 'timestamp'
  | 'balance';

export type zksync2test_Router_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<zksync2test_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_Router_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_Router_filter>>>;
};

export type zksync2test_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type zksync2test_Sequencer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  sequencer?: Maybe<Scalars['zksync2test_Bytes']>;
};

export type zksync2test_Sequencer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  sequencer?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  sequencer_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  sequencer_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  sequencer_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_Sequencer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_Sequencer_filter>>>;
};

export type zksync2test_Sequencer_orderBy =
  | 'id'
  | 'isActive'
  | 'sequencer';

export type zksync2test_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['zksync2test_Bytes'];
};

export type zksync2test_Setting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_Setting_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_Setting_filter>>>;
};

export type zksync2test_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type zksync2test_SlippageUpdate = {
  id: Scalars['ID'];
  transfer: zksync2test_DestinationTransfer;
  slippage: Scalars['BigInt'];
  caller: Scalars['zksync2test_Bytes'];
  transactionHash: Scalars['zksync2test_Bytes'];
  timestamp: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type zksync2test_SlippageUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transfer?: InputMaybe<Scalars['String']>;
  transfer_not?: InputMaybe<Scalars['String']>;
  transfer_gt?: InputMaybe<Scalars['String']>;
  transfer_lt?: InputMaybe<Scalars['String']>;
  transfer_gte?: InputMaybe<Scalars['String']>;
  transfer_lte?: InputMaybe<Scalars['String']>;
  transfer_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_not_in?: InputMaybe<Array<Scalars['String']>>;
  transfer_contains?: InputMaybe<Scalars['String']>;
  transfer_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_contains?: InputMaybe<Scalars['String']>;
  transfer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transfer_starts_with?: InputMaybe<Scalars['String']>;
  transfer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with?: InputMaybe<Scalars['String']>;
  transfer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_ends_with?: InputMaybe<Scalars['String']>;
  transfer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with?: InputMaybe<Scalars['String']>;
  transfer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transfer_?: InputMaybe<zksync2test_DestinationTransfer_filter>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['zksync2test_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['zksync2test_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<zksync2test_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<zksync2test_SlippageUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<zksync2test_SlippageUpdate_filter>>>;
};

export type zksync2test_SlippageUpdate_orderBy =
  | 'id'
  | 'transfer'
  | 'transfer__id'
  | 'transfer__chainId'
  | 'transfer__transferId'
  | 'transfer__nonce'
  | 'transfer__status'
  | 'transfer__originDomain'
  | 'transfer__destinationDomain'
  | 'transfer__canonicalDomain'
  | 'transfer__to'
  | 'transfer__delegate'
  | 'transfer__receiveLocal'
  | 'transfer__callData'
  | 'transfer__slippage'
  | 'transfer__bumpSlippageCount'
  | 'transfer__originSender'
  | 'transfer__bridgedAmt'
  | 'transfer__normalizedIn'
  | 'transfer__canonicalId'
  | 'transfer__amount'
  | 'transfer__routersFee'
  | 'transfer__executedCaller'
  | 'transfer__executedTransactionHash'
  | 'transfer__executedTimestamp'
  | 'transfer__executedGasPrice'
  | 'transfer__executedGasLimit'
  | 'transfer__executedBlockNumber'
  | 'transfer__executedTxOrigin'
  | 'transfer__reconciledCaller'
  | 'transfer__reconciledTransactionHash'
  | 'transfer__reconciledTimestamp'
  | 'transfer__reconciledGasPrice'
  | 'transfer__reconciledGasLimit'
  | 'transfer__reconciledBlockNumber'
  | 'transfer__reconciledTxOrigin'
  | 'slippage'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Subscription = {
  zksync2test_asset?: Maybe<zksync2test_Asset>;
  zksync2test_assets: Array<zksync2test_Asset>;
  zksync2test_assetStatus?: Maybe<zksync2test_AssetStatus>;
  zksync2test_assetStatuses: Array<zksync2test_AssetStatus>;
  zksync2test_assetBalance?: Maybe<zksync2test_AssetBalance>;
  zksync2test_assetBalances: Array<zksync2test_AssetBalance>;
  zksync2test_router?: Maybe<zksync2test_Router>;
  zksync2test_routers: Array<zksync2test_Router>;
  zksync2test_routerDailyTVL?: Maybe<zksync2test_RouterDailyTVL>;
  zksync2test_routerDailyTVLs: Array<zksync2test_RouterDailyTVL>;
  zksync2test_setting?: Maybe<zksync2test_Setting>;
  zksync2test_settings: Array<zksync2test_Setting>;
  zksync2test_relayer?: Maybe<zksync2test_Relayer>;
  zksync2test_relayers: Array<zksync2test_Relayer>;
  zksync2test_sequencer?: Maybe<zksync2test_Sequencer>;
  zksync2test_sequencers: Array<zksync2test_Sequencer>;
  zksync2test_relayerFee?: Maybe<zksync2test_RelayerFee>;
  zksync2test_relayerFees: Array<zksync2test_RelayerFee>;
  zksync2test_originTransfer?: Maybe<zksync2test_OriginTransfer>;
  zksync2test_originTransfers: Array<zksync2test_OriginTransfer>;
  zksync2test_destinationTransfer?: Maybe<zksync2test_DestinationTransfer>;
  zksync2test_destinationTransfers: Array<zksync2test_DestinationTransfer>;
  zksync2test_originMessage?: Maybe<zksync2test_OriginMessage>;
  zksync2test_originMessages: Array<zksync2test_OriginMessage>;
  zksync2test_aggregateRoot?: Maybe<zksync2test_AggregateRoot>;
  zksync2test_aggregateRoots: Array<zksync2test_AggregateRoot>;
  zksync2test_connectorMeta?: Maybe<zksync2test_ConnectorMeta>;
  zksync2test_connectorMetas: Array<zksync2test_ConnectorMeta>;
  zksync2test_rootCount?: Maybe<zksync2test_RootCount>;
  zksync2test_rootCounts: Array<zksync2test_RootCount>;
  zksync2test_rootMessageSent?: Maybe<zksync2test_RootMessageSent>;
  zksync2test_rootMessageSents: Array<zksync2test_RootMessageSent>;
  zksync2test_relayerFeesIncrease?: Maybe<zksync2test_RelayerFeesIncrease>;
  zksync2test_relayerFeesIncreases: Array<zksync2test_RelayerFeesIncrease>;
  zksync2test_slippageUpdate?: Maybe<zksync2test_SlippageUpdate>;
  zksync2test_slippageUpdates: Array<zksync2test_SlippageUpdate>;
  /** Access to subgraph metadata */
  zksync2test__meta?: Maybe<zksync2test__Meta_>;
};


export type Subscriptionzksync2test_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Asset_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Asset_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_assetStatusArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_assetStatusesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AssetStatus_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AssetStatus_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AssetBalance_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Router_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Router_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_routerDailyTVLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_routerDailyTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RouterDailyTVL_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RouterDailyTVL_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Setting_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Setting_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Relayer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Relayer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_Sequencer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_Sequencer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RelayerFee_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RelayerFee_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_OriginTransfer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_DestinationTransfer_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_OriginMessage_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_AggregateRoot_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_ConnectorMeta_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RootCount_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RootCount_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RootMessageSent_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayerFeesIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_relayerFeesIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_RelayerFeesIncrease_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_RelayerFeesIncrease_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_slippageUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test_slippageUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<zksync2test_SlippageUpdate_orderBy>;
  orderDirection?: InputMaybe<zksync2test_OrderDirection>;
  where?: InputMaybe<zksync2test_SlippageUpdate_filter>;
  block?: InputMaybe<zksync2test_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionzksync2test__metaArgs = {
  block?: InputMaybe<zksync2test_Block_height>;
};

export type zksync2test_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type zksync2test__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['zksync2test_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type zksync2test__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: zksync2test__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  zksync2test_asset: InContextSdkMethod<Query['zksync2test_asset'], Queryzksync2test_assetArgs, MeshContext>,
  /** null **/
  zksync2test_assets: InContextSdkMethod<Query['zksync2test_assets'], Queryzksync2test_assetsArgs, MeshContext>,
  /** null **/
  zksync2test_assetStatus: InContextSdkMethod<Query['zksync2test_assetStatus'], Queryzksync2test_assetStatusArgs, MeshContext>,
  /** null **/
  zksync2test_assetStatuses: InContextSdkMethod<Query['zksync2test_assetStatuses'], Queryzksync2test_assetStatusesArgs, MeshContext>,
  /** null **/
  zksync2test_assetBalance: InContextSdkMethod<Query['zksync2test_assetBalance'], Queryzksync2test_assetBalanceArgs, MeshContext>,
  /** null **/
  zksync2test_assetBalances: InContextSdkMethod<Query['zksync2test_assetBalances'], Queryzksync2test_assetBalancesArgs, MeshContext>,
  /** null **/
  zksync2test_router: InContextSdkMethod<Query['zksync2test_router'], Queryzksync2test_routerArgs, MeshContext>,
  /** null **/
  zksync2test_routers: InContextSdkMethod<Query['zksync2test_routers'], Queryzksync2test_routersArgs, MeshContext>,
  /** null **/
  zksync2test_routerDailyTVL: InContextSdkMethod<Query['zksync2test_routerDailyTVL'], Queryzksync2test_routerDailyTVLArgs, MeshContext>,
  /** null **/
  zksync2test_routerDailyTVLs: InContextSdkMethod<Query['zksync2test_routerDailyTVLs'], Queryzksync2test_routerDailyTVLsArgs, MeshContext>,
  /** null **/
  zksync2test_setting: InContextSdkMethod<Query['zksync2test_setting'], Queryzksync2test_settingArgs, MeshContext>,
  /** null **/
  zksync2test_settings: InContextSdkMethod<Query['zksync2test_settings'], Queryzksync2test_settingsArgs, MeshContext>,
  /** null **/
  zksync2test_relayer: InContextSdkMethod<Query['zksync2test_relayer'], Queryzksync2test_relayerArgs, MeshContext>,
  /** null **/
  zksync2test_relayers: InContextSdkMethod<Query['zksync2test_relayers'], Queryzksync2test_relayersArgs, MeshContext>,
  /** null **/
  zksync2test_sequencer: InContextSdkMethod<Query['zksync2test_sequencer'], Queryzksync2test_sequencerArgs, MeshContext>,
  /** null **/
  zksync2test_sequencers: InContextSdkMethod<Query['zksync2test_sequencers'], Queryzksync2test_sequencersArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFee: InContextSdkMethod<Query['zksync2test_relayerFee'], Queryzksync2test_relayerFeeArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFees: InContextSdkMethod<Query['zksync2test_relayerFees'], Queryzksync2test_relayerFeesArgs, MeshContext>,
  /** null **/
  zksync2test_originTransfer: InContextSdkMethod<Query['zksync2test_originTransfer'], Queryzksync2test_originTransferArgs, MeshContext>,
  /** null **/
  zksync2test_originTransfers: InContextSdkMethod<Query['zksync2test_originTransfers'], Queryzksync2test_originTransfersArgs, MeshContext>,
  /** null **/
  zksync2test_destinationTransfer: InContextSdkMethod<Query['zksync2test_destinationTransfer'], Queryzksync2test_destinationTransferArgs, MeshContext>,
  /** null **/
  zksync2test_destinationTransfers: InContextSdkMethod<Query['zksync2test_destinationTransfers'], Queryzksync2test_destinationTransfersArgs, MeshContext>,
  /** null **/
  zksync2test_originMessage: InContextSdkMethod<Query['zksync2test_originMessage'], Queryzksync2test_originMessageArgs, MeshContext>,
  /** null **/
  zksync2test_originMessages: InContextSdkMethod<Query['zksync2test_originMessages'], Queryzksync2test_originMessagesArgs, MeshContext>,
  /** null **/
  zksync2test_aggregateRoot: InContextSdkMethod<Query['zksync2test_aggregateRoot'], Queryzksync2test_aggregateRootArgs, MeshContext>,
  /** null **/
  zksync2test_aggregateRoots: InContextSdkMethod<Query['zksync2test_aggregateRoots'], Queryzksync2test_aggregateRootsArgs, MeshContext>,
  /** null **/
  zksync2test_connectorMeta: InContextSdkMethod<Query['zksync2test_connectorMeta'], Queryzksync2test_connectorMetaArgs, MeshContext>,
  /** null **/
  zksync2test_connectorMetas: InContextSdkMethod<Query['zksync2test_connectorMetas'], Queryzksync2test_connectorMetasArgs, MeshContext>,
  /** null **/
  zksync2test_rootCount: InContextSdkMethod<Query['zksync2test_rootCount'], Queryzksync2test_rootCountArgs, MeshContext>,
  /** null **/
  zksync2test_rootCounts: InContextSdkMethod<Query['zksync2test_rootCounts'], Queryzksync2test_rootCountsArgs, MeshContext>,
  /** null **/
  zksync2test_rootMessageSent: InContextSdkMethod<Query['zksync2test_rootMessageSent'], Queryzksync2test_rootMessageSentArgs, MeshContext>,
  /** null **/
  zksync2test_rootMessageSents: InContextSdkMethod<Query['zksync2test_rootMessageSents'], Queryzksync2test_rootMessageSentsArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFeesIncrease: InContextSdkMethod<Query['zksync2test_relayerFeesIncrease'], Queryzksync2test_relayerFeesIncreaseArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFeesIncreases: InContextSdkMethod<Query['zksync2test_relayerFeesIncreases'], Queryzksync2test_relayerFeesIncreasesArgs, MeshContext>,
  /** null **/
  zksync2test_slippageUpdate: InContextSdkMethod<Query['zksync2test_slippageUpdate'], Queryzksync2test_slippageUpdateArgs, MeshContext>,
  /** null **/
  zksync2test_slippageUpdates: InContextSdkMethod<Query['zksync2test_slippageUpdates'], Queryzksync2test_slippageUpdatesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  zksync2test__meta: InContextSdkMethod<Query['zksync2test__meta'], Queryzksync2test__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  zksync2test_asset: InContextSdkMethod<Subscription['zksync2test_asset'], Subscriptionzksync2test_assetArgs, MeshContext>,
  /** null **/
  zksync2test_assets: InContextSdkMethod<Subscription['zksync2test_assets'], Subscriptionzksync2test_assetsArgs, MeshContext>,
  /** null **/
  zksync2test_assetStatus: InContextSdkMethod<Subscription['zksync2test_assetStatus'], Subscriptionzksync2test_assetStatusArgs, MeshContext>,
  /** null **/
  zksync2test_assetStatuses: InContextSdkMethod<Subscription['zksync2test_assetStatuses'], Subscriptionzksync2test_assetStatusesArgs, MeshContext>,
  /** null **/
  zksync2test_assetBalance: InContextSdkMethod<Subscription['zksync2test_assetBalance'], Subscriptionzksync2test_assetBalanceArgs, MeshContext>,
  /** null **/
  zksync2test_assetBalances: InContextSdkMethod<Subscription['zksync2test_assetBalances'], Subscriptionzksync2test_assetBalancesArgs, MeshContext>,
  /** null **/
  zksync2test_router: InContextSdkMethod<Subscription['zksync2test_router'], Subscriptionzksync2test_routerArgs, MeshContext>,
  /** null **/
  zksync2test_routers: InContextSdkMethod<Subscription['zksync2test_routers'], Subscriptionzksync2test_routersArgs, MeshContext>,
  /** null **/
  zksync2test_routerDailyTVL: InContextSdkMethod<Subscription['zksync2test_routerDailyTVL'], Subscriptionzksync2test_routerDailyTVLArgs, MeshContext>,
  /** null **/
  zksync2test_routerDailyTVLs: InContextSdkMethod<Subscription['zksync2test_routerDailyTVLs'], Subscriptionzksync2test_routerDailyTVLsArgs, MeshContext>,
  /** null **/
  zksync2test_setting: InContextSdkMethod<Subscription['zksync2test_setting'], Subscriptionzksync2test_settingArgs, MeshContext>,
  /** null **/
  zksync2test_settings: InContextSdkMethod<Subscription['zksync2test_settings'], Subscriptionzksync2test_settingsArgs, MeshContext>,
  /** null **/
  zksync2test_relayer: InContextSdkMethod<Subscription['zksync2test_relayer'], Subscriptionzksync2test_relayerArgs, MeshContext>,
  /** null **/
  zksync2test_relayers: InContextSdkMethod<Subscription['zksync2test_relayers'], Subscriptionzksync2test_relayersArgs, MeshContext>,
  /** null **/
  zksync2test_sequencer: InContextSdkMethod<Subscription['zksync2test_sequencer'], Subscriptionzksync2test_sequencerArgs, MeshContext>,
  /** null **/
  zksync2test_sequencers: InContextSdkMethod<Subscription['zksync2test_sequencers'], Subscriptionzksync2test_sequencersArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFee: InContextSdkMethod<Subscription['zksync2test_relayerFee'], Subscriptionzksync2test_relayerFeeArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFees: InContextSdkMethod<Subscription['zksync2test_relayerFees'], Subscriptionzksync2test_relayerFeesArgs, MeshContext>,
  /** null **/
  zksync2test_originTransfer: InContextSdkMethod<Subscription['zksync2test_originTransfer'], Subscriptionzksync2test_originTransferArgs, MeshContext>,
  /** null **/
  zksync2test_originTransfers: InContextSdkMethod<Subscription['zksync2test_originTransfers'], Subscriptionzksync2test_originTransfersArgs, MeshContext>,
  /** null **/
  zksync2test_destinationTransfer: InContextSdkMethod<Subscription['zksync2test_destinationTransfer'], Subscriptionzksync2test_destinationTransferArgs, MeshContext>,
  /** null **/
  zksync2test_destinationTransfers: InContextSdkMethod<Subscription['zksync2test_destinationTransfers'], Subscriptionzksync2test_destinationTransfersArgs, MeshContext>,
  /** null **/
  zksync2test_originMessage: InContextSdkMethod<Subscription['zksync2test_originMessage'], Subscriptionzksync2test_originMessageArgs, MeshContext>,
  /** null **/
  zksync2test_originMessages: InContextSdkMethod<Subscription['zksync2test_originMessages'], Subscriptionzksync2test_originMessagesArgs, MeshContext>,
  /** null **/
  zksync2test_aggregateRoot: InContextSdkMethod<Subscription['zksync2test_aggregateRoot'], Subscriptionzksync2test_aggregateRootArgs, MeshContext>,
  /** null **/
  zksync2test_aggregateRoots: InContextSdkMethod<Subscription['zksync2test_aggregateRoots'], Subscriptionzksync2test_aggregateRootsArgs, MeshContext>,
  /** null **/
  zksync2test_connectorMeta: InContextSdkMethod<Subscription['zksync2test_connectorMeta'], Subscriptionzksync2test_connectorMetaArgs, MeshContext>,
  /** null **/
  zksync2test_connectorMetas: InContextSdkMethod<Subscription['zksync2test_connectorMetas'], Subscriptionzksync2test_connectorMetasArgs, MeshContext>,
  /** null **/
  zksync2test_rootCount: InContextSdkMethod<Subscription['zksync2test_rootCount'], Subscriptionzksync2test_rootCountArgs, MeshContext>,
  /** null **/
  zksync2test_rootCounts: InContextSdkMethod<Subscription['zksync2test_rootCounts'], Subscriptionzksync2test_rootCountsArgs, MeshContext>,
  /** null **/
  zksync2test_rootMessageSent: InContextSdkMethod<Subscription['zksync2test_rootMessageSent'], Subscriptionzksync2test_rootMessageSentArgs, MeshContext>,
  /** null **/
  zksync2test_rootMessageSents: InContextSdkMethod<Subscription['zksync2test_rootMessageSents'], Subscriptionzksync2test_rootMessageSentsArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFeesIncrease: InContextSdkMethod<Subscription['zksync2test_relayerFeesIncrease'], Subscriptionzksync2test_relayerFeesIncreaseArgs, MeshContext>,
  /** null **/
  zksync2test_relayerFeesIncreases: InContextSdkMethod<Subscription['zksync2test_relayerFeesIncreases'], Subscriptionzksync2test_relayerFeesIncreasesArgs, MeshContext>,
  /** null **/
  zksync2test_slippageUpdate: InContextSdkMethod<Subscription['zksync2test_slippageUpdate'], Subscriptionzksync2test_slippageUpdateArgs, MeshContext>,
  /** null **/
  zksync2test_slippageUpdates: InContextSdkMethod<Subscription['zksync2test_slippageUpdates'], Subscriptionzksync2test_slippageUpdatesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  zksync2test__meta: InContextSdkMethod<Subscription['zksync2test__meta'], Subscriptionzksync2test__metaArgs, MeshContext>
  };

  export type Context = {
      ["Connext_ZkSync2Test"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
