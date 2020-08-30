import React from 'react'
import { Link } from 'gatsby'

export default function NavItems(props) {
  let links = [
    'About',
    props.changeBlog ? 'Blogs' : 'Blog',
    'Projects',
    'Contact',
  ]

  return (
    <ul className="ul">
      {links.map((link) => {
        return (
          <li className="nav-link hvr-grow" key={Math.random()}>
            {props.scroll ? (
              <a href={`#${link}`} aria-label={link}>
                {link}
              </a>
            ) : (
              <Link
                to={link === 'Blogs' ? `/${link.toLowerCase()}` : `/#${link}`}
              >
                {link}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
