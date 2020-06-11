import React from 'react'
import styled from 'styled-components';
import rohit from './../../images/logo.svg';
import {Link} from 'gatsby';
import {Link as ScrollLogo} from 'react-scroll';

const Logo=styled.div`
    box-sizing:border-box;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    padding:.5em;
    img{
        margin:0 10px 0 10px;
        cursor:pointer;
        width:40px;
        height:40px;
    }
    p{
        cursor:pointer;
        font-size:1.35rem;
    }

    /* mobile */
    @media screen and (max-width:620px) {
        justify-content:flex-start;
        p{
            display:none;
        }
        img{
            margin:0;
        }
    }

    /* tablet */
    @media screen and (max-width:800px) {
        justify-content:flex-start;
    }

`

export default function logo(props) {
    return (
        <>
            {
                props.scroll ? (
                        <ScrollLogo to="Home" >
                            <Logo>
                                <img src={rohit}/>
                                <p>Rohit Dalal</p>
                            </Logo>
                        </ScrollLogo>
                )
                :
                (
                    <Link to="/">
                        <Logo>
                            <img src={rohit}/>
                            <p>Rohit Dalal</p>
                        </Logo>
                    </Link>
                )
            }
            
        </>
    )
}
