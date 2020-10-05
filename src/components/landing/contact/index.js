import React from "react"
import styles from "./index.module.css"
import Form from "./form"

export default function Contact(){
  return(
    <div id={styles.contactContainer}>
      <h1>I am currently available for full-time and freelance work. Let's talk!</h1>
      <div className={styles.contact}>
        <div className={styles.contactText}>
          <h2>Like what you see?</h2>
          <p>E-mail me at meagan.butters@gmail.com to set up a call</p>
          <p>Click here to view my CV</p>
        </div>
        <div className={styles.contactText}>
          <h2>Have an interesting project?</h2>
          <Form />
        </div>
      </div>
    </div>
  )
}