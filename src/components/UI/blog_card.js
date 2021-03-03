import React, { useContext } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Chip from './../UI/chip'

import Context from './../../context/context'

export default function BlogCard(props) {
  const { width } = useContext(Context)
  const { title, date, fluid, slug, time, tags } = props

  const blogTags = tags.map((tag) => {
    return <Chip tag={tag} />
  })
  return (
    <article className="blogCard">
      {width > 620 ? (
        <header className="blogImg">
          <Link to={`/blogs/${slug}`}>
            <Img fluid={fluid} alt={title} title={title} />
          </Link>
        </header>
      ) : null}

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
