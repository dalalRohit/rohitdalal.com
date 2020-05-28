import React from 'react'
import Head from '../components/helpers/head';
import PageLayout from './../components/pageLayout';
import AllBlogs from './../components/AllBlogs';
import { graphql } from 'gatsby';

export default function Tag(props) {
    return (
        <PageLayout scroll={false} changeBlog={true} margin={true}>
            
            <Head  title={`Blogs of "${props.pageContext ? props.pageContext.tag : ''}" `} info={"Rohit Dalal"} />
            <h3>Showing all blogs with tag "{props.pageContext.tag}" </h3>

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
                        featuredImage{
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                },
                                fixed(width:290,height:170){
                                    ...GatsbyImageSharpFixed
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
