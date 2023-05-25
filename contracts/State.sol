// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18; // Improvement suggestion: Consider updating to the latest stable version, such as 0.8.7 (pragma solidity ^0.8.7;), for access to the latest features and bug fixes.

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract State {
    uint public counter; // Improvement suggestion: Add the public visibility modifier to counter for clarity.

    constructor() {
        counter = 0; // Initialize counter to 0
    }

    function increment() public {
        counter++; // Improvement suggestion: Consider using a consistent naming convention, such as incrementCounter, to follow Solidity's camelCase naming convention.
    }

    function decrement() public {
        counter--; // Improvement suggestion: Consider using a consistent naming convention, such as decrementCounter, to follow Solidity's camelCase naming convention.
    }
}

// Use the OpenZeppelin SafeMath library to handle arithmetic operations on integers.
