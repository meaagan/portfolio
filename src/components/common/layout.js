import React from "react"
import Nav from "../common/nav"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
