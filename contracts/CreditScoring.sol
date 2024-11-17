// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract CreditScoring {

    // Array of stablecoin addresses on Sepolia testnet
    address[] public stablecoins = [
        0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8, // USDC
        0x7169D38820dfd117C3FA1f22a697dBA58d90BA06, // USDT
        0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6, // DAI
        0x4E62eB262948671590b8D967BDE048557bdd03eD, // BUSD
        0xC1dC2d65A2243c22344E725677A3E3BEBD26E604  // PAX
    ];

    // Array of memecoin addresses on Sepolia testnet
    address[] public memecoins = [
        0x1C1Df24F0973Ee37558A6B5f7c12Ef4EaA9F47F6, // SHIB
        0x2E62c47f502F512F332497ffD783038B9E576830, // DOGELON
        0x7B4328c127B85369D9f82ca0503B000D96997463, // MM
        0x1Dc1a7B8A5ad7e3bB6F9Fa8E20c937624F054F4A, // DOGE
        0x6982508145454Ce325dDbE47a25d4ec3d2311933  // PEPE
    ];

    // Array of high market cap coin addresses on Sepolia testnet
    address[] public highCapCoins = [
        0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9, // WETH
        0xE62F50F802CcE4cAD217dD332Dd4B42d596b0E27, // WBTC
        0x876A4f6eCF13EE40caB5660B8d8e53A7910F429A, // MATIC
        0x328507DC29C95c170B56a1b3A758eB7a9E73455c, // APE
        0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984  // UNI
    ];

    //mapping of KintoID to score
    //create CreditScore NFT + metadata  =x not now


    // 1. Fetch data from the graph (to build credit score)
    //2. Fetch web2 data score that is verifiable (from verifiable contract something using vLayer)
    //3. Build score (score formula)

    //use vLayer to get balance of USDC crosschain ? 
    //calculateScore
    function calculateScore(address user) public view returns (uint256) {
    // Example pseudo-code:
        uint256 repaymentHistory = getRepaymentHistory(user);
        uint256 tokenHoldingsRisk = getTokenHoldingsRisk(user);
        uint256 protocolInteractionScore = getProtocolScore(user);

        // Weighted formula
        uint256 creditScore = (repaymentHistory * 50) 
                            + (tokenHoldingsRisk * 30) 
                            + (protocolInteractionScore * 20);

        return creditScore;
    }

    function getRepaymentHistory(address user) public view returns (uint256) {
        // Example pseudo-code:
        return 100;
    }       

    function getTokenHoldingsRisk(address user) public view returns (uint256) {
        // Example pseudo-code:
        return 100;
    }

    function getProtocolScore(address user) public view returns (uint256) {
        // Example pseudo-code:
        return 100;
    }


    function calculateCreditScore(
        uint256 liquidity,
        uint256 stability,
        uint256 risk,
        uint256 reputation,
        uint256 activity
    ) external pure returns (uint256) {
        return (40 * liquidity + 30 * stability - 20 * risk + 20 * reputation + 10 * activity) / 100;
    }   

    //liquidity per one chain
    function getLiquidity(address user, uint256 chainId) public view returns (uint256) {
        //
        return 100;
    }

    //updateScore
    //getScore
    
}