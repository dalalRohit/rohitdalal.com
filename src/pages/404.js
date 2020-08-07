import React from 'react'
import PageLayout from './../components/pageLayout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = (props) => (
  <PageLayout
    scroll={false}
    changeBlog={false}
    margin={true}
    scrollHeight={40}
    logo={props.data.logo.fixed}
  >
    <SEO title="404 | Rohit Dalal" logo={props.data.logo.fixed} />
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>

      <p>
        Go to my <Link to="/">Portfolio</Link>
      </p>
    </div>
  </PageLayout>
)

export const data = graphql`
  {
    logo: imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`

export default NotFoundPage
