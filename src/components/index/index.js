import React from "react"

import Layout from "../bases/Layout"

import Hero from "./Hero"
import About from "./About"
import Timetable from "./Timetable"
import Sponsor from "./Sponsor"

const Index = () => (
  <Layout>
    <Hero />
    <About />
    <Timetable />
    <Sponsor />
  </Layout>
)

export default Index
