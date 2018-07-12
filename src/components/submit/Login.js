import React from "react"
import styled from "styled-components"
import { CardBody, CardImg as DefaultCardImg } from "reactstrap"

import { CardSubmit } from "../bases/Layout"
import { FacebookButton } from "../bases/Button"

const CardImg = styled(DefaultCardImg)`
  width: 55%;
  margin: 0 auto;
`

const Login = ({ login }) => (
  <CardSubmit>
    <CardImg width='100%' src='/static/images/brownbag-last.gif' />
    <CardBody className='text-center' >
      <h2>To be a <b><u>Speaker</u></b>!</h2>
      <h5>
        สำหรับผู้ที่สนใจเข้ามาร่วมแชร์ประสบการณ์ไปกับเราที่ Brown Bag 4.0 <br />
        <b>กรุณาเข้าสู่ระบบด้วย Facebook</b>
      </h5>
      <FacebookButton onClick={login}>
        เข้าสู่ระบบด้วย Facebook
      </FacebookButton>
      <h6><b>#brownbag #brownbag4</b></h6>
    </CardBody>
  </CardSubmit>
)

export default Login
