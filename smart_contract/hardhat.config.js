
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Lx_SvdmOauuZBhPal5-eDwwyeACopbuF",
      accounts: [ '5594b20e6f869f2f6eb46b5cd3c1e7ef7527e981f49cbef0a696b586761cbb51' ] 
    }
  }
}