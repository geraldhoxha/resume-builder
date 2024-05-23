import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router'
import { clearTokens } from '../../tools/ApolloClient'
import { useUser } from '../../tools/Context'

export const Logout = () => {
  const userContext = useUser()
  const navigate = useNavigate()
  if (userContext?.user !== undefined) {
    userContext.setUser(undefined)
    window.location.reload()
  }
  clearTokens()

  function goToHome() {
    navigate("/", { replace: true })
  }
  return (
    <Typography.Title level={1} style={{ margin: 0 }}>
      You have successfully logged out
      <Button type='link' onClick={goToHome}>
        Home
      </Button>
    </Typography.Title>
  )
}
