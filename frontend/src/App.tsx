import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'antd';

import './styles/app.scss';
import { Layout, ErrorPage } from '@components/core';
import Intro from '@pages/intro/Intro';
import KYC from '@pages/kyc/KYC';
import Login from '@features/login/Login';
import Profile from '@pages/profile/Profile';
import Wallet from '@pages/wallet/Wallet';
import Bank from '@pages/bank/Bank';
import Borrow from '@pages/borrow/Borrow';

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/app/'}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="kyc" element={<KYC />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="bank" element={<Bank />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="login" element={<Row justify='center'><Col span={8}><Login /></Col></Row>} />
        </Route>
        <Route path="*" element={<ErrorPage error={new Error('Page not found')} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
