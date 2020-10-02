import React from "react"
import Layout from "../components/common/layout"
import Intro from "../components/landing/intro/index"
import About from "../components/landing/about/index"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <About />      
    </Layout>
  )
}