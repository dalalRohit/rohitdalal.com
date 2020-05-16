import React, { Component } from 'react'

import classes from './../styles/components/footer.module.scss';
import {IoMdHeart,IoIosArrowUp} from 'react-icons/io';
import { Link , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default class Footer extends Component {

    // top=() =>{
    //     scroll.scrollToTop();
    // }
    render() {
        return (
            <div 
                className={classes.Wrapper}
            >
                <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>
                <p>Designed and coded with  <IoMdHeart size={20}  /> </p>
                <p style={{cursor:'pointer'}}> 
                  <Link 
                    // onClick={this.top}
                    smooth={true}  >  
                    <IoIosArrowUp size={25} />
                </Link>
                </p>
              
            </div>
        )
    }
}
