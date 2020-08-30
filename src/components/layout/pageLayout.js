import React from 'react'
import Navbar from './../Navbar'
import Footer from './../Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './../../styles/main.scss'
import ThemeContext from './../../context/context'

if (typeof window !== 'undefined') {
  AOS.init()
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

export default PageLayout
