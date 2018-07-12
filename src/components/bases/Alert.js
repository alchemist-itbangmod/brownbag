import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Alert as DefaultAlert } from "reactstrap"

import { COLOR, FONT_SIZE, FLEX } from "../bases/constant"

const AlertWrapper = styled.div`
  transition: 0.5s;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5000;
  top: 0;
  background: rgba(0, 0, 0, 0.5);

  visibility: ${({isOpen}) => isOpen ? "visible" : "hidden"} !important;
  opacity: ${({isOpen}) => isOpen ? "1" : "0"} !important;
  transition: visibility .5s, opacity .5s linear;
`

const AlertPopUp = styled(DefaultAlert)`
  font-size: ${FONT_SIZE.small};
  z-index: 100;
  width: 60%;
  color: ${COLOR.fontPrimary};
  background-color: #00ad27;
  @media (max-width: 800px) {
    width: 100%;
  }
`
AlertPopUp.defaultProps = {
  color: "success",
  isOpen: true
}

const Alert = ({ children, isOpen }) => (
  <AlertWrapper
    isOpen={isOpen}
    className={`${FLEX.center} text-center`}
  >
    <AlertPopUp>
      {children}
      {console.log(isOpen)}
    </AlertPopUp>
  </AlertWrapper>
)

Alert.PropTypes = {
  isOpen: PropTypes.bool
}

export default Alert
