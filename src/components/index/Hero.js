import React from "react"
import styled from "styled-components"
import { Row } from "reactstrap"
import Link from "gatsby-link"

import { COLOR, FLEX } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"
import { ButtonPrimaryInverted as Button } from "../bases/Button"

const HeroCol = styled(Col)`
  min-height: 75vh;
`

const HeroOverlay = HeroCol.extend`
  background-image: url("static/images/IMG_3966.JPG");
  background-attachment: fixed;
`

const HeroSection = HeroCol.extend`
  margin-top: -75vh;
  background-color: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
`

const Hero = () => (
  <Fluid>
    <Row>
      <HeroOverlay />
      <HeroSection className={FLEX.center} >
        <h1>Brown Bag</h1>
        <h3>The Fourth</h3>
        <h5>" ไม่ว่าคุณจะรู้จักไอทีหรือไม่ มาร่วมแบ่งขนม ผสมความรู้กันใน Brown Bag The Fourth "</h5>
        <Link to='/submit'>
          <Button>Submit Topic</Button>
        </Link>
      </HeroSection>
    </Row>
  </Fluid>
)

export default Hero
