import React, { Fragment } from "react"
import styled from "styled-components"
import {
  Input,
  CardImg,
  CardBody as DefaultCardbody
} from "reactstrap"

import { CardSubmit } from "../bases/Layout"
import { FONT_SIZE } from "../bases/constant"

const CardBody = styled(DefaultCardbody)`
  p, ol {
    text-indent: 0;
    font-size: ${FONT_SIZE.mini};
  }
`

const CardContent = () => (
  <Fragment>
    <p>
      <b>Brown Bag The Fourth</b> เป็นงานสัมมนาเล็กๆของเด็กไอทีบางมด ซึ่งในครั้งนี้เปิดโอกาสให้กับทุกๆคนได้
      เข้ามาแชร์ประสบการณ์ให้กับน้องๆ ว่าที่นักศึกษา SIT กันนะครับ..
    </p>
    <p>
      โดยที่งาน Brown Bag ของพวกเรามีเอกลักษณ์เล็กน้อยว่า <br />
      " ผู้เข้าร่วมงานรวมถึง Speaker ทุกท่านจะต้องเตรียมขนมมาเพื่อแลกเปลี่ยนกันภายในงานคนละ 1 ชิ้น :) "
    </p>
    <h5>
      ข้อกำหนดของงาน :
    </h5>
    <ol>
      <li> ไม่จำกัดหัวข้อ และ/หรือ เรื่องที่จะนำเสนอ </li>
      <li> จะต้องให้ข้อมูลที่ไม่ผิดต่อกฎหมาย ส่งเสริมจริยธรรม และจรรยาบรรณที่ดี </li>
      <li> ห้ามนำเสนอเนื้อหาที่พาดพิง เสียดสี สถาบันชาติ ศาสนา และพระมหากษัตริย์ ห้องเรียน Train 1 - 5 สามารถต่อ Projector ได้ด้วยสาย VGA </li>
    </ol>
    <p>
      วันที่ 7 สิงหาคม 2561 เวลา 13.00 เป็นต้นไป <br />
      ณ อาคารเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี.
    </p>
  </Fragment>
)

const Form = () => (
  <Fragment>
      ชื่อหัวข้อที่ต้องการพูดภายในงาน:
      * มีเวลาในการพูดทั้งหมด 30 นาที
    <Input />
      กรุณาอธิบายสั้นๆเกี่ยวกับหัวข้อที่คุณต้องการจะแชร์:
    <Input />
      เบอร์โทรศัพท์:
      เพื่อทำการติดต่อประสานงานในกรณีจำเป็น
    <Input />
    <button>ส่งหัวข้อ</button>
  </Fragment>
)

const SpeakerForm = () => (
  <CardSubmit size={6} offset={3}>
    <CardImg src='static/images/IMG_3966.JPG' />
    <CardBody>
      <CardContent />
      <Form />
      ขอบคุณที่ร่วมส่งต่อหัวข้อดีๆ ด้วยกัน :) <br />
      หากมีข้อสงสัยสอบถามในแฟนเพจได้เลย แล้วเจอกันวันที่ 7 สิงหาครับ
    </CardBody>
  </CardSubmit>
)

export default SpeakerForm
