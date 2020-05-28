import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';

const Photo=styled.div`

    width:60%;
    margin:1em 15% .5em 15%;
    z-index:-1;
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

    @media(max-width:700px){
        width:100%;
        margin:0;
    }
`
export default function Image(props) {
    return (
        <Photo>
            <Me>
                <Img
                    alt={"Rohit Dalal"}
                    title={"Rohit Dalal"}
                    style={
                        {margin: '.54rem',
                        maxWidth:"100%",
                        maxHeight: 'calc(65vh - 4rem)', }
                    }
                    imgStyle={{objectFit:"contain"}} 
                    fluid={props.fluid}  />
            </Me>
        </Photo>
    )
}
