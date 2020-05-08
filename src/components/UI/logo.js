import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as LinkItem} from 'gatsby';


const Name=styled.div`
    box-sizing:border-box;
    padding:.25em;
    display:flex;
    align-items:center;
    cursor:pointer;
    letter-spacing:5px;

    a h4{
        font-size:1.5rem;
        color:inherit;
        text-decoration:none;
        font-weight:480;

    }

    @media(max-width:700px){
        a h4{
            font-size:1.5rem;
            font-weight:500;
        }
    }
`
export default function Logo(props) {
    return (
        <Name>
            {
                props.scroll ? 
                <Link 
                    to="Home"
                    smooth
                    duration={300}
                >
                 <h4> Rohit Dalal </h4>
                </Link> :
                
                <LinkItem to="/">
                    <h4>Rohit Dalal</h4>
                </LinkItem>

            }

        </Name>
    )
}
