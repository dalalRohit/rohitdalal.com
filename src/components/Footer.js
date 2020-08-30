import React, { Component } from 'react'
import { IoMdHeart, IoIosArrowUp } from 'react-icons/io'
export default class Footer extends Component {
  click = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <footer className="footer">
        <div className="first">
          <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>

          <button
            style={{ cursor: 'pointer' }}
            onClick={this.click}
            alt="Go to top arrow"
            title="Go to top"
          >
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
