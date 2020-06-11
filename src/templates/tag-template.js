import React from 'react'
import Head from '../components/helpers/head';
import PageLayout from './../components/pageLayout';
import AllBlogs from './../components/AllBlogs';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Note=styled.div`
    width:85%;
    max-width:100%;
    box-sizing:border-box;
    margin:55px 7.5% 1rem 7.5%;

    p{
        font-size:1.25rem;
    }

    @media(max-width:700px){
        margin-top:66px;
    }
`

export default function Tag(props) {
    return (
        <PageLayout 
            scroll={false} 
            changeBlog={true} 
            margin={true}
            
            >
            
            <Head  title={`Blogs of "${props.pageContext ? props.pageContext.tag : ''}" `} info={"Rohit Dalal"} />
            
            <Note>
                <p>Showing all blogs with tag "{props.pageContext.tag}" </p>
            </Note>

            <AllBlogs blogs={props.data.blogQuery}/>

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
