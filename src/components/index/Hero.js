import React from "react"
import styled from "styled-components"
import { Row } from "reactstrap"

import { COLOR } from "../bases/constant"
import { Col } from "../bases/Layout"

const HeroCol = styled(Col)`
  min-height: 75vh;
`

const HeroOverlay = HeroCol.extend`
  background-image: url("/static/images/IMG_3966.JPG");
  background-attachment: fixed;
`
const HeroSection = HeroCol.extend`
  margin-top: -75vh;
  background-color: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
`

const Hero = () => (
  <Row>
    <HeroOverlay />
    <HeroSection className='d-flex flex-column justify-content-center align-items-center' >
      <h1>Brown Bag</h1>
      <h3>The Fourth</h3>
    </HeroSection>
  </Row>
)

export default Hero
