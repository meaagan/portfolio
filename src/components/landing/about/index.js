import React from "react"
import styles from "./index.module.css"
import Wave from "@assets/wave.inline.svg"
import HTML from "@assets/tech/html.inline.svg"
import CSS from "@assets/tech/css.inline.svg"
import JS from "@assets/tech/js.inline.svg"
import Postgresql from "@assets/tech/postgresql.inline.svg"
import Rails from "@assets/tech/rails.inline.svg"
import ReactSVG from "@assets/tech/react.inline.svg"
import Figma from "@assets/tech/figma.inline.svg"
import Github from "@assets/tech/github.inline.svg"
import Graphql from "@assets/tech/graphql.inline.svg"
import Heroku from "@assets/tech/heroku.inline.svg"
import Netlify from "@assets/tech/netlify.inline.svg"

export default function About(){
  return(
    <div id={styles.about}>
      <div id={styles.aboutContent}>
      <div id={styles.aboutMe}>
        <h1>About</h1>
        <p>Although designing is in my nature, I have realized through trial and error that my passion is building. Designing is just building block of building. </p>
      </div>
      <div id={styles.tech}>
        <h2>Technology I use</h2>
        <div id={styles.techList}>
          <div className={styles.techRow}>
            <div><HTML /></div>
            <p>HTML5</p>
          </div>
          <div className={styles.techRow}>
            <div><CSS /></div>
            <p>CSS</p>
          </div>
          <div className={styles.techRow}>
            <div><Rails /></div>
            <p>Rails</p>
          </div>
          <div className={styles.techRow}>
            <div><JS /></div>
            <p>JS</p>
          </div>
          <div className={styles.techRow}>
            <div><ReactSVG /></div>
            <p>React</p>
          </div>
          <div className={styles.techRow}>
            <div><Figma /></div>
            <p>Figma</p>
          </div>
          <div className={styles.techRow}>
            <div><Postgresql /></div>
            <p>PostgreSQL</p>
          </div>
          <div className={styles.techRow}>
            <div><Github /></div>
            <p>GitHub</p>
          </div>
          <div className={styles.techRow}>
            <div><Netlify /></div>
            <p>Netlify</p>
          </div>
          <div className={styles.techRow}>
            <div><Graphql /></div>
            <p>GraphQL</p>
          </div>
          <div className={styles.techRow}>
            <div><Heroku /></div>
            <p>Heroku</p>
          </div>
          
        </div>
      </div>
      </div>
      <div><Wave /></div>
    </div>
  )
}