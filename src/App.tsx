import React from 'react';
import { Layout, Menu } from 'antd';
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
    logo: 'https://www.antgroup.com/img/logo.svg',
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

  return (
    <Router>
      <ProLayout {...config}>
        {' '}
        {/* 使用从 JSON 配置中读取的配置 */}
        <Layout style={{ minHeight: '100vh' }}>
          {/* <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key='1' icon={<UserOutlined />}>
                User
              </Menu.Item>
              <Menu.Item key='2' icon={<LaptopOutlined />}>
                Products
              </Menu.Item>
              <Menu.Item key='3' icon={<NotificationOutlined />}>
                Notifications
              </Menu.Item>
            </Menu>
          </Sider> */}
          <Layout style={{ padding: '0 24px 24px' }}>
            <Header className='site-layout-background' style={{ padding: 0 }} />
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
  );
};

export default App;
