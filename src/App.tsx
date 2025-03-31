import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Header from './components/Header/Header';
import { loadPageComponent } from './utils/loadPageComponent';
import menuData from '../config/menu';
import { renderIcon } from './utils/renderIcon';
const { Content } = Layout;

const App: React.FC = () => {
  const menuItemRender = (item: any, dom: any) => {
    return <Link to={item.path || '/'}>{dom}</Link>;
  };

  const formattedMenu = menuData.map((item) => ({
    ...item,
    icon: renderIcon(item.icon),
  }));

  // 将配置与代码中定义的项合并
  const config = {
    title: 'zsj脚手架',
    logo: '/vite.svg',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    navTheme: 'dark', // 'light' | 'dark'
    colorPrimary: '#722ed1',
    borderRadius: 6,
    menuItemRender,
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          config.navTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary: config.colorPrimary,
          borderRadius: config.borderRadius,
        },
      }}
    >
      <Router>
        <ProLayout
          {...config}
          menuDataRender={() => formattedMenu}
          headerContentRender={(props) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 24,
              }}
            >
              <Header layout={config.layout} />
            </div>
          )}
        >
          {/* 使用从 JSON 配置中读取的配置 */}
          <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  {menuData.map((item) =>
                    item.path && item.element ? (
                      <Route
                        key={item.path}
                        path={item.path}
                        element={loadPageComponent(item.element)}
                      />
                    ) : null
                  )}
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
