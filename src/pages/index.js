import React from "react"
import Layout from "@common/layout"
import Intro from "@sections/intro/index"
import About from "@sections/about/index"
import Projects from "@sections/projects/index"
import Contact from "@sections/contact/index"
import Social from "@common/social"

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