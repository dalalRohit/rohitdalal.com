import React, { Component } from "react"
import PropTypes from "prop-types"
import Logo from "./UI/logo"
import NavItems from "./helpers/nav_items"

import Bottom from "./helpers/Bottom"
import Scroll from "react-scroll"
import ThemeContext from "../context/context"
import { IoIosMoon, IoIosSunny } from "react-icons/io"

var Events = Scroll.Events
var scrollSpy = Scroll.scrollSpy

export default class Navbar extends Component {
    state = {
        scrolled: false,
    }
    componentDidMount() {
        scrollSpy.update()
        window.addEventListener("scroll", this.navOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.navOnScroll)
        Events.scrollEvent.remove("begin")
        Events.scrollEvent.remove("end")
    }
    navOnScroll = () => {
        const top = window.scrollY > this.props.scrollHeight
        if (top === true) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false })
        }
    }

    render() {
        const { scroll, changeBlog, blogTitle } = this.props

        let navClass = ["navbar"]
        if (this.state.scrolled) {
            navClass.push("scrolled")
        }

        return (
            <ThemeContext.Consumer>
                {(theme) => {
                    const getLogo = () =>
                        theme.dark ? (
                            <IoIosSunny size={30} onClick={theme.toggleDark} />
                        ) : (
                            <IoIosMoon size={30} onClick={theme.toggleDark} />
                        )

                    return (
                        <header
                            className="header"
                            style={{
                                background:
                                    navClass.length === 1
                                        ? "inherit"
                                        : theme.dark
                                        ? "#131313"
                                        : "#e7e7e7",
                            }}
                        >
                            <div className={navClass.join(" ")}>
                                <Logo scroll={scroll} />

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

                                {
                                    <Bottom
                                        scroll={scroll}
                                        changeBlog={changeBlog}
                                        theme={theme}
                                    />
                                }
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
