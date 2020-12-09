import React from 'react'
import { Link } from 'gatsby'
import icon from './../../images/logo.png'
export default function logo() {
  const altTitle = 'Rohit Dalal | Full Stack Software Developer'
  // return !props.scroll ? (
  //   <Link to="/" exact={true} alt={altTitle} title={altTitle}>
  //     <div className="brand-logo">
  //       <img src={icon} alt="Rohit Dalal" width="35px" height="35px" />
  //       <p>Rohit Dalal</p>
  //     </div>
  //   </Link>
  // ) : (
  //   <a onClick={() => window.scrollTo(0, 0)} alt={altTitle} title={altTitle}>
  //     <div className="brand-logo">
  //       <img src={icon} alt="Rohit Dalal" width="35px" height="35px" />
  //       <p>Rohit Dalal</p>
  //     </div>
  //   </a>
  // )
  return (
    <Link to="/" exact alt={altTitle} title={altTitle}>
      <div className="brand-logo">
        <img src={icon} alt="Rohit Dalal" width="35px" height="35px" />
        <p>Rohit Dalal</p>
      </div>
    </Link>
  )
}
