import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from 'react-router-dom';
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
  // 使用 useMatch 获取当前路径
  const currentPath = useMatch('*')?.pathname || '';

  // 格式化菜单项，确保 key 和 path 匹配
  const formattedMenu = menu.map((item) => ({
    ...item,
    icon: renderIcon(item.icon),
    key: item.path, // 确保每个菜单项有 key，并且 key 与 path 匹配
  }));

  return (
    <ConfigProvider
      theme={{
        algorithm:
          layoutConfig.navTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary: layoutConfig.colorPrimary, // 设置主题色
          borderRadius: layoutConfig.borderRadius,
        },
      }}
    >
      {/* 确保 Router 在 ProLayout 外部包裹 */}
      <ProLayout
        {...layoutConfig}
        menuDataRender={() => formattedMenu}
        menuItemRender={(item, dom) => {
          return <Link to={item.path || '/'}>{dom}</Link>;
        }}
        selectedKeys={[currentPath]} // 动态设置选中的菜单项
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
    </ConfigProvider>
  );
};

// 在外层包裹 Router
const LayoutWithRouter: React.FC<BaseLayoutProps> = (props) => {
  return (
    <Router>
      <BaseLayout {...props} />
    </Router>
  );
};

export default LayoutWithRouter;
