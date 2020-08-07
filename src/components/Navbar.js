import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from './UI/logo'
import NavItems from './helpers/nav_items'

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
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  }
  navOnScroll = () => {
    const top = window.scrollY > this.props.scrollHeight
    if (top === true) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }
  componentDidMount() {
    this._isMounted = true

    scrollSpy.update()
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.navOnScroll)

      window.addEventListener('resize', () => {
        this.setState({
          width: window.innerWidth,
        })

        return () => {
          window.removeEventListener('resize', () => {
            this.setState({
              width: window.innerWidth,
            })
          })
        }
      })
    }
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { scroll, changeBlog, blogTitle } = this.props

    let navClass = ['navbar']
    if (this.state.scrolled) {
      navClass.push('scrolled')
    }

    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const getLogo = () =>
            theme.dark ? (
              <IoIosSunny
                className="icon"
                size={30}
                onClick={theme.toggleDark}
              />
            ) : (
              <IoIosMoon
                className="icon"
                size={30}
                onClick={theme.toggleDark}
              />
            )

          return (
            <header
              className="header"
              style={{
                background:
                  navClass.length === 1
                    ? 'inherit'
                    : theme.dark
                    ? '#131313'
                    : '#fff',
              }}
            >
              <div className={navClass.join(' ')}>
                <Logo fixed={this.props.logo} scroll={scroll} />

                {blogTitle && navClass.length === 2 ? (
                  <div className="blogTitle">
                    <p>{blogTitle}</p>
                  </div>
                ) : null}

                <nav className="navigation">
                  <NavItems
                    scroll={scroll}
                    changeBlog={changeBlog}
                    theme={theme}
                  />

                  {getLogo()}
                </nav>

                <div className="toggle">{getLogo()}</div>

                {this.state.width < 620 ? (
                  <Bottom
                    scroll={scroll}
                    changeBlog={changeBlog}
                    theme={theme}
                  />
                ) : null}
              </div>
            </header>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

Navbar.propTypes = {
  display: PropTypes.string, //how to display nav-items . "row"
  scroll: PropTypes.bool, //whether to use 'react-scroll' or 'gatsby-link',
  changeBlog: PropTypes.bool,
}
