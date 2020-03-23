import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import styled from 'styled-components';

const Li=styled.li`
    cursor:pointer;

    a:hover{
        border-bottom:1px solid white;
    }
`
export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#">Rohit Dalal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>

                        <ul className="navbar-nav">
                            <Li className="nav-item nav-link" >
                                <Link
                                    to={"About"}
                                    smooth={true}
                                    duration={500}
                                    >/about</Link>
                            </Li>
                            <Li className="nav-item nav-link">
                                <Link
                                    to={"Projects"}
                                    smooth={true}
                                    duration={500}
                                    >/projects</Link>
                            </Li>
                            <Li className="nav-item nav-link">
                                <Link
                                    to={"Contact"}
                                    smooth={true}
                                    duration={500}
                                    >/contact</Link>
                            </Li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
