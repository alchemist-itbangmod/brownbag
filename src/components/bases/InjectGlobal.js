import { injectGlobal } from "styled-components"
import { FONT_SIZE, COLOR } from "./constant"

export default () => injectGlobal`
  @font-face {
    font-family: "CSChatThai";
    src: url("static/fonts/CSChatThai.ttf");
  }
  html, body {
    font-family: "CSChatThai", serif !important;
    font-size: 18px;
    overflow-x: hidden;
  }
  body {
    background: url('static/images/IMG_3917.JPG');
    background-size: cover;
    background-attachment: fixed;
  }

  h1 {
    font-size: ${FONT_SIZE.header};
    font-weight: bold;
  }
  p {
    text-indent: 1.5em;
    font-size: ${FONT_SIZE.normal};
  }
  a {
    color: ${COLOR.fontPrimary};
  }
`
