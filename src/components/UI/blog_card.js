import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

export default function BlogCard(props) {
  const { title, date, fluid, slug, time, tags } = props

  const blogTags = tags.map((tag) => {
    return (
      <span className="category" key={Math.random()}>
        <Link
          alt={`Show all blogs tagged ${tag}`}
          title={`Show all blogs tagged ${tag}`}
          to={`/tags/${tag}`}
        >
          {tag}
        </Link>
      </span>
    )
  })
  return (
    <article className="blogCard hvr-grow">
      <header className="blogImg">
        <Link to={`/blogs/${slug}`}>
          <Img fluid={fluid} alt={title} title={title} />
        </Link>
      </header>

      <div className="blogData">
        <h2 className="blogTitle">
          <Link alt={title} title={title} to={`/blogs/${slug}`}>
            {title}
          </Link>
        </h2>

        <div className="mobileTags">{blogTags}</div>

        <div className="dateTime">
          <span>{date}</span>
          <div className="blogTags">{blogTags}</div>
          <span>{time}</span>
        </div>
      </div>
    </article>
  )
}
