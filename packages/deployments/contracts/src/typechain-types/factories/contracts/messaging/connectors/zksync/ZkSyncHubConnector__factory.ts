/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ZkSyncHubConnector,
  ZkSyncHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/zksync/ZkSyncHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_l2BlockNumber",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBlock",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620017ea380380620017ea8339810160408190526200003591620002db565b80868686868684848484846200004b336200019a565b8463ffffffff16600003620000965760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e25760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008d565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011a576200011a81620001ff565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a3505050505050505050506200018d816200026860201b60201c565b5050505050505062000353565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620002be57600080fd5b919050565b80516001600160a01b0381168114620002be57600080fd5b60008060008060008060c08789031215620002f557600080fd5b6200030087620002a9565b95506200031060208801620002a9565b94506200032060408801620002c3565b93506200033060608801620002c3565b92506200034060808801620002c3565b915060a087015190509295509295509295565b60805160a05160c05160e05161142c620003be60003960008181610141015261096d0152600081816102370152818161042b01526109a80152600081816103be015281816104e00152818161082801528181610b640152610c1b015260006101e3015261142c6000f3fe6080604052600436106101235760003560e01c80638da5cb5b116100a0578063d1851c9211610064578063d1851c921461036f578063d232c2201461038d578063d69f9d61146103ac578063db1b7659146103e0578063e92a492f1461040057600080fd5b80638da5cb5b146102bc578063b1f8100d146102da578063c1f0808a146102fa578063c5b350df1461033a578063cc3942831461034f57600080fd5b80635bd11efc116100e75780635bd11efc146102055780635f61e3ec146102255780636a42b8f814610271578063715018a6146102875780637850b0201461029c57600080fd5b8063141684161461012f5780633cf52ffb1461017d57806348e6fa231461019c5780634ff746f6146101b157806352a9674b146101d157600080fd5b3661012a57005b600080fd5b34801561013b57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561018957600080fd5b506002545b604051908152602001610174565b6101af6101aa366004610f1e565b610420565b005b3480156101bd57600080fd5b506101af6101cc366004610f82565b6104d5565b3480156101dd57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b34801561021157600080fd5b506101af610220366004610fbf565b61057b565b34801561023157600080fd5b506102597f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610174565b34801561027d57600080fd5b5062093a8061018e565b34801561029357600080fd5b506101af6105b2565b3480156102a857600080fd5b506101af6102b7366004610fef565b610666565b3480156102c857600080fd5b506000546001600160a01b0316610259565b3480156102e657600080fd5b506101af6102f5366004610fbf565b61069a565b34801561030657600080fd5b5061032a610315366004610fef565b60056020526000908152604090205460ff1681565b6040519015158152602001610174565b34801561034657600080fd5b506101af610738565b34801561035b57600080fd5b50600354610259906001600160a01b031681565b34801561037b57600080fd5b506001546001600160a01b0316610259565b34801561039957600080fd5b506000546001600160a01b03161561032a565b3480156103b857600080fd5b506102597f000000000000000000000000000000000000000000000000000000000000000081565b3480156103ec57600080fd5b5061032a6103fb366004610fbf565b6107a8565b34801561040c57600080fd5b506101af61041b366004611096565b6107b2565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461048c5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6104968282610a4d565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e93550778282336040516104c99392919061118b565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105365760405162461bcd60e51b81526004016104839060208082526004908201526310a0a6a160e11b604082015260600190565b61053f81610cef565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516105709291906111c9565b60405180910390a150565b6000546001600160a01b031633146105a6576040516311a8a1bb60e31b815260040160405180910390fd5b6105af81610d08565b50565b6000546001600160a01b031633146105dd576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426105ef91906111f3565b1161060d576040516324e0285f60e21b815260040160405180910390fd5b60025460000361063057604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b03161561065a576040516323295ef960e01b815260040160405180910390fd5b6106646000610d71565b565b6000546001600160a01b03163314610691576040516311a8a1bb60e31b815260040160405180910390fd5b6105af81610dd6565b6000546001600160a01b031633146106c5576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156106e3575060025415155b15610701576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361072f57604051634a2fb73f60e11b815260040160405180910390fd5b6105af81610e17565b6001546001600160a01b03163314610763576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261077591906111f3565b11610793576040516324e0285f60e21b815260040160405180910390fd5b600154610664906001600160a01b0316610d71565b6000805b92915050565b602083146107ec5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610483565b6040805160608101825261ffff871681526003546001600160a01b03166020808301919091528251601f870182900482028101820184528681527f0000000000000000000000000000000000000000000000000000000000000000936000939290830191908990899081908401838280828437600092018290525093909452505060405163e4948f4360e01b8152929350916001600160a01b038516915063e4948f43906108a6908d908d9087908b908b90600401611214565b602060405180830381865afa1580156108c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e7919061129d565b9050806109205760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b6044820152606401610483565b600061092c87896112bf565b60008181526005602052604090205490915060ff16610a405760008181526005602052604090819020805460ff191660011790555163473ec9fd60e11b81527f000000000000000000000000000000000000000000000000000000000000000063ffffffff166004820152602481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e7d93fa90604401600060405180830381600087803b1580156109ec57600080fd5b505af1158015610a00573d6000803e3d6000fd5b505050507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced888833604051610a37939291906112dd565b60405180910390a15b5050505050505050505050565b8051602014610a8d5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610483565b8151602014610ac85760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610483565b6000634ff746f660e01b83604051602401610ae3919061131e565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600082806020019051810190610b2e9190611331565b90506103206000610b3e34610e65565b604051635a3998c760e11b81523a600482015260248101859052604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b473318e90606401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190611331565b811015610c0e5760405162461bcd60e51b8152602060048201526005602482015264216665657360d81b6044820152606401610483565b6003546001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163eb67241991849116600088888883604051908082528060200260200182016040528015610c7f57816020015b6060815260200190600190039081610c6a5790505b50336040518963ffffffff1660e01b8152600401610ca3979695949392919061134a565b60206040518083038185885af1158015610cc1573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ce69190611331565b50505050505050565b6040516316c2fdb560e21b815260040160405180910390fd5b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000600454821115610e775760045491505b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610ea257600080fd5b813567ffffffffffffffff80821115610ebd57610ebd610e7b565b604051601f8301601f19908116603f01168101908282118183101715610ee557610ee5610e7b565b81604052838152866020858801011115610efe57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610f3157600080fd5b823567ffffffffffffffff80821115610f4957600080fd5b610f5586838701610e91565b93506020850135915080821115610f6b57600080fd5b50610f7885828601610e91565b9150509250929050565b600060208284031215610f9457600080fd5b813567ffffffffffffffff811115610fab57600080fd5b610fb784828501610e91565b949350505050565b600060208284031215610fd157600080fd5b81356001600160a01b0381168114610fe857600080fd5b9392505050565b60006020828403121561100157600080fd5b5035919050565b60008083601f84011261101a57600080fd5b50813567ffffffffffffffff81111561103257600080fd5b60208301915083602082850101111561104a57600080fd5b9250929050565b60008083601f84011261106357600080fd5b50813567ffffffffffffffff81111561107b57600080fd5b6020830191508360208260051b850101111561104a57600080fd5b600080600080600080600060a0888a0312156110b157600080fd5b873563ffffffff811681146110c557600080fd5b965060208801359550604088013561ffff811681146110e357600080fd5b9450606088013567ffffffffffffffff8082111561110057600080fd5b61110c8b838c01611008565b909650945060808a013591508082111561112557600080fd5b506111328a828b01611051565b989b979a50959850939692959293505050565b6000815180845260005b8181101561116b5760208185018101518683018201520161114f565b506000602082860101526020601f19601f83011685010191505092915050565b60608152600061119e6060830186611145565b82810360208401526111b08186611145565b91505060018060a01b0383166040830152949350505050565b6040815260006111dc6040830185611145565b905060018060a01b03831660208301529392505050565b818103818111156107ac57634e487b7160e01b600052601160045260246000fd5b63ffffffff861681528460208201526080604082015261ffff845116608082015260018060a01b0360208501511660a082015260006040850151606060c084015261126260e0840182611145565b838103606085015284815290506001600160fb1b0384111561128357600080fd5b8360051b8086602084013701602001979650505050505050565b6000602082840312156112af57600080fd5b81518015158114610fe857600080fd5b803560208310156107ac57600019602084900360031b1b1692915050565b6040815282604082015282846060830137600060608483018101919091526001600160a01b03929092166020820152601f909201601f191690910101919050565b602081526000610fe86020830184611145565b60006020828403121561134357600080fd5b5051919050565b60018060a01b038816815260006020888184015260e0604084015261137260e0840189611145565b87606085015286608085015283810360a08501528086518083528383019150838160051b84010184890160005b838110156113cd57601f198684030185526113bb838351611145565b9487019492509086019060010161139f565b50506001600160a01b03881660c088015294506113ea9350505050565b9897505050505050505056fea264697066735822122016152c9b59699ed7727adb541313d06a81bffd541dd2088e6c58ad76a07d94cd64736f6c63430008110033";

type ZkSyncHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkSyncHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkSyncHubConnector__factory extends ContractFactory {
  constructor(...args: ZkSyncHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkSyncHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      overrides || {}
    ) as Promise<ZkSyncHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      overrides || {}
    );
  }
  override attach(address: string): ZkSyncHubConnector {
    return super.attach(address) as ZkSyncHubConnector;
  }
  override connect(signer: Signer): ZkSyncHubConnector__factory {
    return super.connect(signer) as ZkSyncHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkSyncHubConnectorInterface {
    return new utils.Interface(_abi) as ZkSyncHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkSyncHubConnector {
    return new Contract(address, _abi, signerOrProvider) as ZkSyncHubConnector;
  }
}
