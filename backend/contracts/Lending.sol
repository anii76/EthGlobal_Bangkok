// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

//Create pool ? Delegation
//test aave 
import "hardhat/console.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract Lending {
    address payable owner;

    IPoolAddressesProvider public immutable ADDRESSES_PROVIDER;
    IPool public immutable POOL;

    address private immutable tokenAddress =
        0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238;//USDC
    IERC20 private token;

    //--------------------------------
    IERC20 public collateralToken; // Token used as collateral
    IERC20 public loanToken; // The token the user wants to borrow

    mapping(address => uint256) public userCreditScores;
    //--------------------------------
    constructor(address _addressProvider) {
        ADDRESSES_PROVIDER = IPoolAddressesProvider(_addressProvider);
        POOL = IPool(ADDRESSES_PROVIDER.getPool());
        console.log("POOL: ", address(POOL));
        owner = payable(msg.sender);
        token = IERC20(tokenAddress);
        console.log("TOKEN: ", address(token));
    }

    function getUserAccountData(address _userAddress)
        external
        view
        returns (
            uint256 totalCollateralBase,
            uint256 totalDebtBase,
            uint256 availableBorrowsBase,
            uint256 currentLiquidationThreshold,
            uint256 ltv,
            uint256 healthFactor
        ){
        return POOL.getUserAccountData(_userAddress);
    }

    function approveToken(uint256 _amount, address _poolContractAddress)
        external
        returns (bool){
        return token.approve(_poolContractAddress, _amount);
    }

    function allowanceToken(address _poolContractAddress)
        external
        view
        returns (uint256){
        return token.allowance(address(this), _poolContractAddress);
    }

    function getBalance(address _tokenAddress) external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }

     modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    receive() external payable {}

    //Verify credit score (call our other contract)
        //for low credit score, some collateral is required (buy eth or pay in fiat directly ?)
        //for high credit score, no collateral is required
    
    //Borrow on Aave
    function borrow(uint256 _amount) internal {
        POOL.borrow(address(loanToken), _amount, 2, 0, msg.sender);
    }

    //Repay on Aave
    function repay(uint256 _amount) internal {
        POOL.repay(address(loanToken), _amount, 2, msg.sender);
    }

    //Liquidate on Aave

    //repay loan
    //penalize
    //recieve payments
    //send loan to user (if collateral is enough) or he must join waiting list ? (limited number of loans)

}

//Protocol admin must deposit collateral to create pool
//Protocol admin can add/remove collateral token
//Protocol admin can set min/max borrow rate
//Protocol admin can set liquidation threshold
//Protocol admin can liquidate position (if health factor < 1)

//User doesn't have to deposit collateral to use the protocol
//User can borrow any amount up to the max borrow rate
//User can repay at any time (before due time)
//User can liquidate their position at any time (before due time)
//User can't borrow more than their credit score allows
//User can't repay more than their borrow amount