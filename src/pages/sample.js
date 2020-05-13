import React from 'react';
import Bottom from './../components/helpers/Bottom';
import {StaticQuery,graphql} from 'gatsby';

const Sample=() => {
    const tag="chelsea";

    return(
        <>
            <StaticQuery 
                query={
                    graphql`
                        query($tag:String){
                            allMdx(filter:{frontmatter:{tags:{eq:$tag}}}){
                                edges{
                                    node{
                                        frontmatter{
                                            title,
                                            tags
                                        }
                                    }
                                }
                            }
                        }
                    `
                }
                
                render={data => {
                    console.log(data);
                    data.allMdx.edges.forEach( (edge) => {
                        return <span>{edge.node.frontmatter.title}</span>
                    })
                }}
            
            />
        </>
    )
}

export default Sample;