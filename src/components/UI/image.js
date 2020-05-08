import React from 'react'
import styled from 'styled-components';
import Pic from './../../images/me.jpg';

const Photo=styled.div`

    width:70%;
    margin:1em 15% .5em 15%;
    height:400px;
    border:1px solid black;
    padding:.3em;

    @media(max-width:700px){
        width:98%;
        margin:1em 1% .5em 1%;
    }
`

const Me=styled.div`
    box-sizing:border-box;
    width:80%;
    margin:0 10% 0 10%;
    height:100%;
    
    img{
        height:100%;
        width:100%;
    }

    @media(max-width:700px){
        width:100%;
        margin:0;
    }
`
export default function Image() {
    return (
        <Photo>
            <Me>
                <img src={Pic}  />
            </Me>
        </Photo>
    )
}
