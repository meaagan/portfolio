import React from "react"
import styles from "./index.module.css"

export default function Projects(){
  return(
    <div id={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.project}>
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        <div className={styles.projectText}>

          <p>
            Melody is an Airbnb clone for instruments. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, Algolia, AJAX, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters.
            <p>
              <a href="http://airbnb-meaagan.herokuapp.com/">View Melody</a></p>
            <p>
              Please use the following login information for a demo: e-mail: meagan@email.com, password: 123456
            </p>
          </p>
        </div>
      </div>
      <div className={styles.project}>
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
      <div className={styles.projectText}>
        <p>Rentie is a property management tool for small to medium property owners. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, ChartJS, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters.
          <p><a href="http://www.rentie.ca/">View Rentie</a></p>
          <p>Please use the following login information for a demo: e-mail: meagan@email.com, password: 123456
          </p>
        </p>
      </div>
    </div>
  </div>
  )
}