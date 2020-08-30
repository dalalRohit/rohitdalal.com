import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import icon from './../../images/logo.png'

export default function logo(props) {
  const altTitle = 'Rohit Dalal | Full Stack Devloper'
  return (
    <Link to="/" alt={altTitle} title={altTitle}>
      <div className="brand-logo">
        {/* {props.fixed ? (
          <Img fixed={props.fixed} alt={altTitle} title={altTitle} />
        ) : null} */}

        <img src={icon} alt="Rohit Dalal" width="35px" height="35px" />
        <p>Rohit Dalal</p>
      </div>
    </Link>
  )
}
