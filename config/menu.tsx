import { MenuItem } from '../types/config';

const menuData: MenuItem[] = [
  {
    path: '/user',
    name: 'User',
    icon: 'UserOutlined',
    element: 'User',
    children: [
      {
        path: 'config',
        name: 'UserConfig',
        icon: 'UserOutlined',
        element: 'UserConfig',
      },
    ],
  },
  {
    path: '/products',
    name: 'Products',
    icon: 'LaptopOutlined',
    element: 'Products',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'NotificationOutlined',
    element: 'Notifications',
  },
];

export default menuData;
