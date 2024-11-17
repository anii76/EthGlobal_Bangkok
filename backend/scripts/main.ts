import { listFungibleAssets } from './assetListings';

async function main() {
  //input from user/frontend (api style)
  const walletAddress = '0x9473EC0057AcBBa6b6E1d6af50d14C6343C0817A';
  const chain = 'ethereum'; // Specify the blockchain, e.g., 'ethereum', 'polygon', etc.

  try {
    const assets = await listFungibleAssets(walletAddress, chain);
    console.log('Fungible Assets:', assets);
  } catch (error) {
    console.error('Error fetching fungible assets:', error);
  }

  //send this data to (vLayer pour historical data) + the graph
  

  
}

main();