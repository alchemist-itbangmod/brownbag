import React from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"

import { COLOR } from "./constant"
import { Col } from "./Layout"

const Logo = styled.img`
  max-height: 60px;
  cursor: pointer;
`

const FooterContainer = styled(Container)`
  background-color: ${COLOR.primary};
  color: ${COLOR.fontPrimary};
`

FooterContainer.defaultProps = {
  className: "py-4"
}

const Footer = () => (
  <FooterContainer fluid>
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col lg='2' className='text-center'>
          <h4>Brown Bag</h4>
          <h6>The Fourth</h6>
        </Col>
        <Col lg='2' className='text-center'>
          <h6>Event Organizer by</h6>
          <a href='https://www.facebook.com/alchemistitbangmod/' target='_blank'>
            <Logo src='/static/images/alchemist.png' />
          </a>
        </Col>
        <Col lg='2' className='text-center'>
          <h5>CONNECT WITH US</h5>
          <a href='https://www.facebook.com/alchemistitbangmod/' target='_blank'>
            <Logo src='/static/images/fbicon.png' />
          </a>
          <br />
          <a href='mailto:alchemist@sit.kmutt.ac.th'>alchemist@sit.kmutt.ac.th</a>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
)
export default Footer
