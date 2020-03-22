import React from 'react'
import styled from 'styled-components';

const CardDiv=styled.div`
    width:80%;
    margin:0 10% 0 10%;
    height:300px;
    max-width:100%;
    box-sizing:border-box;
    border:1px solid purple;
    padding:1em;
`
export default function Card() {
    return (
        <CardDiv>
            <p>Card</p>
        </CardDiv>
    )
}
