import React from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"

import { COLOR } from "./constant"
import { Fluid, Col } from "./Layout"

const LogoImage = styled.img`
  max-height: 60px;
  cursor: pointer;
`

const Logo = ({ href, src }) => (
  <a href={href} target='_blank'>
    <LogoImage src={src} />
  </a>
)

const FooterCol = ({ children }) => (
  <Col lg='2' className='text-center py-3'>
    { children }
  </Col>
)

const Footer = () => (
  <Fluid
    className='py-3'
    bgColor={COLOR.primary}
    color={COLOR.fontPrimary}
  >
    <Container>
      <Row className='d-flex justify-content-between'>
        <FooterCol>
          <h4>Brown Bag</h4>
          <h6>The Fourth</h6>
        </FooterCol>
        <FooterCol>
          <h6>Event Organizer by</h6>
          <Logo
            href='https://www.facebook.com/alchemistitbangmod/'
            src='static/images/alchemist.png'
          />
        </FooterCol>
        <FooterCol>
          <h5>CONNECT WITH US</h5>
          <Logo
            href='https://www.facebook.com/BrownBagSITKMUTT/'
            src='static/images/fbicon.png'
          />
          <br />
          <a href='mailto:alchemist@sit.kmutt.ac.th'>alchemist@sit.kmutt.ac.th</a>
        </FooterCol>
      </Row>
    </Container>
  </Fluid>
)
export default Footer
