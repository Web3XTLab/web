const HDWalletProvider = require("@truffle/hdwallet-provider");

// TODO: secret
const privateKey = '3b883e81d22455f6e7f401b741e3bf8853acf22a719d756ef9a1be8f36271ebd';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(privateKey, "https://ropsten.infura.io/v3/64103e6270f142d8874fc35973336634")
      },
      network_id: 3
    }
  },

  contracts_directory: './contracts',
  contracts_build_directory: './src/abis',

  compilers: {
    solc: {
      version: "0.8.5"
    }
  }
};
