import React, { Component } from "react"
import styled from "styled-components"
import {
  Container,
  Row,
  Card as DefaultCard,
  CardBody,
  CardImg
} from "reactstrap"

import { COLOR } from "../bases/constant"
import { Col } from "../bases/Layout"
import { FacebookButton } from "../bases/Button"

const Card = styled(DefaultCard)`
  color: ${COLOR.highlight};
`

export default class Login extends Component {
  render () {
    const { login } = this.props
    return (
      <Container>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <Card>
              <CardImg width='100%' src='static/images/brownbag-last.gif' />
              <CardBody className='text-center' >
                <h2>To be a <b><u>Speaker</u></b>!</h2>
                <h4>To Submit a Topic,<br />Please Login with Facebook.</h4>
                <FacebookButton onClick={login}>
                  Login with Facebook
                </FacebookButton>
                <h6>#brownbag #brownbag4</h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
