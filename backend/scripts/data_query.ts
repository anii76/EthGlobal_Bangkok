import { request, gql } from "graphql-request";

// Function to fetch data from The Graph
async function fetchUserTransactions(userAddress: string): Promise<any> {
  const endpoint = "https://api.thegraph.com/subgraphs/name/your-subgraph-name";
  
  const query = gql`
    query ($userAddress: String!) {
      transactions(where: { user: $userAddress }) {
        id
        timestamp
        token
        amount
        action
      }
    }
  `;

  const variables = { userAddress: userAddress.toLowerCase() };

  try {
    const data = await request(endpoint, query, variables);
    return data.transactions;
  } catch (error) {
    console.error("Error fetching data from The Graph:", error);
    throw error;
  }
}

