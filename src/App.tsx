import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import Header from './components/Header/Header';
import { loadPageComponent } from './utils/loadPageComponent';
import menuData from '../config/menu';
import { renderIcon } from './utils/renderIcon';
import layoutConfig from '../config/config';
const { Content } = Layout;

const App: React.FC = () => {
  const formattedMenu = menuData.map((item) => ({
    ...item,
    icon: renderIcon(item.icon),
  }));

  return (
    <ConfigProvider
      theme={{
        algorithm:
          layoutConfig.navTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary: layoutConfig.colorPrimary,
          borderRadius: layoutConfig.borderRadius,
        },
      }}
    >
      <Router>
        <ProLayout
          {...layoutConfig}
          menuItemRender={(item, dom) => (
            <Link to={item.path || '/'}>{dom}</Link>
          )}
          menuDataRender={() => formattedMenu}
          headerContentRender={(props) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 24,
              }}
            >
              <Header layout={layoutConfig.layout} />
            </div>
          )}
        >
          {/* 使用从 JSON 配置中读取的配置 */}
          <Layout style={{ minHeight: '100vh' }}>
            <Content
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <Routes>
                {menuData.map((item) =>
                  item.path && item.element ? (
                    <Route
                      key={item.path}
                      path={item.path}
                      element={loadPageComponent(item.element as string)}
                    />
                  ) : null
                )}
              </Routes>
            </Content>
          </Layout>
        </ProLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
