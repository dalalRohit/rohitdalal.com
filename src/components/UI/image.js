import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

export default function Image() {
  return (
    <div className="image">
      <StaticQuery
        query={graphql`
          query {
            logo: file(relativePath: { eq: "photo.png" }) {
              childImageSharp {
                fluid(maxWidth: 350, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={(data) => {
          return data.logo ? (
            <Img
              alt={'Rohit Dalal | Full Stack Software Developer'}
              title={'Rohit Dalal | Full Stack Software Developer'}
              className="rohit-photo"
              fluid={data.logo.childImageSharp.fluid}
            />
          ) : null
        }}
      />
    </div>
  )
}
