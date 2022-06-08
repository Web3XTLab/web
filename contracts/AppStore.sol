// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AppNTF.sol";

contract AppStore {
    event Log(uint message);

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
    }

    /**
     * AppNTF TokenId(uint256) => AppProperty
     */
    mapping(uint256 => AppProperty) public appMap;

    constructor() {
        appNTF = new AppNFT();
    }

    function sell(uint amount, string memory tokenURI) public returns (uint256)  {
        // create NTF token
        uint ntfToken = appNTF.awardItem(msg.sender, tokenURI);

        // record app property: the price
        AppProperty memory appProperty;
        appProperty.seller = payable(msg.sender);
        appProperty.price = amount;

        // set to map
        appMap[ntfToken] = appProperty;

        return ntfToken;
    }

    // Todo: Repeat buy and many more
    function buy(uint256 tokenId) public payable returns (bool)  {
        AppProperty storage buyApp = appMap[tokenId];
    
        require(buyApp.seller != address(0), "Error: There is no app pointed to by this tokenId");
        require(buyApp.price == msg.value, "Error: The purchase price for this app is incorrect");

        // transform eth to seller
        buyApp.seller.transfer(msg.value);

        // add buyers to buyApp.buyers
        buyApp.buyers.push(msg.sender);

        return true;
    }
}