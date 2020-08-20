import React from 'react'
import PageLayout from '../components/pageLayout'
import AllBlogs from '../components/AllBlogs'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'

export default function Tag(props) {
  return (
    <PageLayout
      scroll={false}
      changeBlog={true}
      margin={false}
      scrollHeight={20}
      // logo={props.data.logo.fixed}
    >
      <SEO pageTitle={`Blogs of ${props.pageContext.tag} | Rohit Dalal`} />
      <h2 className="tag-note">
        Showing all blogs of <u>{props.pageContext.tag}</u>
      </h2>
      <div className="all-blogs">
        <AllBlogs blogs={props.data.blogQuery} />
      </div>
    </PageLayout>
  )
}

export const tagQuery = graphql`
  query($tag: String) {
    blogQuery: allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            slug
            tags
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 250, maxWidth: 400) {
                  ...GatsbyImageSharpFluid
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
