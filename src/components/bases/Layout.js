import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import { Container } from "reactstrap"

const Layout = ({ children }) => (
  <Container fluid>
    { children }
  </Container>
)

export default Layout
