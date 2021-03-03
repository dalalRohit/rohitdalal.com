import React from 'react'
import Navbar from './../Navbar'
import Footer from './../Footer'
import './../../styles/main.scss'
import ThemeContext from './../../context/context'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
  })
}
function PageLayout(props) {
  const { scroll, changeBlog, blogTitle, scrollHeight, slug } = props

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div className={`layout ${theme.dark ? 'dark' : 'light'}`}>
            <div className="main">
              <Navbar
                scroll={scroll}
                changeBlog={changeBlog}
                blogTitle={blogTitle}
                scrollHeight={scrollHeight}
                slug={slug}
              />

              <main className="main-content">{props.children}</main>
            </div>

            <Footer />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default PageLayout
