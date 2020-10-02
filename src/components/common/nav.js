import React from "react"
import styles from "./nav.module.css"

export default function Nav(){
  return(
    <div id={styles.navbar}>
      <ul id={styles.links}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}