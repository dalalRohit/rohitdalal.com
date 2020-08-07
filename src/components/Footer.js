import React, { Component } from 'react'

import { IoMdHeart, IoIosArrowUp } from 'react-icons/io'
import { animateScroll as scroll } from 'react-scroll'
export default class Footer extends Component {
  top = () => {
    scroll.scrollToTop()
  }
  render() {
    return (
      <footer className="footer">
        <div className="first">
          <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>

          <button onClick={this.top} alt="Go to top arrow" title="Go to top">
            <IoIosArrowUp size={25} />
          </button>
        </div>

        <div className="second">
          <p>
            Designed and coded with <IoMdHeart color="#a83f39" size={20} />{' '}
          </p>
        </div>
      </footer>
    )
  }
}
