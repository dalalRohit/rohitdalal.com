import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout/Layout'

import AllBlogs from './helpers/AllBlogs'

export default function Blog(props) {
  const name = 'Blog'

  return (
    <Layout name={name} id={name}>
      <h1 className="title">/blog</h1>

      <div className="desc">
        <p>
          These are my collection of blogs. I like to write about Web-Dev and
          JavaScript in general.
        </p>
        <Link className="button" to={`/blogs`}>
          Read my blogs
        </Link>
      </div>
      <AllBlogs blogs={props.blogs} fit="auto-fit" />
    </Layout>
  )
}
