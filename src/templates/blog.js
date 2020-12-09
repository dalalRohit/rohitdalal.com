import React from 'react'
import { graphql, Link } from 'gatsby'
import { IoLogoTwitter, IoMdArrowBack } from 'react-icons/io'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { window } from 'browser-monads'
import PageLayout from './../components/layout/pageLayout'
import SEO from '../components/seo'

export default function BlogTemplate(props) {
  const blog = props.data.blog

  const { frontmatter, body, fields, excerpt } = blog

  const twitterShare = `https://www.twitter.com/intent/tweet?url=${encodeURIComponent(
    window.location.href
  )}&via=rohitdalal&text=${encodeURIComponent(frontmatter.title)}`

  const readingTime = fields.readingTime.text //reading time
  const { prevPost, nextPost } = props.pageContext

  return (
    <PageLayout
      scroll={false}
      changeBlog={true}
      blogTitle={frontmatter.title}
      slug={frontmatter.slug}
      extraheight={true}
      scrollHeight={20}
    >
      <SEO
        pageTitle={`${frontmatter.title} | Rohit Dalal`}
        pageDescription={excerpt}
        postNode={props.data.blog}
        postSEO
      />

      <div className="blog">
        {/* blog metadata tags,title,date,share */}
        <div className="info">
          <div className="back">
            <Link to={`/blogs/`}>
              <p>
                <IoMdArrowBack size={24} /> go to all blogs
              </p>
            </Link>
          </div>

          <div className="metadata">
            <h1>{frontmatter.title}</h1>
            <span className="meta">
              <time> {frontmatter.date} </time>
              <span>{readingTime}</span>
              <a
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on twitter"
                href={twitterShare}
              >
                <IoLogoTwitter size={25} />
              </a>
            </span>
          </div>

          <div className="all-categories">
            {frontmatter.tags.map((tag) => {
              return (
                <span className="category" key={Math.random()}>
                  <Link to={`/tags/${tag}`} key={Math.random()}>
                    {tag}
                  </Link>
                </span>
              )
            })}
          </div>
        </div>

        {/* Main blog content */}
        <article className="article">
          <MDXRenderer>{body}</MDXRenderer>
        </article>

        {/* Further reads */}
        {props.pageContext ? (
          <div className="blog-nav">
            <h3>Further reads</h3>

            <section className="reads">
              {prevPost !== null ? (
                <Link
                  className="prev hvr-shrink"
                  title={prevPost.node.frontmatter.title}
                  alt={prevPost.node.frontmatter.title}
                  to={`/blogs/${prevPost.node.frontmatter.slug}`}
                >
                  {prevPost.node.frontmatter.title}
                </Link>
              ) : null}
              {nextPost !== null ? (
                <Link
                  className="next hvr-shrink"
                  title={nextPost.node.frontmatter.title}
                  alt={nextPost.node.frontmatter.title}
                  to={`/blogs/${nextPost.node.frontmatter.slug}`}
                >
                  {nextPost.node.frontmatter.title}
                </Link>
              ) : null}
            </section>
          </div>
        ) : null}
      </div>
    </PageLayout>
  )
}

export const data = graphql`
  query($slug: String) {
    blog: mdx(frontmatter: { slug: { eq: $slug } }) {
      headings {
        value
        depth
      }
      frontmatter {
        slug
        title
        date(formatString: "MMM Do YYYY")
        tags
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              src
              width
              height
            }
          }
        }
      }
      body
      rawBody
      excerpt(pruneLength: 200)
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
