import React, { Component, Fragment } from "react"
import {
  Nav as DefaultNav,
  Navbar as DefaultNavbar,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap"

import styled from "styled-components"
import LinkPage from "gatsby-link"
import { Link as DefaultLink } from "react-scroll"

import { COLOR, FONT_SIZE } from "../bases/constant"

const menus = [
  {name: "What's", link: "whatis"},
  {name: "About", link: "about"},
  {name: "Join with Us", link: "joinwithus"},
  {name: "Timetable", link: "timetable"},
  {name: "Sponsor", link: "sponsor"}
]

const Brand = styled(LinkPage)`
  font-size: ${FONT_SIZE.large};
  color: ${COLOR.fontPrimary} !important;
`

Brand.defaultProps = {
  className: "navbar-brand",
  to: "/"
}

const Link = styled(DefaultLink)`
  cursor: pointer;
`

const Toggler = styled(NavbarToggler)`
  border-color: ${COLOR.fontPrimary} !important;
  color: ${COLOR.fontPrimary} !important;
  fill: ${COLOR.fontPrimary} !important;
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
            offset={-40}
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

const Nav = styled(DefaultNav)`
  font-size: ${FONT_SIZE.normal};
  color: ${COLOR.fontPrimary};
  background-color: ${COLOR.primary};
`

const Navbar = styled(DefaultNavbar)`
  color: ${COLOR.fontPrimary};
  background-color: ${COLOR.primary};
`

export default class CustomNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <Navbar dark expand='md' className='fixed-top'>
        <Brand>BrownBag</Brand>
        <Toggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavList />
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
