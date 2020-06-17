import React from 'react'
import Head from '../components/helpers/head';
import PageLayout from './../components/pageLayout';
import AllBlogs from './../components/AllBlogs';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const X=styled.div`
    .note{
        width:85%;
        margin:1rem 7.5% 0 7.5%;
        font-size:1.4rem;

        @media screen and (max-width:620px){
            width:100%;
            margin:0;
        }
    }
`
export default function Tag(props) {
    return (
        <PageLayout 
            scroll={false} 
            changeBlog={true} 
            margin={false}
            >
            
            <Head  title={`Blogs of "${props.pageContext ? props.pageContext.tag : ''}" `} info={"Rohit Dalal"} />
            <X>
                <p className="note">Showing all blogs tagged "{props.pageContext.tag}" </p>

                <AllBlogs blogs={props.data.blogQuery}/>
            </X>

        </PageLayout>
    )
}

export const tagQuery=graphql`
    query($tag:String)
    {
        blogQuery:allMdx(
            filter:{frontmatter:{tags:{in:[$tag]}}}
        ){
            edges{
                node{
                    frontmatter{
                        title,
                        date(formatString: "YYYY MMMM Do"),
                        slug,
                        tags
                    },
                    featuredImg{
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            },
                            fixed(width:290,height:170){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    excerpt,
                    body,
                    fields{
                        readingTime{
                            text
                        }
                    }
                }
            }
        }
    }
`
