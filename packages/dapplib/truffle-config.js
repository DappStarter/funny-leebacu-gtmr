require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy crawl night equip gloom praise army giant'; 
let testAccounts = [
"0x663bbef6f185a2aecbf79f264635ebed77160e81263f5ec818b969dc9577248b",
"0xb144e3bb61f369aa024740d1666785990a722f88acf508a0c95bd47cc57f233c",
"0x082edaf8c87a4fb4d0e40bc5f8e6ea6afafab0c0206dd4d579dd20239512f05f",
"0xd4e12f8993b308fa090fc70d9942dd35a815d8b901323cd3c44c8b59b099a8e9",
"0x976c6feec8197add8da55a80117c8369ed7859e108ea756b20787a755453a6c9",
"0xa07bde75a1be77447616ec52505e46af312a6ffebb9d24fb405aa6870b135def",
"0x5da437463c8604df0ca8e8f6f2c80708918b209496d8bc2b7a783494de1dcdec",
"0x168f52e5a2984a284ab23f1207fd12b20342924b4cd259e68680ce75d9532890",
"0x33d31f9bb9cc06404c06c7a16bf91fc78ae664117d9832a0a487e52c20ea47c5",
"0x6607967c638ff759f524e613724a2dd0de5cb68d09a57cc55f211e545d3176b5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


