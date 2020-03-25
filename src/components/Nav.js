import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './nav.module.css';
import {IoIosMenu} from 'react-icons/io';

export default class Nav extends Component {
    state={
        scrolled:false,
        isMenu:false
    }

    componentDidMount(){
        window.addEventListener('scroll',() => {
            const top=window.scrollY <800;
            if(top !== true){
                this.setState({scrolled:true})
            }
            else{
                this.setState({scrolled:false})
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    handleNav=() => {
        this.setState({
            isMenu:!this.state.isMenu,
        })
    }
    render() {
        var navClasses=[classes.Wrapper]
        if(this.state.scrolled){
            navClasses.push(classes.Scrolled);
        }

        return (
            <>
            <div className={navClasses.join(" ")}>

                <div className={classes.Brand}>
                    <h3 >Rohit Dalal</h3>
                </div>

                <div className={classes.Nav}>

                    <ul>
                        
                        <li>
                            <Link
                                to={"About"}
                                smooth={true}
                                duration={500}
                                >/about</Link>
                        </li>
                        <li>
                            <Link
                                to={"Projects"}
                                smooth={true}
                                duration={500}
                                offset={-58}>/projects</Link>
                        </li>
                        <li>
                            <Link
                                to={"Contact"}
                                smooth={true}
                                duration={500}
                                offset={-58}>/contact</Link>
                        </li>
                
                    </ul>
                
                    <div className={classes.Menu} onClick={this.handleNav}>
                        <IoIosMenu size={30} />
                    </div>
                </div>
            </div>
                
            <div className={classes.Mobile} style={{display:this.state.isMenu ? 'block' : 'none'}}>
                        <ul>
                            <li>
                                <Link
                                    to={"About"}
                                    smooth={true}
                                    duration={500}
                                    >/about</Link>
                            </li>
                            <li>
                                <Link
                                    to={"Projects"}
                                    smooth={true}
                                    duration={500}
                                    offset={-58}>/projects</Link>
                            </li>
                            <li>
                                <Link
                                    to={"Contact"}
                                    smooth={true}
                                    duration={500}
                                    offset={-58}>/contact</Link>
                            </li>
                        </ul>
            </div>
            

            </>
        )
    }
}
