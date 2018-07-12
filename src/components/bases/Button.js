import { Button } from "reactstrap"
import styled from "styled-components"

import { FONT_SIZE, COLOR, MARGIN, PADDING } from "./constant"

const ButtonPrimary = styled(Button)`
  border-radius: 0px;
  background: transparent;
  line-height: 1.3;
  margin: ${MARGIN.small};
  font-size: ${FONT_SIZE.normal};
  color: ${COLOR.highlight};
  border: 3px solid ${COLOR.highlight};
  box-shadow: none !important;

  &:hover, &:active {
    background-color: ${COLOR.highlight} !important;
    color: ${COLOR.fontPrimary} !important;
    border: 3px solid ${COLOR.highlight} !important;
  }
  &:active {
    background-color: ${COLOR.highlightLighter} !important;
  }
`

const ButtonPrimaryInverted = styled(ButtonPrimary)`
  background-color: ${COLOR.highlight} !important;
  color: ${COLOR.fontPrimary} !important;
  border: 3px solid ${COLOR.highlight} !important;
`

const FacebookButton = styled.button`
  background-color: ${COLOR.facebook};
  color: ${COLOR.fontPrimary};
  font-size: ${FONT_SIZE.mini};
  cursor: pointer;
  border: none;
  padding: 0.3em 1em;
  border-radius: 8px;
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
`

const SubmitButton = styled(ButtonPrimaryInverted)`
  font-size: ${FONT_SIZE.mini};
  margin: 1em 0;
`

const LogoutButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZE.mini};
  width: 100%;
  margin: 0;
`

export default ButtonPrimary
export {
  ButtonPrimaryInverted,
  FacebookButton,
  SubmitButton,
  LogoutButton
}
