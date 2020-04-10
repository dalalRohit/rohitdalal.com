import React from 'react'
import styled from 'styled-components';
import Pic from './../../images/sample.jpg'
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

const Me=styled.div`
    box-sizing:border-box;
    // width:80%;
    // margin:0 10% 0 10%;
    border:1px solid red;
    height:100%;
    
    img{
        height:100%;
        width:100%;
        padding:1em;

    }
`
export default function image() {
    return (
        <>
            <Photo>
                <Me>
                    <h4>Photo/Illus</h4>
                    {/* <img src={Pic}  /> */}
                </Me>
            </Photo>
        </>
    )
}
