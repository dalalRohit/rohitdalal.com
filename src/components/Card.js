import React from 'react'
import styled from 'styled-components';
const CardDiv = styled.div`
    width:100%;
    border:1px solid red;
    display:grid;
    gri-template-rows:4fr 1fr;
`

const CardImage = styled.div`
    width:90%;
    margin:0 5% 0 5%;
    border:1px dashed darkblue;
    padding:.3rem;
`
export default function Card(props) {
    return (
        <CardDiv>
            <CardImage>Image</CardImage>
            {props.children}
        </CardDiv>
    )
}
