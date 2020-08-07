import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Name = styled.h1`
  transition: all 0.3s linear;
  font-size: 2.2em;
  font-weight: 400;
  margin: 0 0 1.2rem 0;
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #3d84a8;
    }
  }
`
export default function Title(props) {
  return (
    <Name>
      <Link
        to={`${props.path}`}
        smooth={true}
        duration={200}
        // offset={-60}
      >
        {' '}
        {props.children}{' '}
      </Link>
    </Name>
  )
}
