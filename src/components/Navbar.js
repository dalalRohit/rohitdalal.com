import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './navbar.module.css';
import styled from 'styled-components';
import {MdMenu} from 'react-icons/md';
import Logo from './UI/logo';
import Sidenav from './sidenav';

const Li=styled.li`
    cursor:pointer;

    a:hover{
        border-bottom:1px solid white;
    }
`
export default class Navbar extends Component {
    state={
        show:false,
    }

    handleSideNav=() => {

        this.setState({
            show:!this.state.show
        })
    }
    render() {

        return (
            <div > 
                <Sidenav show={this.state.show} click={this.handleSideNav} />
                <div className={classes.Wrapper}>
                        <div onClick={this.handleSideNav} className={classes.Menu} >
                            <MdMenu size={30} />
                        </div>

                        <div className={classes.Logo}>
                            <Logo />
                        </div>
                        <div className={classes.Nav}>
                            <nav className="navbar navbar-expand-lg navbar-light ">
                            
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
                        </div>
                </div>
            </div>
        )
    }
}
