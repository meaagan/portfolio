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
import Sass from "@assets/tech/sass.inline.svg"
import Webpack from "@assets/tech/webpack.inline.svg"
import NPM from "@assets/tech/npm.inline.svg"
import Ruby from "@assets/tech/ruby.inline.svg"

export default function About(){
  return(
    <div id="about">
      <div id={styles.aboutContent}>
      <div id={styles.aboutMe}>
        <h1>About</h1>
        <div>
          <p>Alumni from Concordia University in the Specialization of Computation Arts and Le Wagon Montreal full-stack web development bootcamp (batch #438). </p>
          <p>I am an organized and systematic person who enjoys problem solving in a creative way. Although I work independantly most of the time, I like learning from others through collaboration with my peers and feedback on my own work.</p>
          <p>I am currently employed at Petal Health as a backend developer using Ruby on Rails, Sidekiq, ElasticSearch, Kibana, MySQL, git, Docker, Redis, JIRA, and Jenkins. This year, my goal is to become more proficient in Angluar, the front end language used at Petal Health.</p>
        </div>
      </div>
      <div id={styles.tech}>
        <h1>Tech Stack</h1>
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
            <div><Sass /></div>
            <p>Sass</p>
          </div>
          <div className={styles.techRow}>
            <div><Ruby /></div>
            <p>Ruby</p>
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
            <div><Postgresql /></div>
            <p>PostgreSQL</p>
          </div>
          <div className={styles.techRow}>
            <div><Graphql /></div>
            <p>GraphQL</p>
          </div>
          <div className={styles.techRow}>
            <div><Github /></div>
            <p>GitHub</p>
          </div>
          <div className={styles.techRow}>
            <div><NPM /></div>
            <p>NPM</p>
          </div>
          <div className={styles.techRow}>
            <div><Webpack /></div>
            <p>Webpack</p>
          </div>
          <div className={styles.techRow}>
            <div><Figma /></div>
            <p>Figma</p>
          </div>
          <div className={styles.techRow}>
            <div><Netlify /></div>
            <p>Netlify</p>
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