// https://eth-ropsten.alchemyapi.io/v2/85Bv8Pk1GTNB9mAR2UdyyDzjH0UbOTEK


require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/85Bv8Pk1GTNB9mAR2UdyyDzjH0UbOTEK',
      accounts: [ '91d99574096c45e37c1e36b1ea125954638dad416d604e160a5258e55597364c' ]
    }
  }
}