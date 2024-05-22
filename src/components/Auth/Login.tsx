import { useLazyQuery, useMutation } from "@apollo/client"
import { useState } from "react"
import { ELTest, UserLogin } from "../../generated/Models/model"
import { Client, setTokens } from "../../tools/ApolloClient"
import { LoginToken } from "../types/user"



export function LoginUser() {

  const [userEmail, setUserEmail] = useState<string>("")
  const [userPass, setUserPass] = useState<string>("")
  // const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [loading, setLoaading] = useState<boolean>(false)
  const [login] = useMutation<LoginToken>(UserLogin, { client: Client, fetchPolicy: 'no-cache' })
  const [testthis] = useLazyQuery(ELTest)

  const handleSubmit = async () => {
    setLoaading(true)
    await login({ variables: { email: userEmail, password: userPass } }).then((resp) => {
      console.log("..>>>", resp.data?.auth.login.token)
      if (resp.data?.auth.login.token !== undefined) {
        const { accessToken, refreshToken } = resp.data.auth.login.token
        setTokens(accessToken, refreshToken)
      }
      setLoaading(false)
    })
      .catch(err => {
        console.log("zz", err)
      })
      .finally(() => setLoaading(false))
  }
  const handleTest = async () =>{
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
