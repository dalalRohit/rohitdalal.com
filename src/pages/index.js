import React from 'react'
import { graphql } from 'gatsby'

import SEO from './../components/seo'
import PageLayout from './../components/pageLayout'
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
      logo={props.data.logo.fixed}
    >
      <SEO
        title="Rohit Dalal | Full Stack Software Developer"
        logo={props.data.logo.fixed}
      />

      <Home />
      <About fluid={props.data.imageQuery.fluid} />
      <Blog blogs={props.data.indexBlogQuery} />
      <Projects />
      <Contact />
    </PageLayout>
  )
}

export const data = graphql`
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
    imageQuery: imageSharp(
      fluid: { originalName: { eq: "rohit-og-min.png" } }
    ) {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    logo: imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`

export default IndexPage
