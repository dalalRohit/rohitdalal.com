import React from 'react'
import { IoMdHeart, IoIosArrowUp } from 'react-icons/io'
import { SiGatsby, SiNetlify } from 'react-icons/si'

const Footer = () => {
  const click = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="footer">
      <div className="first">
        <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>

        <button
          style={{ cursor: 'pointer' }}
          onClick={click}
          alt="Go to top arrow"
          title="Go to top"
        >
          <IoIosArrowUp size={25} />
        </button>
      </div>

      <div className="second">
        <div className="built">
          <a href="https://www.gatsbyjs.com/" target="_blank">
            <SiGatsby
              size={27}
              alt="Made with Gatsby"
              title="Made with Gatsby"
            />
          </a>
          <a href="https://www.netlify.com/" target="_blank">
            <SiNetlify
              size={27}
              alt="Hosted on Netlify"
              title="Hosted on Netlify"
            />
          </a>
        </div>

        <div>
          <p>
            Designed and coded with <IoMdHeart color="#a83f39" size={20} />{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
