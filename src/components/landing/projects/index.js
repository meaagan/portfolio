import React from "react";
import styles from "./index.module.css";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      melody: file(name: {eq: "melody2"}, relativeDirectory: {eq: "melody"}) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rentie: file(name: {eq: "rentie2"}, relativeDirectory: {eq: "rentie"}) {
        childImageSharp {
          fluid(maxHeight: 300,  quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cheers: file(name: {eq: "cheers2"}, relativeDirectory: {eq: "cheers"}) {
        childImageSharp {
            fluid(maxHeight: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
      
      return (       
        <div id={styles.projectsContainer}>
          <h1>Projects</h1>
          <div className={styles.project}>
            <figure className={styles.projectImg}>
              <Img fluid = {data.cheers.childImageSharp.fluid} />
            </figure>
            <div className={styles.projectText}>
              <p>
                Cheers! is a cocktail database where a user can view detailed information on any cocktail, organized alphabetically. It was built with Ruby on Rails with help from <a href="https://www.thecocktaildb.com/">The Cocktail DB</a> and is hosted on Heroku.
                <p>
                  <a href="http://cocktail-database.herokuapp.com/">View Cheers!</a></p>
              </p>
            </div>
        </div>
        <div className={styles.project}>
          <figure className={styles.projectImg}>
            <Img fluid = {data.rentie.childImageSharp.fluid} />
          </figure>
          <div className={styles.projectText}>
              <p>Rentie is a property management tool for small to medium property owners. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, ChartJS, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.
                <p><a href="http://www.rentie.ca/">View Rentie</a></p>
                <p>
                  Please use the following login information: 
                </p>
                e-mail: meagan@email.com, password: 123456
              </p>
            </div>
        </div>
          <div className={styles.project}>
            <figure className={styles.projectImg}>
              <Img fluid = {data.melody.childImageSharp.fluid} />          
            </figure>
            <div className={styles.projectText}>
                Melody is an Airbnb clone for instruments. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, Algolia, AJAX, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.
                <p>
                  <a href="http://airbnb-meaagan.herokuapp.com/">View Melody</a></p>
                <p>
                  Please use the following login information: 
                </p>
                e-mail: meagan@email.com, password: 123456
            </div>
          </div>
      </div>
    )
}
export default Projects