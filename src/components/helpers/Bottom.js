import React from 'react'
import styled from 'styled-components';
import NavItems from './nav_items';


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
    background-color:#fcfcff;
    border-top:1.2px solid gray;
    box-shadow:1px 2px 18px rgba(0,0,0,.25);

    a{
        text-decoration:none;
        color:inherit;
        text-align:center;
        width:100%;
        padding:1em;
        font-size:1.1rem;
    }

    @media(min-width:700px){
        display:none;
    }
`



export default function Bottom(props) {

    return (
        <Nav >
            <NavItems 
                display={props.display}
                scroll={props.scroll}
                changeBlog={props.changeBlog}
                offset={-37}
                />
        </Nav>
    )
}
