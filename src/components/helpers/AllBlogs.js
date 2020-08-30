import React from 'react'
import BlogCard from './../UI/blog_card'
export default function AllBlogs(props) {
  return (
    <>
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
    </>
  )
}
