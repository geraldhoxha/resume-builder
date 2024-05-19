import { Button, Col, Row } from "antd";
import { CarouselMode } from "../../types";
import {useEffect, useState} from 'react'
import { useMutation } from "@apollo/client";
import { UserLogin } from "../../../generated/Models/model";


export function First({mainMode}: {mainMode: CarouselMode}){

  const [user, setUser] = useState("")
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
        <Col span={12}>Text2</Col>
      </Row>
    </>
  )
}
