import { Menu, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons'
import { MenuItem } from "../types/types"
import { rightNavPath } from "./navigationPath"
import { Link } from "react-router-dom"
import { MenuMode } from 'rc-menu/lib/interface'

type Mode = {
  mode: MenuMode
}
export const RightMenu = ({ mode }:Mode) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu title={
        <>
          <Avatar icon={<UserOutlined />} />
          <span className='username'> Placeholder </span>
        </>
      }>
        {rightNavPath.map((item: MenuItem) => (
          <Menu.Item key={item.path}>
            <Link to={item.path}> {item.icon} {item.name} </Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  )
}
