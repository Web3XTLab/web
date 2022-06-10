const AppNFT = artifacts.require("AppNFT");
const AppStore = artifacts.require("AppStore");

module.exports = async (deployer) => {
  deployer.deploy(AppNFT);
  deployer.link(AppNFT, AppStore);
  deployer.deploy(AppStore);
};
