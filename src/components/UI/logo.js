import React from 'react';
import styled from 'styled-components';

const LogoDiv=styled.div`
    width:300px;
    font-weight:bold;
    padding:.2rem;
`

const LogoBrand=styled.h3`
cursor: pointer;

`
const Logo=() => {
    return (
        <LogoDiv>
            <LogoBrand title="Rohit Dalal | FullStack JavaScript Developer">Rohit Dalal</LogoBrand>
        </LogoDiv>
        )
}

export default Logo;