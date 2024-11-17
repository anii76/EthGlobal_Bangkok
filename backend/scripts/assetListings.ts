import { config } from 'dotenv';
import axios from 'axios';

config(); 
const API_KEY = process.env.SIMPLEHASH_API_KEY;

if (!API_KEY) {
  throw new Error('API_KEY must be defined in environment variables');
}

async function listFungibleAssets(walletAddress: string, chain: string) {
  try {
    const response = await axios.get(`https://api.simplehash.com/api/v0/fungibles/balances?chains=${chain}&wallet_addresses=${walletAddress}&include_fungible_details=0&include_prices=1&count=0&limit=20`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });

    //console.log(response.data);
    
    const fungibles = response.data.fungibles.map((fungible: any) => {
      const { fungible_id, chain, name, queried_wallet_balances } = fungible;
      const { address, quantity_string } = queried_wallet_balances[0];
      
      return {
        fungible_id,
        chain,
        name,
        address,
        balance: quantity_string
      };
    });

    return fungibles;
  } catch (error) {
    console.error('Error querying API:', error);
    throw error;
  }
}


async function listNFTs(walletAddress: string, chain: string) {

}

export { listFungibleAssets, listNFTs };
