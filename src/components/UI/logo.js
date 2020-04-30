import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

const Name=styled.div`
    box-sizing:border-box;
    padding:.25em;
    cursor:pointer;
    letter-spacing:5px;
    margin-right:5px;

    a{
        color:inherit;
        text-decoration:none;
    }

    &:hover{
        color:red;
    }
`
export default function Logo() {
    return (
        <Name>
            <h3 >
              <Link 
                to="/"

                >  Rohit Dalal </Link>
            </h3>
        </Name>
    )
}
