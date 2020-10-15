import React from "react"
import styles from "./index.module.css"
import Form from "./form"
import Triangle from "@assets/triangle.inline.svg"
import CV from "@assets/MB_CV.pdf"

export default function Contact(){
  return(
    <div id={styles.svgContact}>
      <Triangle />
      <div id={styles.contactContainer}>
        <h1>I am currently available for full-time and freelance work. Let's talk!</h1>
        <div className={styles.contact}>
          <div className={styles.contactText}>
            <h2>Like what you see?</h2>
            <p>E-mail me at meagan.butters@gmail.com to set up a call</p>
            <p><a href={CV} target="_blank" rel="noreferrer">View my CV</a></p>
          </div>
          <div className={styles.contactText}>
            <h2>Have an interesting project?</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}