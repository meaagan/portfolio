import React from "react";
import styles from "./index.module.css";
import Fade from 'react-reveal/Fade';

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      vr: file(name: {eq: "VRPortfolio"}, relativeDirectory: {eq: "melody"}) {
        childImageSharp {
          fluid(maxHeight: 300,  quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jn: file(name: {eq: "jnportfolio"}, relativeDirectory: {eq: "melody"}) {
        childImageSharp {
          fluid(maxHeight: 300,  quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      melody: file(name: {eq: "melody1"}, relativeDirectory: {eq: "melody"}) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rentie: file(name: {eq: "rentie6"}, relativeDirectory: {eq: "rentie"}) {
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
        <div id='projects' className={styles.projects}>
          <h1 style={{textAlign:"center"}}>Projects</h1>
          <Fade>
            <div className={styles.project}>
              <figure className={styles.projectImg}>
                <Img fluid = {data.cheers.childImageSharp.fluid} />
              </figure>
              <div className={styles.projectText}>
                <h2>Cheers!</h2>
                <p>
                  Cheers! is a cocktail database where a user can view detailed information on any cocktail, organized alphabetically. It was built with Ruby on Rails with help from <a href="https://www.thecocktaildb.com/">The Cocktail DB</a> and is hosted on Heroku.
                  <p>
                    <a href="http://cocktail-database.herokuapp.com/">View Cheers!</a></p>
                </p>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={styles.project}>
              <figure className={styles.projectImg}>
                <Img fluid = {data.jn.childImageSharp.fluid} />
              </figure>
              <div className={styles.projectText}>
                <h2>Julian Nasielski Portfolio</h2>
                <p>
                  A portfolio for level designer, Julian Nasielski. Simple CMS-based website built with Gatsby, Prismic, and Netlify.
                <p>
                  <a href="http://www.juliannasielski.com/">View Julian Nasielski Portfolio</a></p>
                </p>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={styles.project}>
              <figure className={styles.projectImg}>
                <Img fluid = {data.vr.childImageSharp.fluid} />
              </figure>
              <div className={styles.projectText}>
                <h2>Victor Rose Espresso Bar</h2>
                <p>
                  Landing page for Victor Rose Espresso Bar. Made with Gatsby and hosted on Netlify.
                <p>
                  <a href="http://www.cafevictorrose.com/">View Victor Rose Espresso Bar</a></p>
                </p>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className={styles.project}>
              <figure className={styles.projectImg}>
                <Img fluid = {data.rentie.childImageSharp.fluid} />
              </figure>
              <div className={styles.projectText}>
                <h2>Rentie</h2>
                  <p>Rentie is a property management tool for small to medium property owners. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, ChartJS, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.
                    <p><a href="http://www.rentie.ca/">View Rentie</a></p>
                    <p>
                      Please use the following login information: 
                    </p>
                    e-mail: meagan@email.com, password: 123456
                  </p>
                </div>
            </div>
          </Fade>
          <Fade>
            <div className={styles.project}>
              <figure className={styles.projectImg}>
                <Img fluid = {data.melody.childImageSharp.fluid} />          
              </figure>
              <div className={styles.projectText}>
                <h2>Melody</h2>
                  <p>Melody is an Airbnb clone for instruments. It was built with Ruby on Rails, Javascript 2015, PostgreSQL, Algolia, AJAX, and SCSS, by Kyle Masterson, Francesca Hall, Millie Senecal, and Meagan Butters and is hosted on Heroku.</p>
                  <p>
                    <a href="http://airbnb-meaagan.herokuapp.com/">View Melody</a></p>
                  <p>
                    Please use the following login information: 
                  </p>
                  e-mail: meagan@email.com, password: 123456
              </div>
            </div>
          </Fade>
      </div>
    )
}
export default Projects