import React, { useState, useEffect } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { ethers } from "ethers";
import { APP_ADDRESS, ABI } from './constants';//importing the contract address and abi
import './Login.scss';
import logoWorldId from '@assets/logo-world-id.svg';
import logoMetamask from '@assets/logo-metamask.svg';
import logoTrustWallet from '@assets/logo-trustwallet.svg';
import { useAuth0 } from "@auth0/auth0-react";

function MetamaskLogin(props: { authorizationCompleted?: any }) {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, logout } = useAuth0();
  const { ethereum } = window as any;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setWalletAddress(account);
    }
  }
  let contract = new ethers.Contract(APP_ADDRESS, ABI, ethereum);
  const connectApp = async () => {
    const Address = APP_ADDRESS
    const abi = ABI
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    await window.ethereum.enable();
    const contract = new ethers.Contract(Address, abi, signer);
    console.log("hi")
  }
  connectApp()
  const createProfile = async () => {
    const profile = await contract.createProfile()
  }

  return (
    <div className='login'>
      <div className='title'>Login</div>
      <div style={{ fontSize: '14px' }}>Signing with World ID gives you exclusive benefits, discounts, and extra reputational points for a better NFT to be minted, it also allows you to have a seamless login experience that's why we recommend it.</div>

      <div className='wallets'>

        <div className="wallet" onClick={connectMetamask}>
          <img className='icon' src={logoMetamask} alt="Metamask" />
          <div className='name'>
            <div >
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(0, 6)}..${walletAddress.substring(38)}`
                : "Connect Wallet"}
            </div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>

        <div className="wallet">
          <img className='icon' src={logoTrustWallet} alt="TrustWallet" />
          <div className='name'>
            <div>TrustWallet</div>
            <div className='description'>Get +1 reputation point</div>
          </div>
          <RightCircleOutlined />
        </div>
      </div>
    </div>
  );
}


export default function Login(props: { authorizationCompleted?: any }) {
  return (
    <div className='login-container'>
      <MetamaskLogin authorizationCompleted={props.authorizationCompleted} />
    </div>
  );
}
