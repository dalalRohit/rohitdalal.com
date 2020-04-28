import React,{useEffect} from 'react'
import styled from 'styled-components';
import {Link,scrollSpy}  from "react-scroll";

const Li=styled.li`
    box-sizing:border-box;
    margin:0;
    font-size:1.23em;
    cursor:pointer;
    text-decoration:none;
    a:hover{
        border-bottom:1.4px solid purple;
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
        padding:.4em;
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

    useEffect( () => {
        scrollSpy.update();
    })
    return (
        <Ul>
            {
                links.map( (link) => {
                    return (
                        <Li>
                            <Link
                                onClick={props.click}
                                to={link}
                                isDynamic
                                smooth={true}
                                duration={500}
                                offset={offset}
                            >
                            {link}</Link>
                        </Li>
                    )
                })
            }
            
        </Ul>
    )
}
