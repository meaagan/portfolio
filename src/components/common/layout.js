import React from "react"
import Social from "../common/social"
import Nav from "../common/nav"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Social />
      {children}
    </div>
  )
}
