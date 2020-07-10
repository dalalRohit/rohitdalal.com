const siteMetaData = {
    title: "Rohit Dalal | FullStack Software Developer",
    description:
        "Rohit Dalal is a self-taught Full Stack Software Developer. I develop Websites, Web-Apps, and I also write Technical blogs, related to Web Development.",
    image: "./images/logo_192.png",
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    twitterUsername: `@dalal_rohit`,
    author: `Rohit Dalal`,
    intro: "",
    siteUrl: `https://www.rohitdalal.com`,
    keywords: [
        "rohit",
        "dalal",
        "full-stack",
        "software",
        "developer",
        "javascript",
    ],
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

        //Netlify
        `gatsby-plugin-netlify`// Sharp plugin
        `gatsby-plugin-sharp`,

        // Sharp transformer plugin
        `gatsby-transformer-sharp`,

        // Sass plugin
        "gatsby-plugin-sass",

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
                path: `${__dirname}/posts`,
            },
        },

        //Source filesystem /blogs/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogs`,
                path: `${__dirname}/posts`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects`,
            },
        },

        //Source filesystem /src/images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/projects`,
            },
        },

        //MDX plugin
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],

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
                        resolve: "gatsby-source-filesystem",
                        options: {
                            name: "images",
                            path: `${__dirname}/posts/`,
                        },
                    },
                ],
            },
        },

        //gatsby transformer-remark
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-relative-images",

                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 500,
                            linkImagesToOriginal: false,
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
                display: "standalone",
                scope: "/",
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
