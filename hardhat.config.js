require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const INFURA_API_KEY = `a33b73db572a40a4a8ea0a9439a1daa4`
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/a33b73db572a40a4a8ea0a9439a1daa4`,
      accounts: [`0xc84efaab9eacc840503fbb6619d6f8f73d46e6265822c16d9a0170b500dc8b4a`]
    },
    linea: {
      url: `https://linea-sepolia.infura.io/v3/a33b73db572a40a4a8ea0a9439a1daa4`,
      accounts: [`0xc84efaab9eacc840503fbb6619d6f8f73d46e6265822c16d9a0170b500dc8b4a`]
    },
  },
};
