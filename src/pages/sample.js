import React from 'react';
import {StaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';
import Navbar from './../components/Navbar';

const Sample=(props) => {
    return(
        <>
            <Navbar />

            <div style={{height:"200vh",backgroundColor:"red"}}>

            </div>
        </>
    )
}

export default Sample;

export const query=graphql`
    query{
        allImageSharp{
            edges{
                node{
                    fluid(maxWidth:350,maxHeight:200){
                        ...GatsbyImageSharpFluid_tracedSVG
                    },
                    fixed(width:400,height:200){
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    }
`