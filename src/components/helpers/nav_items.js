import React,{useRef} from 'react'
import styled from 'styled-components';
// import {Link, scrollSpy}  from "react-scroll";
import {Link} from 'gatsby';

const Li=styled.li`
    box-sizing:border-box;
    margin:0;
    font-size:1.23em;
    cursor:pointer;
    a{
        padding:.2em;
        text-decoration:none,
        color:inherit;
    }



`
const Ul=styled.ul`
    width:100%;
    box-sizing:border-box;
    margin-top:15px;
    height:8vh;
    min-height:8vh;
    display:flex;
    align-items:center;
    li{
        list-style-type:none;
        margin:.4em;
    }

    @media(max-width:699px){
        flex-flow:column;
        margin:0;
        height:100%;
        margin-top:0;
        li{
            margin:.5em;
        }
    }
`
export default function NavItems(props) {
    let offset=props.offset;
    let links=['About','Blog','Projects','Contact']


    const activeStyles={
        color:props.theme==='light' ? 'black' : 'white',
        background: props.theme==='light' ? '#b86b77' : '#b86b77'
    }
    return (
        <Ul>
            {
                links.map( (link) => {
                    return (
                        <Li>
                            <Link
                                key={Math.random()}
                                onClick={props.click}
                                to={`/#${link}`}
                                getProps={ (obj) => {
                                    // console.log(obj);
                                    return {
                                        style:{
                                            color:obj.location.hash===`#${link}`? activeStyles.color : 'inherit',
                                            background:obj.location.hash===`#${link}`? activeStyles.background : 'inherit'
                                        }
                                    }
                                }}

                            >
                            {link}</Link>
                        </Li>
                    )
                })
            }
            
        </Ul>
    )
}

/*
https://stackoverflow.com/questions/47488747/react-router-v4-active-anchor-link
https://reach.tech/router/example/active-links
<Link
    onClick={props.click}
    to={`/#${link}`}
    getProps={ (obj) => {
        console.log(obj);
        return {
            style:{
                color:obj.location.hash===`#${link}`? 'gray' : 'black',
                background:obj.location.hash===`#${link}`? 'white' : '#eee'
            }
        }
    }}

>
{link}</Link>
*/
