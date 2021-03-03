import React from 'react'
import PageLayout from './../components/layout/pageLayout'
import AllBlogs from '../components/helpers/AllBlogs'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default function Tag(props) {
  return (
    <PageLayout
      scroll={false}
      changeBlog={true}
      margin={false}
      scrollHeight={20}
    >
      <SEO pageTitle={`Blogs of ${props.pageContext.tag} | Rohit Dalal`} />
      <h2 className="tag-header">
        Showing all blogs of <u>{props.pageContext.tag}</u>
      </h2>
      <AllBlogs blogs={props.data.blogQuery} fit="auto-fill" />
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
            date(formatString: "MMM Do YY")
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
