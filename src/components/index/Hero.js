import React from "react"
import { Row, Col } from "reactstrap"

const HeroColumn = ({ children }) => (
  <Col xs={12} md={6}>
    {children}
  </Col>
)

const Hero = () => (
  <Row>
    <HeroColumn>
    Bag
    </HeroColumn>
    <HeroColumn>
    BrownBag 4.0
    </HeroColumn>
  </Row>
)

export default Hero
