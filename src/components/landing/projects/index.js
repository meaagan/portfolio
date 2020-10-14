import React from "react";
import styles from "./index.module.css";
import Carousel from 'react-multi-carousel';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import 'react-multi-carousel/lib/styles.css';

const Projects = () => (
  <StaticQuery
      query={graphql`
        query {
          ladies: file(
            sourceInstanceName: { eq: "melody" }
            name: { eq: "melody1" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }`
      }

      render={data => (
        <div id={styles.projectsContainer}>
          <h1>Projects</h1>
          <div className={styles.project}>
              
            <div className={styles.projectText}>
                Melody is an Airbnb clone for instruments. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, Algolia, AJAX, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.
                <p>
                  <a href="http://airbnb-meaagan.herokuapp.com/">View Melody</a></p>
                <p>
                  Please use the following login information for a demo: e-mail: meagan@email.com, password: 123456
                </p>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectText}>
                <p>Rentie is a property management tool for small to medium property owners. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, ChartJS, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.
                  <p><a href="http://www.rentie.ca/">View Rentie</a></p>
                  <p>Please use the following login information for a demo: e-mail: meagan@email.com, password: 123456
                  </p>
                </p>
              </div>
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        </div>
        <div className={styles.project}>
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
            <div className={styles.projectText}>
              <p>
                Cheers! is a cocktail database where a user can view detailed information on any cocktail, organized alphabetically. It was built with Ruby on Rails with help from <a href="https://www.thecocktaildb.com/">The Cocktail DB</a> and is hosted on Heroku.
                <p>
                  <a href="http://cocktail-database.herokuapp.com/">View Cheers!</a></p>
              </p>
            </div>
        </div>
      </div>
    )}
  />
)


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}