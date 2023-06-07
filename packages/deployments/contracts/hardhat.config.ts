import "hardhat-diamond-abi";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import "hardhat-abi-exporter";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
import { HardhatUserConfig } from "hardhat/types";

import "./tasks/addWatcher";
import "./tasks/approveRouter";
import "./tasks/addAdmin";
import "./tasks/setupAsset";
import "./tasks/addLiquidity";
import "./tasks/mintTestToken";
import "./tasks/setupTestRouter";
import "./tasks/renounceOwnership";
import "./tasks/proposeTransferOwnership";
import "./tasks/setAggregator";
import "./tasks/setDexPrice";
import "./tasks/setDirectPrice";
import "./tasks/debugCustomError";
import "./tasks/decodeInputData";
import "./tasks/removeRouter";
import "./tasks/enrollHandlers";
import "./tasks/dustSelfAccounts";
import "./tasks/xcall";
import "./tasks/readBalances";
import "./tasks/preflight";
import "./tasks/addRelayer";
import "./tasks/executeEstimateGas";
import "./tasks/exportAbi";
import "./tasks/stableswap/initializeSwap";
import "./tasks/stableswap/addSwapLiquidity";
import "./tasks/stableswap/removeSwapLiquidity";
import "./tasks/stableswap/setSwapFees";
import "./tasks/connector/send";
import "./tasks/connector/setDelayBlocks";
import "./tasks/rootmanager/propagate";
import "./tasks/rootmanager/setDelayBlocks";
import "./tasks/setMirrorConnectors";
import "./tasks/addSequencer";
import "./tasks/setXAppConnectionManager";
import "./tasks/queryRoots";
import "./tasks/submitExitProof";
import "./tasks/addConnectors";
import "./tasks/connector/proveAndProcess";
import "./tasks/addSender";
import "./tasks/connector/processFromRoot";
import "./tasks/connector/redeem";
import "./tasks/connector/claimPolygonZk";
import "./tasks/pause";
import "./tasks/unpause";
import "./tasks/bumpTransfer";
import { hardhatNetworks } from "./src/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6", // for @suma-tx/memview-sol
        settings: {},
      },
    ],
  },
  zksolc: {
    version: "1.3.5",
    compilerSource: "binary",
    settings: {},
  },
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    tests: "./test",
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: { default: 0 },
    alice: { default: 1 },
    bob: { default: 2 },
    rando: { default: 3 },
  },
  networks: hardhatNetworks,
  etherscan: {
    apiKey: {
      // testnets
      rinkeby: process.env.ETHERSCAN_API_KEY!,
      kovan: process.env.ETHERSCAN_API_KEY!,
      ropsten: process.env.ETHERSCAN_API_KEY!,
      goerli: process.env.ETHERSCAN_API_KEY!,
      "optimism-goerli": process.env.OPTIMISM_ETHERSCAN_API_KEY!,
      "gnosis-testnet": process.env.GNOSISSCAN_API_KEY!,
      mumbai: process.env.POLYGONSCAN_API_KEY!,
      chapel: process.env.BNBSCAN_API_KEY!,
      consensys: "abc",
      // mainnets
      mainnet: process.env.ETHERSCAN_API_KEY!,
      matic: process.env.POLYGONSCAN_API_KEY!,
      optimism: process.env.OPTIMISM_ETHERSCAN_API_KEY!,
      bnb: process.env.BNBSCAN_API_KEY!,
      "arbitrum-one": process.env.ARBISCAN_API_KEY!,
      xdai: process.env.GNOSISSCAN_API_KEY!,
    },
    customChains: [
      {
        network: "optimism-goerli",
        chainId: 420,
        urls: {
          apiURL: "https://blockscout.com/optimism/goerli/api",
          browserURL: "https://blockscout.com/optimism/goerli",
        },
      },
      {
        network: "gnosis-testnet",
        chainId: 10200,
        urls: {
          apiURL: "https://blockscout.chiadochain.net/api",
          browserURL: "https://blockscout.chiadochain.net",
        },
      },
      {
        network: "consensys",
        chainId: 59140,
        urls: {
          apiURL: "https://explorer.goerli.zkevm.consensys.net/api",
          browserURL: "https://explorer.goerli.zkevm.consensys.net",
        },
      },
      {
        network: "zksync2-testnet",
        chainId: 280,
        urls: {
          apiURL: "hhttps://zksync2-testnet.zkscan.io/api",
          browserURL: "https://zksync2-testnet.zkscan.io",
        },
      },
    ],
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS == "true",
  },
  diamondAbi: {
    // (required) The name of your Diamond ABI.
    name: "Connext",
    // (optional) An array of strings, matched against fully qualified contract names, to
    // determine which contracts are included in your Diamond ABI.
    include: [
      "TokenFacet",
      "BaseConnextFacet",
      "BridgeFacet",
      "DiamondCutFacet",
      "DiamondLoupeFacet",
      "NomadFacet",
      "ProposedOwnableFacet",
      "RelayerFacet",
      "RoutersFacet",
      "StableSwapFacet",
      "PortalFacet",
    ],
    strict: false,
    filter: function (abiElement, index, fullAbi, fullyQualifiedName) {
      const contractName = fullyQualifiedName.split(":")[1];
      if (abiElement.type === "error" && !abiElement.name.includes(contractName)) {
        return false;
      }

      return true;
    },
  },
  typechain: {
    outDir: "src/typechain-types",
  },
  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    spacing: 2,
    format: "fullName",
  },
};

export default config;
