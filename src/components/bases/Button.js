import { Button } from "reactstrap"
import styled from "styled-components"

import { FONT_SIZE, COLOR, MARGIN } from "./constant"

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

export default ButtonPrimary
export {
  ButtonPrimaryInverted
}
