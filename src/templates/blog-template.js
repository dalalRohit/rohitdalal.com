import React from 'react'
import { graphql, Link } from 'gatsby'
import { IoLogoTwitter, IoMdArrowBack } from 'react-icons/io'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { window } from 'browser-monads'
import ThemeContext from './../context/context'
import PageLayout from './../components/pageLayout'
import SEO from './../components/seo'
// import TOC from './../components/UI/toc'

import './../styles/templates/blogtemplate.scss'

export default function BlogTemplate(props) {
  const { frontmatter, body, fields, headings } = props.data.blog
  const twitterShare = `https://www.twitter.com/intent/tweet?url=${encodeURIComponent(
    window.location.href
  )}&via=rohitdalal&text=${encodeURIComponent(frontmatter.title)}`

  const image = frontmatter.thumbnail
    ? frontmatter.thumbnail.childImageSharp.fixed
    : null

  const readingTime = fields.readingTime.text //reading time
  const { prevPost, nextPost } = props.pageContext

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <PageLayout
            scroll={false}
            changeBlog={true}
            blogTitle={frontmatter.title}
            margin={true}
            extraheight={true}
            scrollHeight={20}
            logo={props.data.logo.fixed}
          >
            <SEO
              title={`${frontmatter.title} | Rohit Dalal`}
              description={body.excerpt}
              image={image}
              postNode={props.data.blog}
              postSEO
              logo={props.data.logo.fixed}
            />

            <div className="blog">
              {/* blog metadata tags,title,date,share */}
              <div className="info">
                <div className="back">
                  <Link to={`/blogs/`}>
                    <p>
                      {' '}
                      <IoMdArrowBack /> go to all blogs{' '}
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

              {/* {headings.length ? (
                <aside className="side">
                  <TOC links={headings} />
                </aside>
              ) : null} */}

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
                        className="prev"
                        title={prevPost.node.frontmatter.title}
                        alt={prevPost.node.frontmatter.title}
                        to={`/blogs/${prevPost.node.frontmatter.slug}`}
                      >
                        {prevPost.node.frontmatter.title}
                      </Link>
                    ) : null}
                    {nextPost !== null ? (
                      <Link
                        className="next"
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
      }}
    </ThemeContext.Consumer>
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
    logo: imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`
