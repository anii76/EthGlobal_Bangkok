import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'antd';

import './styles/app.scss';
import { Layout, ErrorPage } from '@components/core';
import Intro from '@pages/intro/Intro';
import Login from '@features/login/Login';

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/app/'}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="login" element={<Row justify='center'><Col span={8}><Login /></Col></Row>} />
        </Route>
        <Route path="*" element={<ErrorPage error={new Error('Page not found')} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
