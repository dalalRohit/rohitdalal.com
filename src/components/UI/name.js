import React from 'react'
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

import {IoIosArrowUp} from 'react-icons/io'
const Name=styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`

export default function name(props) {
    return (
        <Name>
            
            <Link
                to={props.to}
                smooth
                duration={500}
                >
                <IoIosArrowUp  size={30}/>
            </Link>
        </Name>
    )
}
