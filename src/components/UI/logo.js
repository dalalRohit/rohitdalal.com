import React from "react"
import styled from "styled-components"
import rohit from "./../../images/icon_192.png"
import { Link } from "gatsby"

const Logo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  // padding:.5em;
  img {
    margin: 0 10px 0 0;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
  p {
    cursor: pointer;
    font-size: 1.35rem;
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
  const altTitle = "Rohit Dalal | Full Stack Devloper"
  return (
    <>
      <Link to="/" alt={altTitle} title={altTitle}>
        <Logo>
          <img src={rohit} alt={altTitle} title={altTitle} />
          <p>Rohit Dalal</p>
        </Logo>
      </Link>
    </>
  )
}
