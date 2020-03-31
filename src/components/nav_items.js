import React from 'react'
import styled from 'styled-components';

import { Link, animateScroll as scroll } from "react-scroll";
const Li=styled.li`
    cursor:pointer;
    text-decoration:none;
    a:hover{
        border-bottom:1.4px solid purple;
    }
`

export default function NavItems(props) {
    let offset=props.offset;
    return (
        <ul className="navbar-nav">
            <Li className="nav-item nav-link" >
                <Link
                    onClick={props.click}
                    to={"About"}
                    smooth={true}
                    duration={500}
                    offset={offset}
                    >/about</Link>
            </Li>
            <Li className="nav-item nav-link">
                <Link
                    onClick={props.click}
                    to={"Projects"}
                    smooth={true}
                    duration={500}
                    offset={offset}
                    >/projects</Link>
            </Li>
            <Li className="nav-item nav-link">
                <Link
                    onClick={props.click}
                    to={"Contact"}
                    smooth={true}
                    duration={500}
                    offset={offset}
                    >/contact</Link>
            </Li>
        </ul>
    )
}
