import React from 'react'
import { graphql } from 'gatsby'

import SEO from './../components/seo'
import PageLayout from './../components/layout/pageLayout'
import Home from './../components/Home'
import About from './../components/About'
import Projects from './../components/Projects'
import Contact from './../components/Contact'
import Blog from './../components/Blog'

const IndexPage = (props) => {
  return (
    <PageLayout
      scroll={true}
      changeBlog={false}
      margin={false}
      scrollHeight={50}
      extraheight={false}
    >
      <SEO pageTitle="Rohit Dalal | Full Stack Software Developer" />

      <Home />
      <About />
      <Blog blogs={props.data.allMdx} />
      <Projects />
      <Contact />
    </PageLayout>
  )
}

export const data = graphql`
  query {
    allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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
                fluid(maxHeight: 250, maxWidth: 400) {
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

export default IndexPage
