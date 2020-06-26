import React from "react"
import { Link } from "gatsby"
import Title from "./UI/title"
import Layout from "./Layout"
import AllBlogs from "./AllBlogs"
import Button from "@material-ui/core/Button"

export default function Blog(props) {
  const name = "Blog"

  return (
    <Layout name={name} id={name}>
      <Title path={`${name}`}>/blog</Title>

      <div className="notice">
        <p>
          These are my collection of blogs. I like to write about web-dev and
          JavaScript in general.
          <br /> Check out my blogs
        </p>

        <div className="note">
          <Button variant="contained" color="primary" disableElevation>
            <Link to={`/blogs/`} alt={`Read all blogs`} title={`Read all blogs`}>
              <p>See all blogs</p>
            </Link>
          </Button>
        </div>
      </div>

      <div className="Blogs">
        <AllBlogs blogs={props.blogs} />
      </div>
    </Layout>
  )
}
