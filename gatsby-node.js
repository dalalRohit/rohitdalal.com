// const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require('path')
const { getAllTags } = require('./static/data')

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

module.exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemp = path.resolve('./src/templates/blog.js')
  const tagTemp = path.resolve('./src/templates/tag.js')

  const response = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              tags
              title
            }
          }
        }
      }
    }
  `)

  //Create /tags/${tag} pages
  const allTags = getAllTags(response.data.allMdx)
  Object.keys(allTags).map((tag) => {
    createPage({
      component: tagTemp,
      path: `/tags/${tag}`,
      context: {
        tag,
      },
    })
  })

  const posts = response.data.allMdx.edges
  //Create /blogs/${slug} pages
  posts.forEach((edge, index) => {
    const previous = index === 0 ? null : posts[index - 1]
    const next = index === posts.length - 1 ? null : posts[index + 1]

    createPage({
      component: blogTemp,
      path: `/blogs/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
        prevPost: previous,
        nextPost: next,
      },
    })
  })
}
