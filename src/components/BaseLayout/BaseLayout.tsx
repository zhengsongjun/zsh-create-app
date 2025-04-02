// src/components/BaseLayout.tsx
import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProLayout from '@ant-design/pro-layout';
import { renderIcon } from '@/utils/renderIcon';
import { RenderRoutes } from './renderRoutes';

interface BaseLayoutProps {
  layoutConfig: any;
  menu: MenuItem[];
  header?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  layoutConfig,
  menu,
  header,
}) => {
  const formattedMenu = menu.map((item) => ({
    ...item,
    icon: renderIcon(item.icon),
  }));
  console.log('BaseLayout', menu);
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
        {' '}
        {/* 用 Router 包裹整体 */}
        <ProLayout
          {...layoutConfig}
          menuDataRender={() => formattedMenu}
          menuItemRender={(item, dom) => {
            return <Link to={item.path || '/'}>{dom}</Link>;
          }}
          headerContentRender={() => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 24,
              }}
            >
              {header}
            </div>
          )}
        >
          {/* 直接用 RenderRoutes 渲染路由，不再使用外层 Routes */}
          <RenderRoutes routes={menu} />
        </ProLayout>
      </Router>
    </ConfigProvider>
  );
};

export default BaseLayout;
