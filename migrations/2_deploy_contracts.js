const CarbonZero = artifacts.require("./CarbonZero.sol");

module.exports = function (deployer) {
  deployer.deploy(CarbonZero);
};