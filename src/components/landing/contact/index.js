import React from "react"
import styles from "./index.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Form from "./form"
import Triangle from "@assets/triangle.inline.svg"
import CV from "@assets/MB_CV.pdf"

export default function Contact(){
  return(
    <div id='contact'>
      <Triangle />
      <div id={styles.contactContainer}>
        <h1>I am not currently available for freelance work, but happy to answer any questions!</h1>
        <div className={styles.contact}>
          <div className={styles.contactText}>
            <h2>Like what you see?</h2>
            <p><span><FontAwesomeIcon icon={faEnvelope} /></span> <a href="mailto:meagan.butters@gmail.com">meagan.butters@gmail.com</a></p>
            <p><span><FontAwesomeIcon icon={faGithub} /></span> <a href="http://www.github.com/meaagan">@meaagan</a></p>
            <p><span><FontAwesomeIcon icon={faLinkedinIn} /></span> <a href="http://www.linkedin.com/in/meagan-butters">Meagan Butters</a></p>
            <p><span><FontAwesomeIcon icon={faIdCard} /></span> <a href={CV} target="_blank" rel="noreferrer">View my CV</a></p>
          </div>
          <div className={styles.contactText}>
            <h2>Have an interesting project you'd like to discuss?</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}