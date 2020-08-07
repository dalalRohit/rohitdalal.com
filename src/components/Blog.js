import React from 'react'
import { Link } from 'gatsby'
import Title from './UI/title'
import Layout from './Layout'
import AllBlogs from './AllBlogs'

export default function Blog(props) {
  const name = 'Blog'

  return (
    <Layout name={name} id={name}>
      <Title path={`${name}`}>/blog</Title>

      <div className="desc">
        <p>
          These are my collection of blogs. I like to write about Web-Dev and
          JavaScript in general.
        </p>
        <Link className="button" to={`/blogs`}>
          Read my blogs
        </Link>
      </div>
      <div className="all-blogs">
        <AllBlogs blogs={props.blogs} />
      </div>
    </Layout>
  )
}
