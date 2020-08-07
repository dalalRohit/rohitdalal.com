import React from 'react'

import { Element } from 'react-scroll'
import { Link } from 'gatsby'

const Home = (props) => {
  const name = 'Home'

  return (
    <Element name={name} id={name}>
      <div className="hero">
        <div className="my-info">
          <div className="brand">
            <h1>
              {' '}
              Namaste, I'm Rohit{' '}
              <span
                role="img"
                aria-label="folded hands"
                alt={`Namaste | folded hands`}
                title={`Namaste | folded hands`}
              >
                🙏{' '}
              </span>{' '}
            </h1>
          </div>

          <div className="my-intro">
            <p>Full stack Software Developer. I develop Websites, Web-apps. </p>
            <p>
              I also like to write about Web-Dev, JavaScript in general. <br />
            </p>
            {/* <p> */}
            <Link
              className="button"
              to="/blogs/"
              alt="Read my blogs"
              title="Read my blogs"
            >
              Read my blogs
            </Link>
            {/* </p> */}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Home
