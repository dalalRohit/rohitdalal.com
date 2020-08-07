import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Logo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  p {
    cursor: pointer;
    font-size: 1.25rem;
    margin: 0 0 0 0.7rem;
  }
  /* mobile */
  @media screen and (max-width: 620px) {
    justify-content: flex-start;
    p {
      display: none;
    }
    img {
      margin: 0;
    }
  }
  /* tablet */
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`

export default function logo(props) {
  const altTitle = 'Rohit Dalal | Full Stack Devloper'
  return (
    <Link to="/" alt={altTitle} title={altTitle}>
      <Logo>
        {props.fixed ? (
          <Img fixed={props.fixed} alt={altTitle} title={altTitle} />
        ) : null}
        <p>Rohit Dalal</p>
      </Logo>
    </Link>
  )
}
