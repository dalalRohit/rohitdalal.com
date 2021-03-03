import React from 'react'
import { Link } from 'gatsby'

export default function Chip({ tag, count }) {
  return (
    <span className="chip" key={Math.random()}>
      <Link
        alt={`Show all blogs tagged ${tag}`}
        title={`Show all blogs tagged ${tag}`}
        to={`/tags/${tag}`}
      >
        {tag} {count ? <span className="chipcount">{count}</span> : null}
      </Link>
    </span>
  )
}
