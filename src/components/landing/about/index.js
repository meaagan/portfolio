import React from "react"
import styles from "./index.module.css"

export default function About(){
  return(
    <div id={styles.about}>
      <div id={styles.aboutMe}>
        <h1>About</h1>
        <p>Although designing is in my nature, I have realized through trial and error that my passion is building. Designing is just building block of building. </p>
      </div>
      <div id={styles.tech}>
        <h2>Technology I use</h2>
        <div id={styles.techList}>
          <ul className={styles.techRow}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Rails</li>
            <li>JS</li>
          </ul>
          <ul className={styles.techRow}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Rails</li>
            <li>JS</li>
          </ul>
          <ul className={styles.techRow}>
            <li>React</li>
            <li>Figma</li>
            <li>Adobe</li>
          </ul>
          <ul className={styles.techRow}>
            <li>React</li>
            <li>Figma</li>
            <li>Adobe</li>
          </ul>
        </div>
      </div>
    </div>
  )
}