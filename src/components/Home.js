import React from 'react'

import { Element } from 'react-scroll'
import { Link } from 'gatsby'
import hands from './../images/hands.png'

const Home = (props) => {
  const name = 'Home'

  return (
    <Element name={name} id={name}>
      <div className="hero">
        <div className="my-info">
          <div className="brand">
            <h1>
              Namaste, I'm Rohit
              <img
                alt={`Namaste | folded hands`}
                title={`Namaste | folded hands`}
                src={hands}
              />
            </h1>
          </div>

          <div className="my-intro">
            <p>Full stack Software Developer. I develop Websites, Web-apps. </p>
            <p>
              I also like to write about Web-Dev, JavaScript in general. <br />
            </p>
            <Link
              className="button"
              to="/blogs/"
              alt="Read my blogs"
              title="Read my blogs"
            >
              Read my blogs
            </Link>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Home
