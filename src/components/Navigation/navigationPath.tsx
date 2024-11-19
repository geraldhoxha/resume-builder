import { CodeOutlined, FileAddOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { MenuItem } from "../types/types";

export const leftNavPath: MenuItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Explore',
    path: '/explore',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'About',
    path: '/about',
  }
]

export const rightNavPath: MenuItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <CodeOutlined />
  },
  {
    name: "New Resume",
    path: "/build",
    icon: <FileAddOutlined />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserOutlined />
  },
  {
    name: 'Logout',
    path: '/log-out',
    icon: <LogoutOutlined />
  }
]
