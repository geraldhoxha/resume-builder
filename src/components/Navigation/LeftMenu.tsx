import { Menu } from 'antd'
import { MenuMode } from 'rc-menu/lib/interface'
import { Link } from 'react-router-dom'
import { MenuItem } from '../types/types'
import { leftNavPath } from './navigationPath'

type Mode = {
  mode: MenuMode
}

export const LeftMenu = ({ mode }: Mode) => {
  return (
    <Menu mode={mode}>
      {leftNavPath.map((item: MenuItem) => (
        <Menu.Item key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
