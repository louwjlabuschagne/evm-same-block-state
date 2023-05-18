import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
const { testUtils } = require('hardhat');
const { block } = testUtils;

describe("State", function () {
  async function deployBase() {
    const [owner, otherAccount] = await ethers.getSigners();

    const State = await ethers.getContractFactory("State");
    const state = await State.deploy();

    return { state, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should be deployable", async function () {
      const {state} = await loadFixture(deployBase);
      expect(state.address).to.be.properAddress;
    });

    it("should have a default value of 0", async function () {
      const {state} = await loadFixture(deployBase);
      expect(await state.counter()).to.equal(0);
    });

    it("can increment the counter", async function () {
      const {state} = await loadFixture(deployBase);
      await state.increment();
      expect(await state.counter()).to.equal(1);
    });

    it("can decrement the counter", async function () {
      const {state} = await loadFixture(deployBase);
      await state.increment();
      await state.decrement();
      expect(await state.counter()).to.equal(0);
    });

    it("can increment and decrement the counter in the same block", async function () {
      const {state} = await loadFixture(deployBase);
      await block.setAutomine(false);
      const tx1 = await state.increment();
      const tx2 = await state.decrement();
      await block.advance(1);
      await block.setAutomine(true);

      const receipt1 = await tx1.wait();
      const receipt2 = await tx2.wait();

      expect(receipt1.blockNumber).to.equal(receipt2.blockNumber);
      console.log({receipt1, receipt2});

      expect(await state.counter()).to.equal(0);
    });

  });
      
});
