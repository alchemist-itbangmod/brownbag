import React from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"

import { COLOR } from "./constant"
import { Col } from "./Layout"

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
      <Row>
        <Col>
          Footer
        </Col>
      </Row>
    </Container>
  </FooterContainer>
)
export default Footer
