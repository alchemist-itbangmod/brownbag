import "bootstrap/dist/css/bootstrap.min.css"

import React, { Component, Fragment } from "react"
import styled from "styled-components"
import {
  Container as DefaultContainer,
  Col as DefaultCol,
  Card as DefaultCard
} from "reactstrap"

import { FONT_SIZE, COLOR } from "./constant"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <Fragment>
        <Navbar />
        { children }
        <Footer />
      </Fragment>
    )
  }
}

const Fluid = styled(DefaultContainer)`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

Fluid.defaultProps = {
  fluid: true,
  bgcolor: "#fff",
  color: "#000"
}

const Col = props => <DefaultCol {...props} />

Col.defaultProps = {
  xs: "12"
}

const Card = styled(DefaultCard)`
  color: ${COLOR.highlight};
`

const CardSubmit = ({ children, size, offset, ...props }) => (
  <Col md={{ size: 6, offset: 3 }} {...props}>
    <Card>
      {children}
    </Card>
  </Col>
)

export const SubmitSection = styled.div`
  font-size: ${FONT_SIZE.hero};
  background: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
  min-height: 85vh;

`

export {
  Fluid,
  Col,
  CardSubmit
}
