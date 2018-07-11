import React, { Component } from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"

import windowChecker from "../../tools/windowChecker"
import { auth, provider } from "../../tools/firebaseHelper"

import Login from "./Login"
import SpeakerForm from "./SpeakerForm"
import Layout from "../bases/Layout"
import { FONT_SIZE, FLEX, COLOR } from "../bases/constant"

const SubmitSection = styled.div`
  font-size: ${FONT_SIZE.hero};
  background: ${COLOR.primaryFade};
  color: ${COLOR.fontPrimary};
  min-height: 85vh;

`

export default class Submit extends Component {
  state = {
    user: null,
    topic: null
  }
  componentWillMount = () => {
    const user = windowChecker() && JSON.parse(window.localStorage.getItem("user"))
    console.log(user)
    if (user) {
      this.setState({ user })
    }
  }

  login = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        windowChecker() && window.localStorage.setItem("user", JSON.stringify(user))
        this.setState({ user })
      })
  }

  logout = () => {
    auth().signOut().then(() => {
      window.localStorage.clear()
      this.setState({ user: null })
    })
  }

  handleSubmit = () => {

  }

  submit = () => {

  }
  render () {
    const { user } = this.state
    return (
      <Layout>
        <SubmitSection className={`py-5 ${FLEX.center}`}>
          <Container>
            <Row className='py-5'>
              { !user ? <Login login={this.login} /> : <SpeakerForm /> }
            </Row>
          </Container>
        </SubmitSection>
      </Layout>
    )
  }
}
