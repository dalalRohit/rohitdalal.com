import React, { Component } from 'react'

import  './../styles/components/footer.scss';
import {IoMdHeart,IoIosArrowUp} from 'react-icons/io';
import { Link , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default class Footer extends Component {

    top=() =>{
        scroll.scrollToTop();
    }
    render() {
        return (
            <footer className="footer">
                
                <div className="first">
                    <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>

                    <Link onClick={this.top} alt="Go to top" title="Go to top">
                         <IoIosArrowUp size={25}  />
                    </Link>
                </div>

                <div className="second">
                    <p>Designed and coded with <IoMdHeart color="#a83f39" size={20} /> </p>
                </div>


            </footer>
        )
    }
}
