import React from "react"
import styled from "styled-components"
import icon from "./../../images/logo.png"
import { Link } from "gatsby"

const Logo = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    img {
        height: 35px;
        width: 35px;
        margin-right: .7rem;
    }
    p {
        cursor: pointer;
        font-size: 1.35rem;
    }
    /* mobile */
    @media screen and (max-width: 620px) {
        justify-content: flex-start;
        p {
            display: none;
        }
        img {
            margin: 0;
        }
    }
    /* tablet */
    @media screen and (max-width: 800px) {
        justify-content: flex-start;
    }
`

export default function logo(props) {
    const altTitle = "Rohit Dalal | Full Stack Devloper"
    return (
        <>
            <Link to="/" alt={altTitle} title={altTitle}>
                <Logo>
                    <img src={icon} alt={altTitle} title={altTitle} />
                    <p>Rohit Dalal</p>
                </Logo>
            </Link>
        </>
    )
}
