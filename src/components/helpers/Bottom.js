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
    min-height:6vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    z-index:99999;
    background-color:#eee;

    a{
        text-decoration:none;
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
    const {scroll,display,changeBlog,offset}=props;
    return (
        <Nav >
            <NavItems 
                display={display}
                scroll={scroll}
                changeBlog={changeBlog}
                offset={offset}
                />
        </Nav>
    )
}
