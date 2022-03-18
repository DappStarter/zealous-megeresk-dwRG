require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note remain provide grace nasty fresh stock'; 
let testAccounts = [
"0x52ccfce19fba3b680a8d7c648ca91a45a76a01a26cb38e9c1a1c3247cbd5c8b9",
"0x4f20df7aaab99f1957c2fbdf517928580cfb78f95d07e1217391b1286cba9cf3",
"0xe8da8b5941abb977a53927b78c6fdd3ff6d9ac74d9a28ac9a6af2971e8b73c7e",
"0x36ea17c7886df731a3592b11976265f8180e79667bd23598007e3b43b236d74b",
"0x0fb2cb63584a140a28cb0511b0b2db4d0ccda4e7fa95a8be4f3cf7ae4191590d",
"0x898b782e1ef27c9f9b5e40e7983393eae73e2aca6bbb711f6983f1e25df6545e",
"0xe486b719e67dc16dc82707579316a40c465bc2cf38bea366a756f84db162936d",
"0x22b1f70b3e091411855429b36e3cb413a276aa34a9ca0d3c8e5adbff2ed2bab2",
"0x27cab637c4daf4d5f097268cf466a10674326f4e7744be55e83216946208f357",
"0x4d38784a4571e880e51a39c22029b95c99e64bc281356e52bb1910f1d900e8ff"
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


