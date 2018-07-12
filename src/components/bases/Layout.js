import "bootstrap/dist/css/bootstrap.min.css"

import React, { Component, Fragment } from "react"
import styled from "styled-components"
import {
  Container as DefaultContainer,
  Col as DefaultCol,
  Card as DefaultCard
} from "reactstrap"

import { COLOR } from "./constant"
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

const CardSubmit = ({ children, size, offset }) => (
  <Col md={{ size: 6, offset: 3 }}>
    <Card>
      {children}
    </Card>
  </Col>
)

export {
  Fluid,
  Col,
  CardSubmit
}
