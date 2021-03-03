import React, { useRef } from 'react'
export default function Layout(props) {
  return (
    <div id={props.name} className="Container" ref={useRef()}>
      <div className="Wrapper">{props.children}</div>
    </div>
  )
}
