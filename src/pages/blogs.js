import React from 'react';

import AllBlogs from './../components/AllBlogs';
import PageLayout from './../components/pageLayout';
import Head from './../components/helpers/head';
import BlogFilter from './../components/helpers/BlogFilter';
import {graphql} from 'gatsby';

const Blogs=(props) => {
    return (
            <PageLayout 
                scroll={false}
                gradient={false}
                changeBlog={false}>

                <Head title="Blogs" info="Rohit Dalal" />
                <h1>All blogs </h1>  
                <BlogFilter />                 
                <AllBlogs  
                    margin={true}
                    blogs={props.data} />
            </PageLayout>
    )
};

export const blogQuery=graphql`
    query{
        allMdx{
            edges{
                node{
                    frontmatter{
                        title,
                        published,
                        date(formatString: "MMM Do YYYY"),
                        slug,
                        featuredImage{
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    src,
                                    srcSet
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

export default Blogs;