import React, { Fragment } from "react"
import styled from "styled-components"
import { Row } from "reactstrap"
import { Element } from "react-scroll"

import { FONT_SIZE, COLOR, PADDING, MARGIN, FLEX } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"

const sessions = [
  {"time": "13:00 - 13:30", "session": "Register"},
  {"time": "13:30 - 14:00", "session": "Opening Ceremony"},
  {"time": "14:00 - 14:35", "session": "Session I"},
  {"time": "14:35 - 14:40", "session": "Move to Session II"},
  {"time": "14:40 - 15:15", "session": "Session II"},
  {"time": "15:15 - 15:30", "session": "Take a break and Talk together"},
  {"time": "15:30 - 16:05", "session": "Session III"},
  {"time": "16:05 - 16:10", "session": "Move to Closing Ceremony"},
  {"time": "16:10 - 17:00", "session": "Closing Ceremony"}
]

const SessionRow = styled(Row)`
  background-color: ${COLOR.primaryFade};
  font-size: ${FONT_SIZE.normal};
  padding: ${PADDING.small};
  margin-bottom: ${MARGIN.normal};
  width: 100%;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`

const SessionCard = ({session, time}) => (
  <SessionRow>
    <Col lg={3}>
      {time}
    </Col>
    <Col lg={9}>
      {session}
    </Col>
  </SessionRow>
)

const SessionList = ({ sessions }) => (
  <Fragment>
    {
      sessions.map(({session, time}) => (
        <SessionCard
          key={`${time}${session}`}
          session={session}
          time={time}
        />
      ))
    }
  </Fragment>
)

SessionList.defaultProps = {
  sessions
}

const TimetableContainer = styled(Fluid)`
  background-image: url('static/images/IMG_3952.JPG');
  background-attachment: fixed;
  background-size: cover;
  background-position: top left;

  @media (max-width: 667px) {
    background-position: 40%;
  }

  h1 {
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
  h1, div {
    color: ${COLOR.fontPrimary};
  }
`

TimetableContainer.defaultProps = {
  className: "px-0"
}

const Timetable = () => (
  <TimetableContainer>
    <Fluid
      bgcolor={COLOR.primaryFade}
      className='py-5'
    >
      <Element className='row' name='timetable'>
        <Col className='text-center'>
          <h1>Timetable</h1>
        </Col>
        <Col className={FLEX.center}>
          <SessionList />
        </Col>
      </Element>
    </Fluid>
  </TimetableContainer>
)

export default Timetable
