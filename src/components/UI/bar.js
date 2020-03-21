import React from 'react'
import styled from 'styled-components';

const ProgressBar=styled.div`
    position:relative;
    height:20px;
    width:400px;
    border-radius:50px;
    border:1px solid #333;
    margin:10px;
`;

const Filler=styled.div`
    background:red;
    height:100%;
    border-radius:inherit;
    transition:width .2s ease-in;
`
export default function Bar(props) {
    return (
        <ProgressBar >
            <Filler style={{width:`${props.percentage}%`}} >
                {props.text}
            </Filler>
        </ProgressBar>
    )
}
