import React from 'react'
import Head from '../components/helpers/head';
import PageLayout from './../components/pageLayout';
import {styled} from 'styled-components';
import AllBlogs from './../components/AllBlogs';
import { graphql } from 'gatsby';

export default function Tag(props) {
    return (
        <PageLayout scroll={false} changeBlog={true} >
            <Head  title={`Blogs of "${props.pageContext ? props.pageContext.tag : ''}" `} info={"Rohit Dalal"} />
            <h3>Showing all blogs with tag "{props.pageContext.tag}" </h3>

            <div>
                <AllBlogs 
                    blogs={props.data}/>
            </div>
        </PageLayout>
    )
}

export const tagQuery=graphql`
    query($tag:String){
        allMdx(
            filter:{frontmatter:{tags:{in:[$tag]}}}
        ){
            edges{
                node{
                    frontmatter{
                        title,
                        published,
                        date(formatString: "YYYY MMMM Do"),
                        slug,
                        featuredImage{
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    src
                                }
                            }
                        }
                        tags
                    },
                    excerpt,
                    body,
                    timeToRead
                }
            }
        }
    }
`
