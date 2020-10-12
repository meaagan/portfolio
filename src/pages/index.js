import React from "react"
import Layout from "../components/common/layout"
import Intro from "../components/landing/intro/index"
import About from "../components/landing/about/index"
import Projects from "../components/landing/projects/index"
import Contact from "../components/landing/contact/index"
import Social from "../components/common/social"

export default function Home() {
  return (
    <Layout>
      <Social />
      <Intro />
      <About /> 
      <Projects />  
      <Contact />   
    </Layout>
  )
}