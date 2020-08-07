import React from 'react'
import PageLayout from './../components/pageLayout'
import { getAllTags } from './../../static/data'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import SEO from './../components/seo'

const TagsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 70vh;
  padding: 4rem 0 0 0;

  @media (max-width: 620px) {
    padding: 4rem 0 0 0;
  }
  a p {
    font-size: 1.2rem;
  }

  .alltags {
    box-sizing: border-box;
    width: 100%;
    padding: 0.1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    span {
      font-size: 16px;
    }
    @media screen and (max-width: 620px) {
      width: 100%;
    }
  }
`
const Tags = (props) => {
  const allTags = getAllTags(props.data.tags)

  return (
    <PageLayout
      scroll={false}
      changeBlog={true}
      scrollHeight={20}
      logo={props.data.logo.fixed}
    >
      <SEO title={`All tags | Rohit Dalal`} logo={props.data.logo.fixed} />

      <TagsContainer>
        <Link to={`/blogs/`}>
          <p>
            {' '}
            <IoMdArrowBack /> Check my all blogs{' '}
          </p>
        </Link>

        <h1>Check all blogs categories</h1>

        <div className="alltags">
          {Object.keys(allTags).map((tag) => {
            return (
              <span className={'Tag'} key={Math.random()}>
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
      </TagsContainer>
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
    logo: imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
      fixed(width: 35, height: 35) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`
export default Tags
