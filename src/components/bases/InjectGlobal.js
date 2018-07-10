import { injectGlobal } from "styled-components"
import { FONT_SIZE, COLOR } from "../bases/constant"

export default () => injectGlobal`
  @font-face {
    font-family: "CSChatThai";
    src: url("/static/fonts/CSChatThai.ttf");
  }
  html, body {
    font-family: "CSChatThai", serif !important;
    font-size: 18px;
    overflow-x: hidden;
  }

  h1 {
    font-size: ${FONT_SIZE.header};
  }
  p {
    text-indent: 1.5em;
    font-size: ${FONT_SIZE.normal};
  }
  a {
    color: ${COLOR.fontPrimary};
  }
`
