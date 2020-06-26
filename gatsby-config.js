require('dotenv').config({
  path:`.env`
});

// const svg=`<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`;

const siteMetaData={
  title:"Rohit Dalal | FullStack Software Developer",
  description: "Rohit Dalal is a self-taught Full Stack Software Developer. I develop Websites, Web-Apps, and I also write Technical blogs, related to Web Development.",
  image:'./images/logo_192.png',
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@dalal_rohit`,
  author: `Rohit Dalal`,
  intro:'',
  siteUrl:`https://www.rohitdalal.com`,
  keywords:["rohit","dalal","full-stack","software","developer","javascript"]
}

module.exports = {
  // SiteMetaData
  siteMetadata: siteMetaData,

  // Plugins array
  plugins: [
    //analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-147344129-1",
      },
    },

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


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`projects`,
        path: `${__dirname}/src/posts`,
      },
    },

    //Source filesystem /src/images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`images`,
        path: `${__dirname}/src/posts`,
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
        extensions: [`.mdx`],
        
        // gatsbyRemarkPlugins
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
   
        ],


      },
    },

    //gatsby transformer-remark
    {
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[
          'gatsby-remark-relative-images',

          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:500,
              linkImagesToOriginal:false,

            }
          },

        ]
      }
    },

    //reading time
    `gatsby-remark-reading-time`,

    // React helmet
    `gatsby-plugin-react-helmet`,

    //sitemap plugin
    `gatsby-plugin-sitemap`,

  
    // Manifest plugin
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohit Dalal | Full Stack Devloper`,
        short_name: `Rohit Dalal`,
        start_url: `/`,
        background_color: `#2e3b4c`,
        theme_color: `#134a47`,

        icon:`${__dirname}/src/images/sunglasses.svg`,
        crossOrigin:`use-credentials`,
        display:"standalone",
        scope:"/"


      },
    },



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
