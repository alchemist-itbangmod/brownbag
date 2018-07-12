import React, { Fragment } from "react"
import styled from "styled-components"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import { COLOR, FLEX } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"

const sponsors = [
  "/static/images/kmutt.svg",
  "/static/images/sit.svg"
]

const Image = styled.img`
  max-width: 250px;
  max-height: 150px;
`

const SponsorList = ({ sponsors }) => (
  <Fragment>
    {
      sponsors.map(sponsor => <Image key={sponsor} src={sponsor} />)
    }
  </Fragment>
)

SponsorList.defaultProps = {
  sponsors
}

const Sponsor = () => (
  <Fluid bgcolor={COLOR.secondary}>
    <Container>
      <Element className='row' name='sponsor'>
        <Col className={`py-5 ${FLEX.center}`}>
          <h1>Sponsor</h1>
          <SponsorList />
        </Col>
      </Element>
    </Container>
  </Fluid>
)

export default Sponsor
