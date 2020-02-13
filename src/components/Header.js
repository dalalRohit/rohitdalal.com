import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './header.module.css';
import Logo from './UI/logo';

const Header = () => {
  return (
    <div className={classes.Header}>

      <div className={classes.Logo}>
        <Logo />
      </div>

      <div className={classes.Nav}>
        <nav>
          <li>
            <Link
              to={"About"}
              smooth={true}
              spy={true}
              offset={-58.49}
              duration={500}> /about</Link>
          </li>
          <li>
            <Link
              to={"Projects"}
              smooth={true}
              offset={-58.49}
              duration={500}>/projects</Link>
          </li>
          <li>
            <Link
              to={"Contact"}
              smooth={true}
              offset={-58.49}
              duration={500}>/contact</Link>
          </li>
        </nav>
      </div>

    </div>
  )
}


export default Header
