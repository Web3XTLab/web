import Web3 from "web3";
import AppStoreAbi from "@/src/abis/AppStore.json";

const oneEther = Web3.utils.toBN(10 ** 18);

const App = {
  web3Provider: null,
  contracts: {},
  web3: null,

  account: 0,

  init: async () => {
    if (App.web3) return App;
    return await App.initWeb3();
  },

  initWeb3: async () => {
    try {
      // Modern dapp browsers...
      if (window.ethereum) {
        App.web3Provider = window.ethereum;
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          // User denied account access...
          console.error("User denied account access");
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = App.web3.currentProvider;
      }
      // IF no injected web3 instance is detected, fall back to Ganache
      else {
        App.web3Provider = new Web3.providers.HttpProvider(
          "http://localhost:7545"
        );
      }
      // App.web3 = new Web3("ws://127.0.0.1:7545");
      App.web3 = new Web3(App.web3Provider);

      return await App.initContract();
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  initContract: async () => {
    const networkId = await App.web3.eth.net.getId();
    console.log("networkId", networkId);

    const nftDeployedNetwork = AppStoreAbi.networks[networkId];
    console.log("nftDeployedNetwork", nftDeployedNetwork);
    App.contracts.AppStore = new App.web3.eth.Contract(
      AppStoreAbi.abi,
      nftDeployedNetwork.address
    );

    try {
      await App.getAccount();
      window.ethereum.once('accountsChanged', () => {
        App.account = accounts[0];
      });
    } catch (e) {
      console.error(e);
    }

    return App;
  },

  getAccount: async () => {
    if (App.account) return App.account;
    const accounts = await App.web3.eth.getAccounts();
    App.account = accounts[0];
    return App.account;
  },

  // TODO: https://docs.metamask.io/guide/ethereum-provider.html
  // import detectEthereumProvider from '@metamask/detect-provider';
  useMetaMask: () => {
    return !!window.ethereum;
  },

  sell: async () => {
    try {
      const account = await App.getAccount();
      console.log("account", account);

      const amount = oneEther;
      // TODO: ipfs file
      const tokenURI = `https://abcoathup.github.io/SampleERC1155/api/token/${Math.random()}.json`;

      App.contracts.AppStore.events
        .OnSell()
        .on("data", (event) => {
          console.log("sell", event);
        })
        .on("error", (error) => {
          console.log(error);
        });

      const result = await App.contracts.AppStore.methods
        .sell(amount, tokenURI)
        .send({ from: account });

      console.log('result', result);
    } catch (e) {
      console.error(e);
    }
  },

  buy: async () => {
    try {
      const account = await App.getAccount();
      console.log("account", account);

      App.contracts.AppStore.events
        .OnBuy()
        .on("data", (event) => {
          console.log("buy", event);
        })
        .on("error", (error) => {
          console.log(error);
        });

      await App.contracts.AppStore.methods
        .buy(0)
        .send({ from: account, value: oneEther });
    } catch (e) {
      console.error(e);
    }
  },

  verify: async () => {
    try {
      const account = await App.getAccount();
      console.log("account", account);

      App.contracts.AppStore.events
        .OnVerify()
        .on("data", (event) => {
          console.log("verify", event.returnValues.verified);
        })
        .on("error", (error) => {
          console.log(error);
        });

      const result = await App.contracts.AppStore.methods.verify(0, account).call();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  },

  totalCount: async () => {
    try {
      const result = await App.contracts.AppStore.methods.totalCount().call();
      console.log("totalCount", result);
    } catch (e) {
      console.error(e);
    }
  },

  tokenURI: async (id) => {
    try {
      const item = await App.contracts.AppStore.methods.getTokenURI(id).call();
      console.log(item);
      return item;
    } catch (e) {
      console.error(e);
    }
  },

  tokenURIs: async () => {
    try {
      const items = [];
      const count = await App.contracts.AppStore.methods.totalCount().call();
      for (let i = 0; i < count; i++) {
        const item = await App.contracts.AppStore.methods.getTokenURI(i).call();
        items.push(item);
      }
      console.log("tokenURI", items);
      return items;
    } catch (e) {
      console.error(e);
    }
  },
};

export default App;
