import React, { Component } from 'react'
import Logo from './UI/logo'
import NavItems from './helpers/nav_items'
import { Link } from 'gatsby'
import Bottom from './helpers/Bottom'
import Scroll from 'react-scroll'
import ThemeContext from '../context/context'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { window } from 'browser-monads'

// var Events = Scroll.Events
var scrollSpy = Scroll.scrollSpy

export default class Navbar extends Component {
  _isMounted = false

  state = {
    scrolled: false,
  }
  navOnScroll = () => {
    const top = window.scrollY > this.props.scrollHeight + 70
    if (top === true) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.navOnScroll)
    }
    this._isMounted = true
    scrollSpy.update()
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { scroll, changeBlog, blogTitle, slug } = this.props
    let navClass = ['navbar']
    if (this.state.scrolled) {
      navClass.push('scrolled')
    }

    return (
      <ThemeContext.Consumer>
        {({ dark, toggleDark, width }) => {
          const getThemeToggle = () =>
            dark ? (
              <IoIosSunny
                alt="Toggle Theme"
                title="Toggle Theme"
                className="icon"
                size={30}
                onClick={toggleDark}
              />
            ) : (
              <IoIosMoon
                alt="Toggle Theme"
                title="Toggle Theme"
                className="icon"
                size={30}
                onClick={toggleDark}
              />
            )
          return (
            <header
              className="header"
              style={{
                background:
                  navClass.length === 1
                    ? 'inherit'
                    : dark
                    ? '#131313'
                    : '#f2f2f2',
              }}
            >
              <div className={navClass.join(' ')}>
                <Logo scroll={scroll} />

                {blogTitle && navClass.length === 2 ? (
                  <div className="blogTitle">
                    <Link
                      to={`/blogs/${this.props.slug}`}
                      alt="Go to the start"
                      title="Go to the start"
                    >
                      <p>{blogTitle}</p>
                    </Link>
                  </div>
                ) : null}

                {width > 620 ? (
                  <nav className="navigation">
                    <NavItems scroll={scroll} changeBlog={changeBlog} />

                    {getThemeToggle()}
                  </nav>
                ) : null}

                <div className="toggle">{getThemeToggle()}</div>

                {width <= 620 ? (
                  <Bottom scroll={scroll} changeBlog={changeBlog} dark={dark} />
                ) : null}
              </div>
            </header>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
