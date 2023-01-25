const hre = require("hardhat");

async function main() {
  const comp = await hre.ethers.getContractFactory("comp");
  const contract = await comp.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});