import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

import * as firebase from "../../tools/firebaseHelper"
import { PADDING, FLEX } from "../bases/constant"
import Layout, { SubmitSection, CardSubmit } from "../bases/Layout"

const Section = styled(SubmitSection)`
  padding-top: ${PADDING.normal};
`

const Image = styled.img`
  max-height: 50px;
  max-width: 50px;
`

const LoadingCol = styled(Col)`
  min-height: 100vh;
`

const Loading = () => (
  <Container>
    <Row>
      <LoadingCol className={`${FLEX.center} animated infinite pulse`}>
      Loading Topics...
      </LoadingCol>
    </Row>
  </Container>
)

const TopicCard = ({ topics }) => (
  <Fragment>
    {
      topics.map(({topicName, displayName, photoURL, description}) =>
        <CardSubmit className='p-4' key={`${topicName}${displayName}`}>
          <Row className='p-4'>
            <Col xs={12} lg={9}>
              <h3><b>หัวข้อ :</b> {topicName}</h3>
              <h4><b>รายละเอียด :</b> {description}</h4>
            </Col>
            <Col xs={12} lg={3}>
              <div className='text-center'>
                <Image className='ml-auto' src={photoURL} />
                <h5>{displayName}</h5>
              </div>
            </Col>
          </Row>
        </CardSubmit>
      )
    }
  </Fragment>
)

export default class Topic extends Component {
  state = {
    topics: []
  }

  fetchTopic = () => {
    firebase.getAll("topics").once("value").then(topicSnapshot => {
      const topics = Object.values(topicSnapshot.val())
      this.setState({ topics })
    })
  }

  componentDidMount = () => {
    this.fetchTopic()
  }

  render () {
    const { topics } = this.state
    return (
      <Layout>
        <Section>
          {
            !(topics.length > 0) ? <Loading /> : <TopicCard topics={topics} />
          }
        </Section>
      </Layout>
    )
  }
}
