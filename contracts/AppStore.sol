// contracts/AppStore.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AppNFT.sol";

contract AppStore {

    AppNFT public appNTF;

    /**
     * App Property
     * @price: The price of app / wei
     * @seller: Who sell this app
     * @buyers: Who buy this app
     */
    struct AppProperty {
        uint price;
        address payable seller;
        address[] buyers;
        mapping(address => bool) buyersMap;
    }

    /**
     * AppNTF `TokenId(uint256)` => `AppProperty`
     */
    mapping(uint256 => AppProperty) public appMap;

    // events
    event OnSell(address seller, uint256 tokenId, uint amount);
    event OnBuy(address buyer, address seller, uint256 tokenId, uint amount);
    event OnVerify(bool verified, uint256 tokenId);

    constructor() {
        appNTF = new AppNFT();
    }

    /**
     * Get the NFT item count
     */
    function totalCount() public view returns (uint256) {
        return appNTF.currentCount();
    }

    /**
     * Get the NFT tokenURI
     */
    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return appNTF.tokenURI(tokenId);
    }

    /**
     * Get the App Name
     */
    function getAppName(uint256 tokenId) public view returns (string memory) {
        return appNTF.getName(tokenId);
    }

    /**
     * Get the App Seller
     */
    function getAppSeller(uint256 tokenId) public view returns (address) {
        return appMap[tokenId].seller;
    }

    /**
     * Get the App Price
     */
    function getAppPrice(uint256 tokenId) public view returns (uint) {
        return appMap[tokenId].price;
    }

    /**
     * Get the App Buyers
     */
    function getAppBuyers(uint256 tokenId) public view returns (address[] memory buyers) {
        return appMap[tokenId].buyers;
    }

    /**
     * The method developer use to publish app
     */
    // TODO: verify tokenURI unique
    function sell(string memory name, string memory tokenURI, uint amount) public returns (uint256)  {
        // create NTF token
        uint ntfToken = appNTF.add(msg.sender, tokenURI, name);

        // record app property: the price
        appMap[ntfToken].seller = payable(msg.sender);
        appMap[ntfToken].price = amount;

        emit OnSell(msg.sender, ntfToken, amount);
        
        return ntfToken;
    }

    /**
     * The method consumers use to buy app
     */
    function buy(uint256 tokenId) public payable returns (bool)  {
        require(appMap[tokenId].seller != address(0), "Error: There is no app pointed to by this tokenId");
        require(appMap[tokenId].price == msg.value, "Error: The purchase price for this app is incorrect");
        require(appMap[tokenId].buyersMap[msg.sender] != true, "Error: This user has already purchased");

        // transform eth to seller
        appMap[tokenId].seller.transfer(msg.value);

        // add buyers to buyApp.buyers 
        appMap[tokenId].buyersMap[msg.sender] = true;
        appMap[tokenId].buyers.push(msg.sender);

        emit OnBuy(msg.sender, appMap[tokenId].seller, tokenId, msg.value);

        return true;
    }

    /**
     * The method developer use to verify consumer permissions
     *
     */
    function verify(uint256 tokenId, address buyer) public returns (bool) {
        require(appMap[tokenId].seller != address(0), "Error: There is no app pointed to by this tokenId");

        bool verified = appMap[tokenId].buyersMap[buyer] == true;

        emit OnVerify(verified, tokenId);

        return verified;
    }

    // Fallback: reverts if Ether is sent to this smart-contract by mistake
    fallback () external {
        revert();
    }
}