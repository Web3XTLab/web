const { expectRevert } = require('@openzeppelin/test-helpers');

const AppStore = artifacts.require('AppStore.sol');

contract('AppStore', (accounts) => {
  const seller = accounts[0];
  const buyer = accounts[1];
  const amount = 1000000000;
  const tokenURI = 'https://abcoathup.github.io/SampleERC1155/api/token/0000000000000000000000000000000000000000000000000000000000000002.json';

  before(async () => {
    contract = await AppStore.new();
  });

  describe('transaction', () => {
    it('common', async () => {
      await contract.sell(amount, tokenURI, { from: accounts[0] });
      await contract.buy(0, { from: accounts[1], value: amount });
      const verifiedSellerResult = await contract.verify(0, { from: accounts[0] });
      const verifiedBuyerResult = await contract.verify(0, { from: accounts[1] });
      assert.equal(verifiedSellerResult, false);
      assert.equal(verifiedBuyerResult, true);
    });
  });
});