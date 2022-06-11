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
        mapping(address => bool) buyers;
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
     * The method developer use to publish app
     */
    function sell(uint amount, string memory tokenURI) public returns (uint256)  {
        // create NTF token
        uint ntfToken = appNTF.add(msg.sender, tokenURI);

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
        AppProperty storage buyApp = appMap[tokenId];
    
        require(buyApp.seller != address(0), "Error: There is no app pointed to by this tokenId");
        require(buyApp.price == msg.value, "Error: The purchase price for this app is incorrect");
        require(buyApp.buyers[msg.sender] != true, "Error: This user has already purchased");

        // transform eth to seller
        buyApp.seller.transfer(msg.value);

        // add buyers to buyApp.buyers 
        buyApp.buyers[msg.sender] = true;

        emit OnBuy(msg.sender, buyApp.seller, tokenId, msg.value);

        return true;
    }

    /**
     * The method developer use to verify consumer permissions
     *
     */
    function verify(uint256 tokenId, address buyer) public returns (bool) {
        require(appMap[tokenId].seller != address(0), "Error: There is no app pointed to by this tokenId");

        bool verified = appMap[tokenId].buyers[buyer] == true;

        emit OnVerify(verified, tokenId);

        return verified;
    }

    // Fallback: reverts if Ether is sent to this smart-contract by mistake
    fallback () external {
        revert();
    }
}