import React,{useRef} from 'react';
import {StaticQuery,graphql} from 'gatsby';
import './../styles/style.scss';


const Sample=(props) => {
    
    return(
        <div className="layout">
            <header style={{position:'fixed',top:'0',left:'0'}}> HEADER </header>

            <main style={{position:'absolute',top:"20px"}}>MAIN</main>


            <footer style={{position:'absolute',bottom:'0'}}>FOOTER</footer>
        </div>
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