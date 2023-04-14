require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@ethereum-pessimism/plugins/hardhat/compiler')
require('@ethereum-pessimism/plugins/hardhat/ethers')

module.exports = {
  networks: {
    pessimism: {
      url: process.env.L2_NODE_URL || 'http://localhost:8545',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 0,
      gas: 9000000
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.7.3'
      }
    ]
  }
}
