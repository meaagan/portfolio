import React from "react"
import styles from "./index.module.css"
import Design from "@assets/design2.inline.svg"

export default function Intro() {
  return(
    <div id={styles.introContent}>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h1>Hi, my name is Meagan Butters and I am a fullstack developer from Montreal.</h1>
          <p>I have just completed a web development bootcamp at Le Wagon Montreal and I am looking for my first job in tech.</p>
        </div>
        <div className={styles.introImage}>
          <Design />
        </div>
      </div>
    </div>
  )
}