import React, { Component } from 'react'

import classes from './../styles/footer.module.scss';
import {IoMdHeart,IoIosArrowUp} from 'react-icons/io';
import {Link} from 'react-scroll';

export default class Footer extends Component {
    render() {
        return (
            <div 
                className={classes.Wrapper}
            >
                <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>
                <p>Designed and coded with  <IoMdHeart size={20}  /> </p>
                <p style={{cursor:'pointer'}}> 
                  <Link to="Navbar" smooth={true}  >  <IoIosArrowUp size={25} /> </Link>
                </p>
              
            </div>
        )
    }
}
