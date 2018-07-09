import { injectGlobal } from "styled-components"
import {FONT_SIZE} from "../bases/constant"

export default () => injectGlobal`
  @font-face {
    font-family: "CSChatThai";
    src: url("/static/fonts/CSChatThai.ttf");
  }
  html, body {
    font-family: "CSChatThai", serif !important;
    font-size: 18px;
  }

  h1 {
    font-size: ${FONT_SIZE.header}
  }
  p {
    font-size: ${FONT_SIZE.normal}
  }
`
