import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Avatar, Col, ConfigProvider, Layout as LayoutAnt, Menu, Modal, Row, Space, theme } from 'antd';
import themeDefault from '@styles/theme-default';
import Login from "@features/login/Login";
import { Logo } from "./logo/Logo";
import { UserOutlined } from "@ant-design/icons";
import LoginComponent from "@components/login/login";

const { Header, Footer, Content } = LayoutAnt;

export function Layout() {
  const locationObj = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const getActiveMenuKey = (pathname: string) => {
    if (pathname.includes('/profile')) return 'profile';
    if (pathname.includes('/wallet')) return 'wallet';
    if (pathname.includes('/bank')) return 'bank';
    if (pathname.includes('/borrow')) return 'borrow';
    return 'profile';
  };

  const activeKey = getActiveMenuKey(location.pathname);

  return (
    <ConfigProvider theme={themeDefault}>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <LayoutAnt>
          <Header style={{ height: '100px', padding: '0 40px', background: '#f0f2f5' }}>
            <Row align='middle' justify='space-between' style={{ height: '100%' }}>
              <Col>
                <Link to="/">
                  <Logo style={{ width: '80px', height: '26px', verticalAlign: 'middle' }} />
                </Link>
              </Col>
              <Col>
                <Menu mode="horizontal" selectedKeys={[activeKey]} style={{ background: 'transparent', borderBottom: 'none', minWidth: '400px' }}>
                  <Menu.Item key="profile">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="wallet">
                    <Link to="/wallet">Wallet</Link>
                  </Menu.Item>
                  <Menu.Item key="bank">
                    <Link to="/bank">Bank</Link>
                  </Menu.Item>
                  <Menu.Item key="borrow">
                    <Link to="/borrow">Borrow</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <LoginComponent />
              </Col>
            </Row>
            <Modal
              open={isLoginModalOpen}
              onCancel={() => setIsLoginModalOpen(false)}
              footer={[]}
              zIndex={9}
            >
              <Login authorizationCompleted={() => { setIsLoginModalOpen(false); }} />
            </Modal>
          </Header>
          <Content>
            <Outlet />
          </Content>
          {/* <Footer></Footer> */}
        </LayoutAnt>
      </Space>
    </ConfigProvider >
  );
};
