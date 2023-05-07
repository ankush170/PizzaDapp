
const hre = require("hardhat");

async function main() {

  const Pizza = await hre.ethers.getContractFactory("pizza");
  const pizza = await Pizza.deploy();

  await pizza.deployed();

  console.log(`deployed to ${pizza.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xFD62bae1C7787F8a3C1283e7D1Eaa7639e8deE21
