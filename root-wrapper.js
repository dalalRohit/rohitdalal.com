import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from './src/context/context'
import { AiOutlinePaperClip } from 'react-icons/ai'

import Code from './src/components/helpers/code'
import './src/styles/templates/elements.scss'
import { getSlugFromHeadings } from './static/data'

const components = {
  blockquote: (props) => {
    return <blockquote className="quote">{props.children}</blockquote>
  },
  em: (props) => {
    return <em>{props.children}</em>
  },

  /*
  h2: (props) => {
    let id = getSlugFromHeadings(props.children)
    const x = '#' + id
    return (
      <h2 className="heading" id={id}>
        <span className="pin">
          <Link to={x} alt={x} title={x}>
            <AiOutlinePaperClip size={25} />
          </Link>
        </span>
        {props.children}
      </h2>
    )
  },
  h3: (props) => {
    let id = getSlugFromHeadings(props.children)
    const x = '#' + id
    return (
      <h3 className="heading" id={id}>
        <span className="pin">
          <Link to={x} alt={x} title={x}>
            <AiOutlinePaperClip size={25} />
          </Link>
        </span>
        {props.children}
      </h3>
    )
  },
  */

  a: (props) => {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        alt={props.children}
        title={props.href}
      >
        {props.children}
      </a>
    )
  },

  aside: (props) => {
    return (
      <aside className="blog-note">
        <h4>Note</h4>
        {props.children}
      </aside>
    )
  },

  pre: ({ children: { props } }) => {
    const className = props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)

    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang
              : ''
          }
          {...props}
        />
      )
    }
  },
}

export const wrapRootElement = (obj) => {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>{obj.element}</MDXProvider>
    </ThemeProvider>
  )
}
