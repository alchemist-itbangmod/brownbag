import React, { Fragment } from "react"
import styled from "styled-components"
import {

  Form,
  FormGroup,
  Input,
  Label as DefaultLabel,
  CardImg,
  CardBody as DefaultCardbody
} from "reactstrap"

import { CardSubmit } from "../bases/Layout"
import { SubmitButton, LogoutButton } from "../bases/Button"
import { FONT_SIZE } from "../bases/constant"

const Label = styled(DefaultLabel)`
  font-size: ${FONT_SIZE.mini};
`

const CardBody = styled(DefaultCardbody)`
  p, ol {
    text-indent: 0;
    font-size: ${FONT_SIZE.mini};

    a {
      color: #007bff;
    }
  }
  ol {
    padding: 0 1em;
  }
  span {
    font-size: ${FONT_SIZE.small};
    text-decoration: underline;
    font-weight: bold;
  }
  .form-group {
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const CardContent = () => (
  <Fragment>
    <h3><b>Brown Bag 4.0</b></h3>
    <p>
      เป็นงานสัมมนาเล็กๆของเด็กไอทีบางมด ซึ่งในครั้งนี้เปิดโอกาสให้กับทุกๆคนได้
      เข้ามาแชร์ประสบการณ์ให้กับน้องๆ ว่าที่นักศึกษา SIT กันนะครับ..
    </p>
    <p>
      โดยที่งาน Brown Bag ของพวกเรามีเอกลักษณ์เล็กน้อยว่า <br />
    </p>
    <blockquote className='blockquote'>
      "<u> ผู้เข้าร่วมงานรวมถึง Speaker ทุกท่านจะต้องเตรียมขนมมาเพื่อแลกเปลี่ยนกันภายในงานคนละ 1 ชิ้น :) </u>"
    </blockquote>
    <h5>
      <b>ข้อกำหนดของงาน :</b>
    </h5>
    <ol>
      <li> ไม่จำกัดหัวข้อ และ/หรือ เรื่องที่จะนำเสนอ </li>
      <li> จะต้องให้ข้อมูลที่ไม่ผิดต่อกฎหมาย ส่งเสริมจริยธรรม และจรรยาบรรณที่ดี </li>
      <li> ห้ามนำเสนอเนื้อหาที่พาดพิง เสียดสี สถาบันชาติ ศาสนา และพระมหากษัตริย์</li>
      <li> ใช้ห้องเรียน Train 1 - 5 สามารถต่อ Projector ได้ด้วยสาย VGA</li>
    </ol>
    <hr />
    <p>
      <b>วันที่ 7 สิงหาคม 2561 เวลา 13.00 เป็นต้นไป</b> <br />
      <b>ณ อาคารเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี.</b>
    </p>
  </Fragment>
)

const SubmitForm = ({ topic, handleFields, submit }) => (
  <Form onSubmit={submit}>
    <FormGroup>
      <Label for='studentId'>
        รหัสนักศึกษา <b>* </b>
      </Label>
      <Input
        id='studentId'
        pattern='^[0-9]{11}'
        value={topic.studentId}
        onChange={e => handleFields("topic", { ...topic, studentId: e.target.value })}
      />
    </FormGroup>
    <FormGroup>
      <Label for='topic'>
        ชื่อหัวข้อที่ต้องการพูดภายในงาน <b>* </b>
        <span>มีเวลาในการพูดทั้งหมด 30 นาที</span>
      </Label>
      <Input
        id='topic'
        value={topic.topicName}
        onChange={e => handleFields("topic", { ...topic, topicName: e.target.value })}
        required
      />
    </FormGroup>
    <FormGroup>
      <Label for='description'>
        กรุณาอธิบายสั้นๆเกี่ยวกับหัวข้อที่คุณต้องการจะแชร์ <b>* </b>
      </Label>
      <Input
        id='description'
        type='textarea'
        value={topic.description}
        onChange={e => handleFields("topic", { ...topic, description: e.target.value })}
        required
      />
    </FormGroup>
    <FormGroup>
      <Label for='telno'>
        เบอร์โทรศัพท์ <b>* </b>
        <span>เพื่อทำการติดต่อประสานงานในกรณีจำเป็น</span>
      </Label>
      <Input
        id='telno'
        pattern='^[0]{1}[0-9]{9}'
        placeholder={"0991234455"}
        value={topic.telno}
        onChange={e => handleFields("topic", { ...topic, telno: e.target.value })}
        required
      />
    </FormGroup>
    {
      <FormGroup>
        <SubmitButton type='submit'>{ !(topic !== "" && topic.displayName) ? "ส่งหัวข้อ" : "แก้ไขข้อมูล"}</SubmitButton>
      </FormGroup>
    }
  </Form>
)

const Welcome = ({displayName}) => (
  <Fragment>
    <h3 className='text-center mt-4'>สวัสดีครับ, คุณ <b>{displayName}</b></h3>
  </Fragment>
)

const Thanks = () => (
  <p className='text-center'>
    ขอบคุณที่ร่วมส่งต่อหัวข้อดีๆ ด้วยกัน<br />
    หากมีข้อสงสัยสอบถามใน <a href='https://www.facebook.com/BrownBagSITKMUTT/'>แฟนเพจ</a> ได้เลย<br />
    แล้วเจอกันวันที่ 7 สิงหา นะครับ
  </p>
)

const SpeakerForm = ({ user, topic, handleFields, submit, logout }) => (
  <CardSubmit>
    <CardImg src='static/images/IMG_3966.JPG' />
    <CardBody>
      <CardContent />
      <hr />
      <Welcome displayName={user.displayName} />
      <SubmitForm topic={topic} handleFields={handleFields} submit={submit} />
      <Thanks />
      <LogoutButton onClick={logout}> ออกจากระบบ </LogoutButton>
    </CardBody>
  </CardSubmit>
)

export default SpeakerForm
