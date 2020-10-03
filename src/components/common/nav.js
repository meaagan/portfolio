import React from "react"
import styles from "./nav.module.css"

export default function Nav(){
  return(
    <div id={styles.navbar}>
      <ul id={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}