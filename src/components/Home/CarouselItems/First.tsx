import { Button, Col, Row } from "antd";
import { CarouselMode } from "../../types";

export function First({ mainMode }: { mainMode: CarouselMode }) {

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
          <Button>Login</Button>
        </Col>
        <Col span={12}>
          <Button>Refresh</Button>
        </Col>
      </Row>
    </>
  )
}
