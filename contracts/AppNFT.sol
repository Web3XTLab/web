// contracts/AppNTF.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AppNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => string) public _appNameMap;

    constructor() ERC721("BitForest", "BFT") {}

    function add(address sender, string memory tokenURI, string memory name) public returns (uint256) {
        uint256 newItemId = _tokenIds.current();

        bool hasSameName = false;
        bool hasSameTokenURI = false;
        for (uint i = 0; i < newItemId; i++) {
            if (keccak256(abi.encodePacked(_appNameMap[newItemId])) == keccak256(abi.encodePacked(name))) {
                hasSameName = true;
                break;
            }
            if (keccak256(abi.encodePacked(this.tokenURI(newItemId))) == keccak256(abi.encodePacked(tokenURI))) {
                hasSameTokenURI = true;
                break;    
            }
        }

        require(!hasSameName, "There is already a app of the same name");
        require(!hasSameTokenURI, "There is already a app of the same tokenURI");

        _mint(sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _appNameMap[newItemId] = name;

        _tokenIds.increment();
        return newItemId;
    }

    function currentCount() public view returns (uint256) {
        return _tokenIds.current();
    }

    function getName(uint256 tokenId) public view returns (string memory) {
        return _appNameMap[tokenId];
    }
}
