import React from "react"

import AllBlogs from "./../components/AllBlogs"
import PageLayout from "./../components/pageLayout"
import Head from "./../components/helpers/head"
import BlogFilter from "./../components/helpers/BlogFilter"
import SEO from "./../components/seo"

import { graphql } from "gatsby"

const Blogs = (props) => {
    return (
        <PageLayout
            scroll={false}
            changeBlog={false}
            margin={true}
            scrollHeight={20}
        >
            <SEO title="Blogs | Rohit Dalal" />

            <Head title="Blogs" info="Rohit Dalal" />
            <BlogFilter data={props.data.blogsQuery} />
            <AllBlogs
                // margin={true}
                blogs={props.data.blogsQuery}
            />
        </PageLayout>
    )
}

export const blogsQuery = graphql`
    {
        blogsQuery: allMdx(
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
    }
`

export default Blogs
