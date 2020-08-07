require('dotenv').config({
  path: `.env`,
})

//blogs for dev, posts for prod
const render = 'posts'
const { metaData } = require('./static/data')

module.exports = {
  // SiteMetaData
  siteMetadata: metaData,

  // Plugins array
  plugins: [
    //analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-147344129-1',
      },
    },

    //Netlify
    `gatsby-plugin-netlify`,

    // Sharp plugin
    `gatsby-plugin-sharp`,

    // Sharp transformer plugin
    `gatsby-transformer-sharp`,

    // Sass plugin
    'gatsby-plugin-sass',

    //reading time
    `gatsby-remark-reading-time`,

    // React helmet
    `gatsby-plugin-react-helmet`,

    //sitemap plugin
    `gatsby-plugin-sitemap`,

    //Source filesystem /src/images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    //Source filesystem /blogs
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/${render}`,
      },
    },

    //Source filesystem /blogs/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blogs',
        path: `${__dirname}/${render}`,
      },
    },

    //MDX plugin
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],

        // gatsbyRemarkPlugins
        gatsbyRemarkPlugins: [
          `gatsby-plugin-sharp`,

          `gatsby-transformer-sharp`,

          // helper plugin 1 remark-images

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'images',
              path: `${__dirname}/${render}/`,
            },
          },
        ],
      },
    },

    // Manifest plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohit Dalal | Full Stack Devloper`,
        short_name: `Rohit Dalal`,
        start_url: `/`,
        background_color: `#2e3b4c`,
        theme_color: `#134a47`,

        icon: `${__dirname}/src/images/logo.png`,
        crossOrigin: `use-credentials`,
        display: 'standalone',
        scope: '/',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
