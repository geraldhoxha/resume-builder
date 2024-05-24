import { Layout, Button, Drawer } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Outlet, useLocation } from 'react-router-dom'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'
import { useWindowDimentions } from '../../tools/WindowDimentions'
import '../../styles/Navigation/Navigation.scss'
import { useUser } from '../../tools/Context'

export const Navigation = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const userContext = useUser()
  const showDrawer = () => {
    setVisible(!visible)
  }
  const { width } = useWindowDimentions()
  const { pathname: location } = useLocation()


  useEffect(() => {
    setVisible(false)
  }, [location])

  return (
    <Fragment>
      <nav className='navbar'>
        <Layout.Header className='nav-header'>
          <div className='logo'>
            <h3 className='brand-font'>Brand</h3>
          </div>
          <div className="navbar-menu">
            {width > 768
              ? (
                <>
                  <div className="leftMenu">
                    {userContext?.user !== undefined
                      ? <RightMenu mode={'horizontal'} />
                      : ""
                    }
                  </div>

                  <div className="rightMenu">
                    <LeftMenu mode={'horizontal'} />
                  </div>
                </>
              )
              : (
                <>
                  <Button className="menuButton" type="text" onClick={showDrawer}>
                    <MenuOutlined />
                  </Button>
                  <Drawer
                    title={'Brand'}
                    placement='right'
                    closable={true}
                    onClose={showDrawer}
                    open={visible}
                    style={{ zIndex: 99999 }}
                  >
                    <LeftMenu mode={'inline'} />
                    {userContext?.user !== undefined
                      ? <RightMenu mode={'inline'} />
                      : ""
                    }
                  </Drawer>
                </>
              )
            }
          </div>
        </Layout.Header>
      </nav>
      <Layout.Content>
        <div style={{minHeight: "calc(100vh - 210px)"}}>
          <Outlet />
        </div>
      </Layout.Content>
      <Layout.Footer>
        <h1>Footer</h1>
      </Layout.Footer>
    </Fragment>

  )
}
