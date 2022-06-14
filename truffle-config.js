const HDWalletProvider = require("@truffle/hdwallet-provider");

// TODO: secret
const privateKey = process.env.PRIVATE_KEYS || '';
const appId = process.env.INFURA_API_KEY || '';

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
        return new HDWalletProvider(privateKey, `https://ropsten.infura.io/v3/${appId}`)
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
