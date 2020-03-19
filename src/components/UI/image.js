import React from 'react'
import styled from 'styled-components';
import Pic from './../../images/COLOR_POP.jpg'
const Photo=styled.div`
    width:70%;
    margin:1em 15% .5em 15%;
    height:380px;
    border:2px solid black;
    padding:.3em;

    @media(max-width:699px){
        width:95%;
        margin:1em 2.5% .5em 2.5%;
    }
`
export default function image() {
    return (
        <>
            <Photo>
                Photo
                {/* <img src={Pic} width={"100%"} height={"100%"}/> */}
            </Photo>
        </>
    )
}
