import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
const Name=styled.h1`
    transition: all 0.3s linear;
    font-size:2.2em;
    a{
        color:inherit;
        text-decoration:none;
    }

`
export default function Title(props) {
    return (
        <Name> 
            <Link 
                to={`/#${props.path}`}
                smooth={true}
                duration={200}
                > {props.children} </Link>
        </Name>
    )
}
