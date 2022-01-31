require('dotenv').config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(API_URL)

const contract = require('../artifacts/contracts/SatNFT.sol/SatNFT.json')
const contractAddress = '0x4D97B717A91C1f99C8Ef5EaB434262447e3e69Ad'
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')

  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    maxPriorityFeePerGas: 22999999987,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  }

  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  const transactionReceipt = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  )

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)
}

mintNFT(
  'https://gateway.pinata.cloud/ipfs/QmPVgkZbBXXnTg3Rb8p6458sUDu8ptxmahGTAGDt5gABp2'
)
