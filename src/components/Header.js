import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './header.module.css';
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <div className={classes.Header}>

      <div className={classes.Logo}>
        Logo Here
      </div>

      <div className={classes.Nav}>
        <nav>
          <li>
            <Link
              to={"Home"}
              smooth={true}
              duration={500}>/home</Link>
          </li>
          <li>
            <Link
              to={"About"}
              smooth={true}
              spy={true}
              duration={500}> /about</Link>
          </li>
          <li>
            <Link
              to={"Projects"}
              smooth={true}
              duration={500}>/projects</Link>
          </li>
          <li>
            <Link
              to={"Contact"}
              smooth={true}
              duration={500}>/contact</Link>
          </li>
        </nav>
      </div>

    </div>
  )
}


export default Header
