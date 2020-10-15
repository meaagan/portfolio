/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-source-fontawesome`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@sections': path.resolve(__dirname, 'src/components/landing'),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      }
    }
  ],
}
