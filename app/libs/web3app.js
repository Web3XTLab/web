const App = {
  web3Provider: null,
  contracts: {},
  web3: null,

  init: async () => {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    // Modern dapp browsers...
    // if (window.ethereum) {
    //   App.web3Provider = window.ethereum;
    //   try {
    //     // Request account access
    //     await window.ethereum.request({ method: "eth_requestAccounts" });
    //   } catch (error) {
    //     // User denied account access...
    //     console.error("User denied account access");
    //   }
    // }
    // // Legacy dapp browsers...
    // else if (App.web3) {
    //   App.web3Provider = App.web3.currentProvider;
    // }
    // // IF no injected web3 instance is detected, fall back to Ganache
    // else {
    //   App.web3Provider = new Web3.providers.HttpProvider(
    //     "http://localhost:7545"
    //   );
    // }
    // TODO: local test
    App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
    App.web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    fetch("http://localhost:8000/AppStore.json")
      .then((response) => response.json())
      .then((data) => {
        // Get the necessary contract artifact file and instantiate it with @truffle/contract
        const AppStoreArtifact = data;
        App.contracts.AppStore = TruffleContract(AppStoreArtifact);

        // Set the provider for our contract
        App.contracts.AppStore.setProvider(App.web3Provider);

        App.contracts.AppStore.deployed().then(function (instance) {
          // instance.buy.call(0);
        });
      });
  },
};

export default App;
