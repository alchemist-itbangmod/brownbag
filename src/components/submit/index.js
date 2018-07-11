import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../bases/Layout"
import { FONT_SIZE, FLEX, COLOR } from "../bases/constant"

const heightSize = "75vh"

const SubmitOverlay = styled.div`
  background: url('static/images/IMG_3967.JPG');
  height: ${heightSize};
`

const SubmitSection = styled.div`
  font-size: ${FONT_SIZE.hero};
  background: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
  height: ${heightSize};
  margin-top: -${heightSize};
`

export default class Submit extends Component {
  render () {
    return (
      <Layout>
        <SubmitOverlay />
        <SubmitSection className={FLEX.center}>
          ยังไม่เปิดรับ Topic
        </SubmitSection>
      </Layout>
    )
  }
}
