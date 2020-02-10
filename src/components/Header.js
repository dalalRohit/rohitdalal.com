import React from "react"

import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.Header}>

      <div className={classes.Logo}>
        Rohit Dalal
      </div>

      <div className={classes.Nav}>
        <nav>
          <li>/home</li>
          <li>/about</li>
          <li>/projects</li>
          <li>/contact</li>
        </nav>
      </div>
    </div>
  )
}


export default Header
