import "bootstrap/dist/css/bootstrap.min.css"

import React, { Component, Fragment } from "react"
import { Container, Col as DefaultCol } from "reactstrap"

import injectGlobal from "./InjectGlobal"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class Layout extends Component {
  componentWillMount = async () => {
    injectGlobal()
  }

  render () {
    const { children } = this.props
    return (
      <Fragment>
        <Navbar />
        <Container fluid>
          { children }
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

const Col = props => <DefaultCol {...props} />

Col.defaultProps = {
  xs: "12"
}

export {
  Col
}
