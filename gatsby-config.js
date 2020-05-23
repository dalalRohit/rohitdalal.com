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
              // icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
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
