import React from "react"
import { Container, Row } from "reactstrap"
import { Element } from "react-scroll"

import { Col } from "../bases/Layout"

// eslint-disable-next-line
const sessions = [{"time":"13:00 - 13:30","session":"ลงทะเบียน"},{"time":"13:30 - 14:00","session":"พิธีเปิดโครงการ"},{"time":"14:00 - 14:35","session":"Session I"},{"time":"14:40 - 15:15","session":"Session II"},{"time":"15:15 - 15:30","session":"พักรับประทานอาหารว่าง และแลกเปลี่ยนกันตามอัธยาศัย"},{"time":"15:30 - 16:05","session":"Session III"},{"time":"16:10 - 16:30","session":"สรุปงานและแลกเปลี่ยนกันตามอัธยาศัย"}]

const Timetable = () => (
  <Container>
    <Row>
      <Col>
        <Element name='timetable'>
          <h1>Timetable</h1>
          <article>
            {
              sessions.map(({session, time}) => <div key={`${time}${session}`}>{`${time} ${session}`}</div>)
            }
          </article>
        </Element>
      </Col>
    </Row>
  </Container>
)

export default Timetable
