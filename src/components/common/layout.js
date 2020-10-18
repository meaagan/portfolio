import React from "react"
import Nav from "./nav"
import SEO from "./SEO"

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <Nav />
      {children}
    </div>
  )
}
