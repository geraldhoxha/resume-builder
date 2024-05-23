import { useLazyQuery, useMutation } from "@apollo/client"
import { useState } from "react"
import { ELTest, UserLogin } from "../../generated/Models/model"
import { Client, setTokens } from "../../tools/ApolloClient"
import { LoginToken } from "../types/user"
import { jwtDecode } from 'jwt-decode'
import { useUser } from "../../tools/Context"
import { useNavigate } from "react-router"



export function LoginUser() {

  const [userEmail, setUserEmail] = useState<string>("")
  const [userPass, setUserPass] = useState<string>("")
  // const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const userProps = useUser()
  const [loading, setLoaading] = useState<boolean>(false)
  const [login] = useMutation<LoginToken>(UserLogin, { client: Client, fetchPolicy: 'no-cache' })
  const [testthis] = useLazyQuery(ELTest)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    setLoaading(true)
    await login({ variables: { email: userEmail, password: userPass } }).then((resp) => {
      if (resp.data?.auth.login.token !== undefined) {
        const { name } = jwtDecode<{ name: string }>(resp.data.auth.login.token.refreshToken)
        if (userProps !== undefined && userProps?.user === undefined) {
          userProps.setUser({ Name: name, Email: userEmail })
        }
        const { accessToken, refreshToken } = resp.data.auth.login.token
        setTokens(accessToken, refreshToken)
      }
      setLoaading(false)
      navigate('/')
    })
      .catch(err => {
        console.log("zz", err)
      })
      .finally(() => setLoaading(false))
  }
  const handleTest = async () => {
    testthis().then(k => console.log("tHe test", k))
  }

  return (
    <div>
      <input type="email" placeholder="email" onChange={(e) => { setUserEmail(e.target.value) }} />
      <input type="email" placeholder="email" onChange={(e) => { setUserPass(e.target.value) }} />
      <button onClick={handleSubmit} disabled={(userEmail?.length < 1 && userPass?.length < 1)}>Login</button>
      {loading ? (
        <p>Please Wait</p>
      ) : ""}
      <button onClick={handleTest}>Test</button>
    </div>
  )
}
