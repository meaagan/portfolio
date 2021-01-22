import React from "react"
import styles from "./index.module.css"
import Design from "@assets/design2.inline.svg"

export default function Intro() {
  return(
    <div id="intro" className={styles.introContent}>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h1>Hi, my name is Meagan Butters and I am a web developer from Montreal.</h1>
          {/* <p>I am currently working at PetalMD as a back-end developer and always looking to learn .</p> */}
        </div>
        <div className={styles.introImage}>
          <Design />
        </div>
      </div>
    </div>
  )
}