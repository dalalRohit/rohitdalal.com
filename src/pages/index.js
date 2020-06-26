import React from "react"
import SEO from "./../components/seo"

import PageLayout from "./../components/pageLayout"
import { graphql } from "gatsby"
import Head from "../components/helpers/head"
import Home from "./../components/Home"
import About from "./../components/About"
import Projects from "./../components/Projects"
import Contact from "./../components/Contact"
import Blog from "./../components/Blog"

const IndexPage = (props) => {
    return (
        <PageLayout
            scroll={true}
            changeBlog={false}
            margin={false}
            scrollHeight={50}
            extraheight={false}
        >
            <SEO
                title="Rohit Dalal | Full Stack Software Developer"
                image={props.data.logoQuery.fixed}
            />

            <Head title={"Rohit Dalal"} info="Full Stack Software Developer" />

            <Home />
            <About fluid={props.data.imageQuery.fluid} />
            <Blog blogs={props.data.indexBlogQuery} />
            <Projects />
            <Contact />
        </PageLayout>
    )
}

export const indexBlogQuery = graphql`
    {
        indexBlogQuery: allMdx(
            limit: 3
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        published
                        date(formatString: "MMM Do YYYY")
                        slug
                        tags
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                    excerpt
                    body
                    fields {
                        readingTime {
                            text
                        }
                    }
                }
            }
        }

        imageQuery: imageSharp(
            fluid: { originalName: { eq: "rohit-og-min.png" } }
        ) {
            fluid(maxWidth: 300, traceSVG: { color: "#eee" }) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
            fixed {
                ...GatsbyImageSharpFixed_tracedSVG
            }
        }

        logoQuery: imageSharp(fluid: { originalName: { eq: "icon_512.png" } }) {
            fixed {
                src
                width
                height
            }
        }
    }
`

export default IndexPage
