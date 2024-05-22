import { Button, Col, Row } from "antd";
import { CarouselMode } from "../../types";
import {useEffect, useState} from 'react'
import { useMutation } from "@apollo/client";
import { UserLogin } from "../../../generated/Models/model";


export function First({mainMode}: {mainMode: CarouselMode}){

  const [user, setUser] = useState({accessToken: "", refreshToken: ""})
  const [uLogin] = useMutation(UserLogin)

  useEffect(()=>{
    console.log("UserBro", user)
  },[user])

  // TODO: Remove demo user
  function userLogin(){
    uLogin({variables: {email: "g@g.g", password: "12345"}}).then(resp =>
      setUser(resp.data.auth.login.token)
    ).catch(err => console.log(">>>>", err))
  }
  async function refresh(){
    const k = fetch("http://localhost:8080/refresh",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "refreshToken": user.refreshToken,
        "accessToken": user.accessToken,
      })
    }).then(u => console.log("U>", u.json())).catch(err => console.log("...", err))

    console.log("Done ?",await k)
  }
  const mainText = (mode: CarouselMode) => {
    switch (mode) {
      case 'dark':
        return "Dark"
      case 'light':
        return "Light"
      default:
        return "Default"
    }
  }

  return (
    <>
      <Row>
        <Col span={8}>1</Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
      <Row>
        <Col span={24}>{mainText(mainMode)}</Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button onClick={userLogin}>Login</Button>
        </Col>
        <Col span={12}>
          <Button onClick={refresh}>Refresh</Button>
        </Col>
      </Row>
    </>
  )
}
