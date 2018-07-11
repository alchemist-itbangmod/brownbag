import "bootstrap/dist/css/bootstrap.min.css"

import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Container as DefaultContainer, Col as DefaultCol } from "reactstrap"

import injectGlobal from "./InjectGlobal"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class Layout extends Component {
  componentWillMount = () => {
    injectGlobal()
  }

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

export {
  Fluid,
  Col
}
