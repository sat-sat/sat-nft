# Simple NFT Minter

This project demonstrates how to mint an NFT to the Ropsten test net via Alchemy and Hardhat

## Setup

**Alchemy**

- Create an account with Alchemy
- Create a new app in your Alchemy account using staging env and the ropsten network
- Grab the app's api key

**NFT Image**

- Go to `https://www.pinata.cloud/` and create a free account
- Upload any image you'd like to use for your NFT
- Grab the image CID and replace the `image` value inside `nft-metadata.json` with `https://gateway.pinata.cloud/ipfs/your-image-hash`
- Replace the value passed in `mintNFT()` inside `mint-nft.js` with `https://gateway.pinata.cloud.ipfs/your-image-hash`

**Deploy contract and mint your NFT**

```bash
// Be sure to install all packages before you begin
yarn install

// Deploy your contract
npx hardhat run scripts/deploy.js --network ropsten

// Mint your NFT
node scripts/mint-nft.js
```
