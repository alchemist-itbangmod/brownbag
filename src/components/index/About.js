import React from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"
import { Element } from "react-scroll"
import { Col } from "../bases/Layout"

const InformationCol = styled(Col)`
`

InformationCol.defaultProps = {
  className: "py-5"
}

const InformationWrapper = ({ name, children }) => (
  <Element name={name}>
    <InformationCol>
      {children}
    </InformationCol>
  </Element>
)

const What = () => (
  <InformationWrapper name='whatis'>
    <h1>WHAT IS BROWN BAG?</h1>
    <p>
      ครั้งนี้เราขอเดินหน้าขึ้นอีกก้าว เชิญชวน เพื่อนๆ พี่ๆ น้องๆ ญาติสนิทมิตรสหายของเด็กๆ ไอทีบางมด
      ไม่ว่าคุณจะอยู่ภาคไหน ไม่ว่าคุณจะรู้จักไอทีหรือไม่ มาร่วมแบ่งขนม ผสมความรู้กันใน Brown Bag #3.0
    </p>
  </InformationWrapper>
)

const Objective = () => (
  <InformationWrapper name='objective'>
    <h1>วัตถุประสงค์ของงาน</h1>
    <p>
      เพื่อให้นักศึกษารู้จักการแบ่งปันด้วยการถ่ายทอดความรู้ ประสบการณ์ในด้านที่สนใจให้แก่ผู้อื่น
      เพื่อเป็นการส่งเสริมให้นักศึกษามีการแลกเปลี่ยนความรู้ ทำความรู้จักกันระหว่างภาควิชา และกลุ่มนักศึกษาที่สนใจในด้านเดียวกัน
      เพื่อสร้างเสริมทัศคติที่ดีต่อเทคโนโลยีสารสนเทศให้กับนักศึกษาภายในมหาวิทยาลัย และผู้สนใจ
    </p>
  </InformationWrapper>
)

const About = () => (
  <InformationWrapper name='about'>
    <h1>Brown Bag มาจากไหน?</h1>
    <p>
      Brown Bag มาจากปกติแล้วคนอเมริกาชอบใช้เจ้า ถุงน้ำตาล นี่แหละ เป็นพวกใส่อาหารสำเร็จรูป ที่หาได้จาก Supermarket หรือ
      โรงอาหารต่างๆ จะเอามาไว้ใส่อาหารเพื่อมานั่งกิน และพูดคุยสนทนากัน เอาง่ายๆ เหมือนคนไทยเราอะครับ คนต่างจังหวัดเวลาเรา
      ทำไร่ทำนาหรือทำสวนก็จะห่อข้าวไปกินแล้วมานั่งคุยกัน ทางเราก็ได้นำชื่อเจ้าถุงกระดาษสีน้ำตาลนี่แหละ มาเป็นชื่อสำหรับการนั่งคุยกัน
      สนทนากันแบบเป็นกันเอง ไม่เครียด อยากคุยอะไรก็คุย แบบไม่เป็นทางการ
    </p>
  </InformationWrapper>
)

const Style = () => (
  <InformationWrapper name='style'>
    <h1>รูปแบบงานเป็นอย่างไร?</h1>
    <p>
      เป็นการพูดคุยและแบ่งปันประสบการณ์อย่างเป็นกันเอง โดยจะมีการนำเสนอหัวข้อที่สนใจ จากผู้ที่ต้องการมาแบ่งปันประสบการณ์
      ภายในงาน ผู้เข้าร่วมงานทุกๆคนจะช่วยกันเลือกเรื่องที่สนใจ เรื่องที่ถูกเลือกนั้นจะได้รับการแบ่งปันภายในงาน ผู้เข้าร่วมงานทุกๆ คน
      จะต้องเตรียมขนมกันมาคนละ 1 ชิ้น เพื่อนำมาแลกเปลี่ยนกันภายในงานเหมือนดั่งเช่น ความคิดเห็นและประสบการณ์ที่เรานำมาแลกเปลี่ยนกันภายในงาน
    </p>
  </InformationWrapper>
)

const Join = () => (
  <InformationWrapper name='joinwithus'>
    <h1>อยากแชร์ประสบการณ์ภายในงานต้องทำอย่างไร?</h1>
    <p>
      กรอกแบบฟอร์มมาได้เลยครับ Click! แต่จะมีข้อกำหนดสำหรับหัวข้อที่จะแชร์ภายในงานสักเล็กน้อยนะครับ
    </p>
  </InformationWrapper>
)

const Information = () => (
  <Container>
    <Row>
      <What />
      <Objective />
      <About />
      <Style />
      <Join />
    </Row>
  </Container>
)

export default Information
