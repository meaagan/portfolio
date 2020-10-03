import React from "react"
import Layout from "../components/common/layout"
import Intro from "../components/landing/intro/index"
import About from "../components/landing/about/index"
import Projects from "../components/landing/projects/index"

export default function Home() {
  return (
    <Layout>
      <Intro />
      <About /> 
      <Projects />     
    </Layout>
  )
}