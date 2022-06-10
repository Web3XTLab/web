var AppStoreContract = artifacts.require("AppStore");
var seller = '0xe556286488553dd65c321504e4E53fD74fB6D8E6';
var buyer = '0xf759d285DC49538C58A4d038126C02bda3F07139';
var amount = 1000000000;
var tokenURI =
  "https://abcoathup.github.io/SampleERC1155/api/token/0000000000000000000000000000000000000000000000000000000000000002.json";

const main = async (cb) => {
  try {
    console.log("---- Begin ----");
    const AppStore = await AppStoreContract.deployed();
    console.log("---- AppStore Deployed ----");

    const totalCount = await AppStore.totalCount();
    console.log("---- AppStore totalCount ----", totalCount);

    const sellResult = await AppStore.sell(amount, tokenURI);
    console.log("---- AppStore sell ----", sellResult);

    // const buyResult = await AppStore.buy(0, { from: buyer, value: amount });
    // console.log("---- AppStore buy ----", buyResult);

    const verifyResult = await AppStore.verify(0, { from: seller });
    console.log("---- AppStore verify ----", verifyResult);

  } catch (err) {
    console.log("Doh! ", err);
  }

  cb();
};

module.exports = main;
