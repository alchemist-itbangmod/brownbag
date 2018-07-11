import React from "react"
import styled from "styled-components"
import { Row } from "reactstrap"
import Link from "gatsby-link"

import { COLOR, FLEX, FONT_SIZE } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"
import { ButtonPrimaryInverted as Button } from "../bases/Button"

const HeroCol = styled(Col)`
  min-height: 75vh;
`

const HeroOverlay = HeroCol.extend`
  background-image: url("static/images/IMG_3966.JPG");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`

const HeroSection = HeroCol.extend`
  margin-top: -75vh;
  background-color: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
`

const HeaderHero = styled.h1`
  font-size: ${FONT_SIZE.hero};
  margin-bottom: 0;
`

const SubHeaderHero = styled.h3`
  font-size: ${FONT_SIZE.header};
  margin-top: 0;
  margin-bottom: 1em;
`

const Description = ({ children }) => (
  <h4><strong>{children}</strong></h4>
)

const Hero = () => (
  <Fluid>
    <Row>
      <HeroOverlay />
      <HeroSection className={FLEX.center} >
        <HeaderHero>Brown Bag</HeaderHero>
        <SubHeaderHero>The Fourth</SubHeaderHero>
        <Description>7 August 2018, 13.00 PM - 17.00 PM</Description>
        <Description>SIT Building ( Train 1 - 5 ) , KMUTT</Description>
        <h5 className='mt-4 text-center'>" ไม่ว่าคุณจะรู้จักไอทีหรือไม่ มาร่วมแบ่งขนม ผสมความรู้กันใน Brown Bag The Fourth "</h5>
        <Link to='/submit'>
          <Button>Submit Topic</Button>
        </Link>
      </HeroSection>
    </Row>
  </Fluid>
)

export default Hero
