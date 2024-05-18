import { CodeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
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
    name: 'Features',
    path: '/features',
  },
  {
    name: 'About',
    path: 'about',
  }
]

export const rightNavPath: MenuItem[] = [
  {
    name: 'Projects',
    path: '/projects',
    icon: <CodeOutlined/>
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserOutlined/>
  },
  {
    name: 'Logout',
    path: '/log-out',
    icon: <LogoutOutlined/>
  }
]
