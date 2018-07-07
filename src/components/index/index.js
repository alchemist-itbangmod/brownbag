import React from "react"

import Layout from "../bases/Layout"

import Hero from "./Hero"
import About from "./About"
import Timetable from "./Timetable"
import Sponsor from "./Sponsor"
import Footer from "./Footer"

const Index = () => (
  <Layout>
    <Hero />
    <About />
    <Timetable />
    <Sponsor />
    <Footer />
  </Layout>
)

export default Index
