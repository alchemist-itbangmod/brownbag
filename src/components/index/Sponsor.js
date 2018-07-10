import React, { Fragment } from "react"
import styled from "styled-components"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import { COLOR } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"

const sponsors = [
  "static/images/kmutt.svg",
  "static/images/sit.svg"
]

const Image = styled.img`
  max-width: 250px;
  max-height: 150px;
`

const SponsorCol = styled(Col)`
`
SponsorCol.defaultProps = {
  className: "py-5 d-flex flex-column justify-content-center align-items-center"
}

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
  <Fluid bgColor={COLOR.secondary}>
    <Container>
      <Element className='row' name='sponsor'>
        <SponsorCol>
          <h1>Sponsor</h1>
          <SponsorList />
        </SponsorCol>
      </Element>
    </Container>
  </Fluid>
)

export default Sponsor
