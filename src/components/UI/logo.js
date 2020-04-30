import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

const Name=styled.div`
    box-sizing:border-box;
    padding:.25em;
    display:flex;
    align-items:center;
    cursor:pointer;
    letter-spacing:5px;
    margin-right:5px;

    a{
        font-size:1.5rem;
        font-weight:500;
        color:inherit;
        text-decoration:none;
    }

    @media(max-width:700px){
        a{
            font-size:1.2rem;
        }
    }
`
export default function Logo() {
    return (
        <Name>
              <Link 
                to="/"

                >  Rohit Dalal </Link>
        </Name>
    )
}
