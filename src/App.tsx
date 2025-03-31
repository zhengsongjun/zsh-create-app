import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
// import configData from './../config/config.json';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  // 定义 menuItemRender 和 onMenuHeaderClick
  const menuItemRender = (item: any, dom: any) => {
    return <a>{dom}</a>;
  };

  const onMenuHeaderClick = () => {
    window.location.href = '/';
  };

  // 定义 menuDataRender
  const menuDataRender = [
    {
      path: '/user',
      name: 'User',
      icon: <UserOutlined />,
    },
    {
      path: '/products',
      name: 'Products',
      icon: <LaptopOutlined />,
    },
    {
      path: '/notifications',
      name: 'Notifications',
      icon: <NotificationOutlined />,
    },
  ];

  // 将配置与代码中定义的项合并
  const config = {
    title: 'Ant Design Pro',
    logo: '/vite.svg',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    menuItemRender,
    onMenuHeaderClick,
    menuDataRender: () => {
      return menuDataRender;
    },
  };

  const layoutSettings = {
    navTheme: 'dark', // 'light' | 'dark'
    layout: 'side', // 'side' | 'top' | 'mix'
    fixedHeader: true,
    fixSiderbar: true,
    colorPrimary: '#722ed1',
    borderRadius: 6,
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          layoutSettings.navTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary: layoutSettings.colorPrimary,
          borderRadius: layoutSettings.borderRadius,
        },
      }}
    >
      <Router>
        <ProLayout {...config}>
          {/* 使用从 JSON 配置中读取的配置 */}
          <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Header
                className='site-layout-background'
                style={{ padding: 0 }}
              />
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route path='/' element={<div>Home Page</div>} />
                  <Route path='/user' element={<div>User Page</div>} />
                  <Route path='/products' element={<div>Products Page</div>} />
                  <Route
                    path='/notifications'
                    element={<div>Notifications Page</div>}
                  />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </ProLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
