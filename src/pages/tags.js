import React from 'react'
import PageLayout from './../components/layout/pageLayout'

import { getAllTags } from './../../static/data'
import { graphql, Link } from 'gatsby'
import SEO from './../components/seo'

const Tags = (props) => {
  const allTags = getAllTags(props.data.tags)

  return (
    <PageLayout scroll={false} changeBlog={true} scrollHeight={20}>
      <SEO title={`All tags | Rohit Dalal`} />

      <div className="tags-container">
        <h1>Check all blogs categories</h1>

        <div className="all-categories">
          {Object.keys(allTags).map((tag) => {
            return (
              <span className="category" key={Math.random()}>
                <Link
                  to={`/tags/${tag}`}
                  alt={`Show all blogs tagged ${tag}`}
                  title={`Show all blogs tagged ${tag}`}
                >
                  {tag} {allTags[tag]}
                </Link>
              </span>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}

export const data = graphql`
  {
    tags: allMdx {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
export default Tags
