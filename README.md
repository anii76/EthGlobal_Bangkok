<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <h1>LayerLend</h1>
  
  <p>
    ETHGlobal Hackathon Submission | Bangkok 2024 
  </p>
  
  

   
<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Key Features](#key-features)
  * [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running Tests](#running-tests)
  * [Deployment](#deployment)
  

<!-- About the Project -->
## About the Project
This project builds a decentralised credit scoring system that combines Web2 financial profiles and Web3 activity to enable broader access to DeFi. Users can connect their credit history, along with blockchain-based actions like wallet transactions, and token holdings to generate a trustable credit score based on their user risk profile. The system unlocks opportunities for uncollateralised loans while bringing inclusivity in decentralised finance for unbanked and global citizens who no longer need to rely on current banking systems.

<!-- Screenshots -->
### Key Features 
LayerLend utilize Kinto L2 KYC to onboard users in a secure and a verifiable manner, allowing to tie web2 to web3 credentials and link credit score to be taken into consideration where issuing loans on web3, allowing for more adaptability and onbaording for more people into DeFi from TradFi, thus a user can start his web3 journey trading accounted for his good web2 banking history or financial behaviour, regardless of location, bring the opportunity to trade in DeFi for the masses. Additionally, we enable uncollaterized lending on behalf of the user on traditional defi lending protocols like Aave, compound that requires the borrower to deposit collateral who's value exceeds the value of the loan, a thing that a newly web3 comer won't have.

- Our project calculates credit score taking into account several factors like liquidity composition (stable coins, native tokens and high risk tokens like memecoins), transaction volume, repayment history and interactions with trusted protocols on chain (wallet reputation on chain). Data mostly obtained through subgraphs for onchain credit score. For offchain ones, we aimed to utilized vLayer to compute zk verified credit scores provided by banks for users or through banking/credit standards/apis like FICO/Open banking Api. All contribute to the final credit score of the user represented by a unique KintoID.
- Uncollaterized lending opportunity : we give high credit score users (based on web2/web3 data) the opportunity to participate in lending protocols and getting loans without needing to deposit a collateral as we deposit it on their behalf in case of good credit score, we also require users to accept a legally binding agreement to pay their loan in time, otherwise they could be subject to penalties, bad credit score reputation shared with web2 (banks) and web3 (lending protocols for instance) actors, or even sanctions or banning. The loans are timed and limited in amount, based on credit history, some users may have access to undercollaterized loans, others to fully uncollaterized or collaterized. Late repayments have high intrest accompagned with them + a penality. Not paying at all can lead to banning.
- Offer the opportunity to build risk profile per Kinto Identity associated with single person or entity which will enable us to offer these insights to other protocols via an onchain service or an api. 


<!-- TechStack -->
### Tech Stack

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">React.js</a></li>
    <li><a href="https://expressjs.com/">Typescript</a></li>
    <li><a href="https://graphql.org/">Figma</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Solidity</a></li>
    <li><a href="https://thegraph.com/">TheGraph</a></li>
    <li><a href="https://docs.simplehash.com/">SimpleHash</a></li>
    <li><a href="https://graphql.org/">Typescript</a></li>
  </ul>
</details>

<details>
  <summary>Zero Knowledge</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">vLayer</a></li>
    <li><a href="https://reactjs.org/">Solidity</a></li>
  </ul>
</details>


<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

This project uses Hardhat as a developpement framework

<!-- Installation -->
### Installation

Install dependencies with forge

```bash
   npm i
```
compile with 

```bash
   npx hardhat compile
```
   
<!-- Running Tests -->
### Running Tests

To run tests, run the following command

```bash
  npx hardhat test
```


<!-- Deployment -->
### Deployment

To deploy the smart contracts on kinto chain (follow the create an a kinto app tutorial then deploy the contract)

```bash
  npx hardhat ignition deploy ignition/modules/Lending.ts --network kinto --verify --deployment-id kinto-deployment
```


