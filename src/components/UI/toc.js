import React from 'react'
import { Link } from 'gatsby'
import { getSlugFromHeadings } from './../../../static/data'

//Table of Contents
const TOC = (props) => {
  return (
    <>
      <p>In this post</p>

      <ul>
        {props.links
          ? props.links
              .filter((heading) => heading.depth <= 3)
              .map((link) => {
                let id = getSlugFromHeadings(link.value)
                return (
                  <li key={link.value}>
                    <Link to={'#' + id}>{link.value}</Link>
                  </li>
                )
              })
          : null}
      </ul>
    </>
  )
}

export default TOC
