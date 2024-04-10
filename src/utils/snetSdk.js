import SnetSDK from "snet-sdk-web";
import Web3 from "web3";
import { isUndefined } from "lodash";

const EXPECTED_ID_ETHEREUM_NETWORK = Number(process.env.REACT_APP_ETH_NETWORK);

export const ethereumMethods = {
    REQUEST_ACCOUNTS: "eth_requestAccounts",
    REQUEST_CHAIN_ID: "eth_chainId",
    REQUEST_SWITCH_CHAIN: "wallet_switchEthereumChain"
};

export const ethereumEvents = {
    CHAIN_CHANGED: "chainChanged",
};

const DEFAULT_GAS_LIMIT = undefined;
const DEFAULT_GAS_PRICE = undefined;
const ON_ACCOUNT_CHANGE = "accountsChanged";
const ON_NETWORK_CHANGE = "chainChanged";

const detectEthereumNetwork = async () => {
    const chainIdHex = await web3Provider.request({
        method: ethereumMethods.REQUEST_CHAIN_ID,
        params: [],
    });
    const networkId = parseInt(chainIdHex);
    return networkId;
};

const isUserAtExpectedEthereumNetwork = async () => {
    const currentNetworkId = await detectEthereumNetwork();
    return Number(currentNetworkId) === EXPECTED_ID_ETHEREUM_NETWORK;
};

const switchNetwork = async () => {
    const web3 = new Web3(web3Provider);
    const hexifiedChainId = web3.utils.toHex(EXPECTED_ID_ETHEREUM_NETWORK);
    await web3Provider.request({
        method: ethereumMethods.REQUEST_SWITCH_CHAIN,
        params: [{ chainId: hexifiedChainId }],
    });
};

let web3Provider;
let sdk;

const updateSDK = async () => {
    const isExpectedNetwork = await isUserAtExpectedEthereumNetwork();
    if (!isExpectedNetwork) {
        await switchNetwork();
    }
    const config = {
        networkId: await detectEthereumNetwork(),
        web3Provider,
        defaultGasLimit: DEFAULT_GAS_LIMIT,
        defaultGasPrice: DEFAULT_GAS_PRICE,
    };
    sdk = new SnetSDK(config);
    await sdk.setupAccount();
};

const defineWeb3Provider = () => {
    if (isUndefined(window.ethereum)) {
        throw new Error("Metamask is not found");
    }
    web3Provider = window.ethereum;
};

export const initSDK = async () => {
    try {
        defineWeb3Provider();
        await web3Provider.request({ method: ethereumMethods.REQUEST_ACCOUNTS });
        // eslint-disable-next-line require-atomic-updates
        web3Provider.addListener(ON_ACCOUNT_CHANGE, (accounts) => {
            const event = new CustomEvent("snetMMAccountChanged", {
                detail: { address: accounts[0] },
            });
            window.dispatchEvent(event);
        });
        web3Provider.addListener(ON_NETWORK_CHANGE, (network) => {
            switchNetwork();
            const event = new CustomEvent("snetMMNetworkChanged", { detail: { network } });
            window.dispatchEvent(event);
        });
        await updateSDK();
        return sdk;
    } catch (error) {
        throw error;
    }
};
