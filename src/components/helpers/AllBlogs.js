import React from 'react'
import BlogCard from './../UI/blog_card'
export default function AllBlogs(props) {
  const { fit } = props //auto-fit || auto-fill

  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  const cssFit = `repeat(${fit},minmax(300px,1fr))`
  return (
    <div className="all-blogs" style={{ gridTemplateColumns: cssFit }}>
      {props.blogs.edges.map((edge) => {
        const { frontmatter, excerpt } = edge.node
        const { fluid } = frontmatter.thumbnail.childImageSharp

        return (
          <BlogCard
            change={props.change}
            key={Math.random()}
            date={frontmatter.date}
            slug={frontmatter.slug}
            title={frontmatter.title}
            excerpt={excerpt}
            fluid={fluid}
            time={`${edge.node.fields.readingTime.text} `}
            tags={frontmatter.tags}
          />
        )
      })}
    </div>
  )
}
