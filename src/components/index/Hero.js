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

const HeroFluid = styled(Fluid)`
  padding-top: 8vh;

  @media (max-width: 320px) {
    padding-top: 13vh;
  }

  @media (max-width: 375px)
  and (max-height: 667px) {
    padding-top: 11vh;
  }

  @media (max-width: 768px) {
    padding-top: 7vh;
  }

  @media (max-width: 1024px) {
    padding-top: 5.5vh;
  }
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

  @media (max-width: 360px) {
    h3 {
      margin: 0;
    }
    h4 {
      font-size: 1.2em;
    }
    h5 {
      font-size: 1em;
    }
  }
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
  <HeroFluid>
    <Row>
      <HeroOverlay />
      <HeroSection className={FLEX.center} >
        <HeaderHero>{"Brown Bag 4.0"}</HeaderHero>
        <Description>{"7 August 2018, 13.00 PM - 17.00 PM"}</Description>
        <Description>{"SIT Building ( Train 1 - 5 ) , KMUTT"}</Description>
        <h5 className='mt-4 text-center'>
          {`" ไม่ว่าคุณจะรู้จักไอทีหรือไม่ มาร่วมแบ่งขนม ผสมความรู้กันใน Brown Bag 4.0 "`}
        </h5>
        <Link to='/submit'>
          <Button>Submit Topic</Button>
        </Link>
      </HeroSection>
    </Row>
  </HeroFluid>
)

export default Hero
