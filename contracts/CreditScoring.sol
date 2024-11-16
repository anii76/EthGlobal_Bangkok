// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract CreditScoring {

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

    //updateScore
    //getScore
    
}