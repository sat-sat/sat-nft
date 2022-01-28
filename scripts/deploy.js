async function main() {
  // Grab the contract factory
  const SatNFT = await ethers.getContractFactory('SatNFT')

  // Start deployment, returning a promise that resolves to a contract object
  const satNFT = await SatNFT.deploy() // Instance of the contract
  console.log('Contract deployed to address: ', satNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
