import React from "react"
import { CardBody, CardImg } from "reactstrap"

import { CardSubmit } from "../bases/Layout"
import { FacebookButton } from "../bases/Button"

const Login = ({ login }) => (
  <CardSubmit size={4} offset={4}>
    <CardImg width='100%' src='static/images/brownbag-last.gif' />
    <CardBody className='text-center' >
      <h2>To be a <b><u>Speaker</u></b>!</h2>
      <h5>
        สำหรับผู้ที่สนใจเข้ามาร่วมแชร์ประสบการณ์ไปกับเราที่ Brown Bag 4.0 <br />
        กรุณาลงทะเบียนด้วย Facebook :D
      </h5>
      <FacebookButton onClick={login}>
        ลงทะเบียนด้วย Facebook
      </FacebookButton>
      <h6>#brownbag #brownbag4</h6>
    </CardBody>
  </CardSubmit>
)

export default Login
