import { MenuItem } from '../types/config';

const menuData: MenuItem[] = [
  {
    path: '/user',
    name: '用户',
    icon: 'UserOutlined',
    element: 'User',
    children: [
      {
        path: 'config',
        name: '用户配置',
        icon: 'UserOutlined',
        element: 'UserConfig',
      },
    ],
  },
  {
    path: '/products',
    name: '产品',
    icon: 'LaptopOutlined',
    element: 'Products',
  },
  {
    path: '/notifications',
    name: '消息',
    icon: 'NotificationOutlined',
    element: 'Notifications',
  },
];

export default menuData;
