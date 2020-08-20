import React from 'react'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import './../styles/main.scss'
import PropTypes from 'prop-types'
import ThemeContext from '../context/context'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    offset: 46,
    updateURL: true,
    speed: 200,
  })
}
function PageLayout(props) {
  const { scroll, changeBlog, blogTitle, scrollHeight } = props

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div className={theme.dark ? 'dark' : 'light'}>
            <div className="layout">
              <div className="main">
                <Navbar
                  scroll={scroll}
                  changeBlog={changeBlog}
                  blogTitle={blogTitle}
                  scrollHeight={scrollHeight}
                />

                <main className="main-content">{props.children}</main>
              </div>

              <Footer />
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

PageLayout.propTypes = {
  scroll: PropTypes.bool, //to show navbar scroll/link
  children: PropTypes.node.isRequired,
  scrollHeight: PropTypes.number.isRequired, //after scrollHeight, .scrolled to navbar
  changeBlog: PropTypes.bool.isRequired, //blog->Blogs
  blogTitle: PropTypes.string, //blogtitle
}

export default PageLayout
