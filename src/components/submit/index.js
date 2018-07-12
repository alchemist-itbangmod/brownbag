import React, { Component } from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"

import windowChecker from "../../tools/windowChecker"
import * as firebase from "../../tools/firebaseHelper"

import Login from "./Login"
import SpeakerForm from "./SpeakerForm"
import Layout from "../bases/Layout"
import Alert from "../bases/Alert"
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
    topic: {
      studentId: "",
      topicName: "",
      description: "",
      telno: ""
    },
    isOpen: false,
    message: ""
  }
  componentWillMount = () => {
    const user = windowChecker() && JSON.parse(window.localStorage.getItem("user"))
    if (user) {
      this.setState({ user })
      firebase.getOne("topics", `${user.uid}`).once("value")
        .then(topicSnapshot => {
          let topic = Object.assign({studentId: ""}, topicSnapshot.val())
          this.setState({ topic })
        })
    }
  }

  login = () => {
    firebase.auth().signInWithPopup(firebase.provider)
      .then(({ user }) => {
        user = JSON.stringify(user)
        windowChecker() && window.localStorage.setItem("user", user)
        user = JSON.parse(user)
        firebase.insert(`users/${user.uid}`, {...user})
        this.setState({ user })
      })
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      window.localStorage.clear()
      this.setState({ user: null })
    })
  }

  handleFields = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const { user, topic } = this.state
    firebase.insert(`topics/${user.uid}`, {
      ...topic,
      displayName: user.displayName,
      photoURL: user.photoURL
    }, (error) => {
      if (error) {
        this.setState({
          isOpen: true,
          message: "ส่งข้อมูลไม่สำเร็จ กรุณาติดต่อที่แฟนเพจ เพื่อแจ้งปัญหา",
          color: "danger"
        })
      } else {
        this.setState({
          isOpen: true,
          message: "ส่งข้อมูลสำเร็จ",
          color: "success"
        })
      }
      setTimeout(() => {
        this.setState({
          isOpen: false
        })
      }, 1700)
    })
  }
  render () {
    const { user, topic, isOpen, message, color } = this.state
    return (
      <Layout>
        <SubmitSection className={`py-5 ${FLEX.center}`}>
          <Alert isOpen={isOpen} color={color}>
            {message}
          </Alert>
          <Container>
            <Row className='py-5'>
              {
                !user
                  ? <Login login={this.login} />
                  : <SpeakerForm
                    user={user}
                    handleFields={this.handleFields}
                    topic={topic}
                    logout={this.logout}
                    submit={this.submit}
                  />
              }
            </Row>
          </Container>
        </SubmitSection>
      </Layout>
    )
  }
}
