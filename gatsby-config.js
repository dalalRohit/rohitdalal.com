require('dotenv').config({
  path:`.env`
});

module.exports = {
  proxy:{
      prefix:'/api',
      url:'http://localhost:3000'
  },

  // SiteMetaData
  siteMetadata: {
    title: `Rohit Dalal | MERN Stack Developer`,
    description: ``,
    author: `Rohit Dalal`,
    intro:``,
  },

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

          //helper plugin to autolink-headers
          {
            resolve:`gatsby-remark-autolink-headers`,
            options:{
              className:"heading",
              offsetY:`1000`,
              maintainCase:false,
              elements:[`h1`,`h2`,`h3`],
            }
          },
          {
            resolve:'gatsby-source-filesystem',
            options:{
              name:'images',
              path:`${__dirname}/blogs/`
            }
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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

    //https://www.gatsbyjs.org/docs/add-a-manifest-file/
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        name:"Rohit Dalal | MERN Stack Devloper",
        short_name:"Rohit Dalal",
        description:"Hello, myself Rohit Dalal. Nice to see you with this PWA ;)",
        lang:'en',
        start_url:"/",
        background_color:"#b1cfff",
        display:"standalone",
        icon:"src/images/gatsby-icon.png",
        crossOrigin:`use-credentials`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
