import React from 'react'
import NavItems from './nav_items'

export default function Bottom(props) {
  const { dark, scroll, display, changeBlog } = props
  return (
    <div
      className="bottom"
      style={{ backgroundColor: dark ? '#131313' : '#e7e7e7' }}
    >
      <NavItems display={display} scroll={scroll} changeBlog={changeBlog} />
    </div>
  )
}
