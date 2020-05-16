import React from 'react';
import {StaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';


const Sample=(props) => {

    return(
        <>
        {props.data.allImageSharp.edges.map( (edge) => {
            return (
                <div key={Math.random()} style={{width:"400px", height:"400px",margin:"10px",border:"1px solid red"}}>
                    <Img 
                        fluid={edge.node.fluid}
                        // fixed={edge.node.fixed}
                        
                        />
                </div>
            )
        })}
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