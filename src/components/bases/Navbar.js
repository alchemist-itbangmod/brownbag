import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Nav as DefaultNav, NavItem } from "reactstrap"
import { Link as DefaultLink } from "react-scroll"

import { COLOR, FONT_SIZE } from "../bases/constant"

const menus = [
  {name: "What's", link: "whatis"},
  {name: "About", link: "about"},
  {name: "Join with Us", link: "joinwithus"},
  {name: "Timetable", link: "timetable"},
  {name: "Sponsor", link: "sponsor"}
]

const Nav = styled(DefaultNav)`
  font-size: ${FONT_SIZE.normal};
  color: ${COLOR.fontPrimary};
  background-color: ${COLOR.primary};
`

Nav.defaultProps = {
  className: "sticky-top navbar-expand-lg py-2 px-3 justify-content-center"
}

const Link = styled(DefaultLink)`
  cursor: pointer;
`

Link.defaultProps = {
  className: "mx-3"
}

const NavList = ({ menus }) => (
  <Fragment>
    {
      menus.map(({name, link}) =>
        <NavItem key={`nav-item-${name}-${link}`}>
          <Link
            to={link}
            activeClass='active'
            spy
            smooth
            duration={700}
            // onSetActive={this.handleSetActive}
          >
            {name}
          </Link>
        </NavItem>
      )
    }
  </Fragment>
)

NavList.defaultProps = {
  menus
}

class Navbar extends Component {
  render () {
    return (
      <Nav>
        <NavList />
      </Nav>
    )
  }
}

export default Navbar
