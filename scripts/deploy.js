const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const proxy = await upgrades.deployProxy(BoxV1, [12, 10]);
 // await proxy.deployed();
 await proxy.waitForDeployment();

  //console.log(proxy.address);
  console.log("Contract deployed to:", await proxy.getAddress());
  const proxyAddress1 = await proxy.getAddress();

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress1, BoxV2);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main();