require('dotenv').config({
  path:`.env`
});

const siteMetaData={
  title:"Rohit Dalal | FullStack Developer",
  description: "This is my personal portfolio and blog page",
  image:'./images/logo.png',
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@dalal_rohit`,
  author: `Rohit Dalal`,
  intro:''
}
module.exports = {
  proxy:{
      prefix:'/api',
      url:'http://localhost:3000'
  },

  // SiteMetaData
  siteMetadata: siteMetaData,

  // Plugins array
  plugins: [
    // Sharp plugin
    `gatsby-plugin-sharp`,

    // Sharp transformer plugin
    `gatsby-transformer-sharp`,

    //Source filesystem /src/images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`images`,
        path: `${__dirname}/src/images`,
      },
    },
    //Source filesystem /blogs
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`images`,
        path: `${__dirname}/blogs`,
      },
    },

    //Source filesystem /blogs/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`blogs`,
        path: `${__dirname}/blogs`,
      },
    },

    //Netlify plugin
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },

    // Sass plugin
    'gatsby-plugin-sass',

    //MDX plugin
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        
        // helper plugins for mdx 
        gatsbyRemarkPlugins:[
          `gatsby-plugin-sharp`,

          `gatsby-transformer-sharp`,

          // helper plugin 1 remark-images
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth:700
            }
          },
          {
            resolve:'gatsby-source-filesystem',
            options:{
              name:'images',
              path:`${__dirname}/blogs/`
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon:`${__dirname}/src/images/paperclip.svg`,
              maintainCase: false,
              removeAccents: true,
              elements: [`h1`, `h2`,`h3`],
            },
          },
        ],
        plugins:[
          `gatsby-plugin-sharp`,

          `gatsby-transformer-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },

        ]

      },
    },

    // React helmet
    `gatsby-plugin-react-helmet`,

  
    // Manifest plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon:`${__dirname}/src/images/logo.svg`,
        crossOrigin:`use-credentials`,
        display:"standalone",


      },
    },

    // Source filesystem plugin /blogs
    {
      resolve:'gatsby-source-filesystem',
      options:{
        name:'blogs',
        path:`${__dirname}/blogs/`
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
