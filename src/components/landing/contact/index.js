import React from "react"
import styles from "./index.module.css"
import Form from "./form"
import Triangle from "@assets/triangle.inline.svg"
import CV from "@assets/MB_CV.pdf"

export default function Contact(){
  return(
    <div id='contact'>
      <Triangle />
      <div id={styles.contactContainer}>
        <h1>I am currently available for full-time and freelance work. Let's talk!</h1>
        <div className={styles.contact}>
          <div className={styles.contactText}>
            <h2>Like what you see?</h2>
            <p><a href="mailto:meagan.butters@gmail.com">meagan.butters@gmail.com</a></p>
            <p><a href="http://www.github.com/meaagan">@meaagan</a></p>
            <p><a href="http://www.linkedin.com/in/meagan-butters">Meagan Butters</a></p>
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