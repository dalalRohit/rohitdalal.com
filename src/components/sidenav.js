import React from 'react'
import Backdrop from './UI/backdrop';
import classes from './sidenav.module.css';
import Logo from './UI/logo';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Li=styled.li`
    cursor:pointer;

    a:hover{
        border-bottom:1px solid white;
    }
`

export default function Sidenav(props) {
    let attachedClasses = [classes.Sidenav, classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidenav, classes.Open];
    }
    return (
        <div>
            <Backdrop  
                show={props.show}
                click={props.click}
                />

            <div className={attachedClasses.join(' ')}>
                
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav className={classes.Items}>
                    <ul className={classes.Links}>
                        <Li >
                            <Link
                                onClick={props.click}
                                to={"About"}
                                smooth={true}
                                duration={500}
                                >/about</Link>
                        </Li>
                        <Li >
                            <Link
                                onClick={props.click}
                                to={"Projects"}
                                smooth={true}
                                duration={500}
                                >/projects</Link>
                        </Li>
                        <Li >
                            <Link
                                onClick={props.click}
                                to={"Contact"}
                                smooth={true}
                                duration={500}
                                >/contact</Link>
                        </Li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}
