import React from "react"
import { Container, Row } from "reactstrap"
import { Element } from "react-scroll"

import { Col } from "../bases/Layout"

const Sponsor = () => (
  <Container>
    <Row>
      <Col>
        <Element name='sponsor'>
          <h1>Sponsor</h1>
        </Element>
      </Col>
    </Row>
  </Container>
)

export default Sponsor
