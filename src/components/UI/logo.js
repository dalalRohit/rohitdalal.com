import React from 'react'
import styled from 'styled-components';

const Name=styled.div`
    box-sizing:border-box;
    padding:.25em;
    cursor:pointer;
    letter-spacing:5px;
    margin-right:5px;
`
export default function Logo() {
    return (
        <Name>
            <h3>Rohit Dalal</h3>
        </Name>
    )
}
