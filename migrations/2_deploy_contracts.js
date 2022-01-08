const { PAYMENT_TOKEN, FOUNDATION_ADDRESS } = require('../env');
const SeedSaleContract = artifacts.require('SeedSaleAndVesting');
const PrivateSaleContract = artifacts.require('PrivateSaleAndVesting');

module.exports = async function (deployer) {
  const seedSale = await deployer.deploy(
    SeedSaleContract,
    PAYMENT_TOKEN,
    web3.utils.toWei('0.0000040'),
    FOUNDATION_ADDRESS
  );
  const privateSale = await deployer.deploy(
    PrivateSaleContract,
    PAYMENT_TOKEN,
    web3.utils.toWei('0.0000055'),
    FOUNDATION_ADDRESS
  );
};
