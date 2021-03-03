import React from 'react'
import Chip from './../UI/chip'
import { getAllTags } from './../../../static/data'

export default function BlogFilter(props) {
  let allTags = getAllTags(props.data)

  return (
    <div className="filter">
      <h1>All blogs</h1>
      <p>Filter blogs by categories</p>

      <section className="all-categories">
        {Object.keys(allTags).map((tag) => {
          return <Chip tag={tag} count={allTags[tag]} />
        })}
      </section>
    </div>
  )
}
