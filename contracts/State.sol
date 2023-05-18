// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract State {
    uint public counter;

    constructor() {
        counter = 0;
    }

    function increment() public {
        counter++;
    }

    function decrement() public {
        counter--;
    }
}
