import React from 'react'
import PageLayout from './../components/layout/pageLayout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = (props) => (
  <PageLayout scroll={false} changeBlog={false} margin={true} scrollHeight={40}>
    <SEO pageTitle="404 | Rohit Dalal" />
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>

      <p>
        Go to my <Link to="/">Portfolio</Link>
      </p>
    </div>
  </PageLayout>
)

export default NotFoundPage
