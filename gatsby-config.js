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
          /*
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `-60`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: 'clip',
              isIconAfterHeader: false,
              elements: [`h2`, `h3`],
            },
          },
          */
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
