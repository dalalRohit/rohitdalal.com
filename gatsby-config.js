require('dotenv').config({
  path: `.env`,
})

//blogs for dev, posts for prod
const render = process.env.NODE_ENV === 'production' ? 'posts' : 'blogs'
const { metaData } = require('./static/data')

module.exports = {
  // SiteMetaData
  siteMetadata: metaData,

  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static`,
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
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Rohit Dalal | Full Stack Software Developer`,
              short_name: `Rohit Dalal`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `src/images/logo.png`,
            },
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
