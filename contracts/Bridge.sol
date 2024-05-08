// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Bridge {
    address public sepoliaToken; // Address of the Sepolia token contract
    address public lineoToken; // Address of the Lineo Sepolia token contract

    event TokensTransferred(address indexed from, address indexed to, uint256 amount);

    constructor(address _sepoliaToken, address _lineoToken) {
        sepoliaToken = _sepoliaToken;
        lineoToken = _lineoToken;
    }

    function transferTokens(address recipient, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");

        // Transfer tokens from Sepolia to the recipient address
        IERC20(sepoliaToken).transferFrom(msg.sender, recipient, amount);
        IERC20(lineoToken).transfer(msg.sender, amount);

        emit TokensTransferred(msg.sender, recipient, amount);
    }
}
