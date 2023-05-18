# EVM State

Investigates how state is manipulated within a single block with multiple transactions in the Ethereum Virtual Machine (EVM).

## Functions

We implement two simple functions in the contract to manipulate the counter variable in the contract. From the [Solidity documentation](https://docs.soliditylang.org/en/v0.8.6/introduction-to-smart-contracts.html#storage-memory-and-the-stack) on storage, memory, and the stack storage variables are stored permanently in the contract's storage. This means that whenever the contract is called, the value of the storage variable is read from or written to. Memory variables are temporary, meaning that their values are stored only during the execution of the function they are declared in. The stack is used to store small local variables.

### `increment()`

Increments the counter by 1.

### `decrement()`

Decrements the counter by 1.

## Testing

The contract includes a set of tests using the [Hardhat](https://hardhat.org/) testing framework. The tests cover various functionalities of the contract and ensure its proper behavior. Additionally, the contract includes a test that investigates how the state can be manipulated within a single block with multiple transactions in the Ethereum Virtual Machine (EVM).

## Usage

To use the contract, you can follow these steps:

1. Deploy the contract to an Ethereum network or a local development environment.
2. Interact with the contract using the provided functions:
   - Call `increment()` to increment the counter.
   - Call `decrement()` to decrement the counter.

## Development

To set up a development environment and run tests, you can follow these steps:

1. Install Hardhat globally by running `npm install -g hardhat`.
2. Clone the repository and navigate to the project directory.
3. Install project dependencies by running `npm install`.
4. Run the tests using the command `npx hardhat test`.

Please note that you may need to configure your development environment and connect to a compatible Ethereum network or a local blockchain for deployment and testing.

## License

The contract is provided under the `UNLICENSED` SPDX license. You are free to use, modify, and distribute the contract as per your requirements.