import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

const Nav=styled.div`
    box-sizing:border-box;
    width:100%;
    position:fixed;
    right:0rem;
    left:0rem;
    bottom:0rem;
    min-height:8vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    z-index:100;
    background-color:#eee;
    border-top:1.2px solid gray;

    a{
        text-decoration:none;
        color:inherit;
        text-align:center;
        width:100%;
        padding:1em;
        // border:1px solid gray;
    }

    @media(min-width:700px){
        display:none;
    }
`
export default function Bottom(props) {
    return (
        <Nav style={{color:props.theme==='light' ? 'black' : '#eee',backgroundColor:props.theme==='light' ?  '#eee' : '#131313'}} >
            <Link to={`/#About`} >/about</Link>
            <Link to={`/#Blog`} >/blog</Link>
            <Link to={'/'} > /home </Link>
            <Link to={`/#Projects`} >/projects</Link>
            <Link to={`/#Contact`} >/contact</Link>
        </Nav>
    )
}
