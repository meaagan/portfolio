import React from "react"
import Social from "./social"

export default function Layout({ children }) {
  return (
    <div>
      <Social />
      {children}
    </div>
  )
}