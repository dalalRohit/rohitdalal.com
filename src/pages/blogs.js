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
                    blogs={props.data.blogsQuery} />
            </PageLayout>
    )
};

export const blogsQuery=graphql`
    {
        blogsQuery:allMdx(sort:{
            fields:[frontmatter___date],order:DESC
          }) {
            edges {
              node {
                frontmatter {
                  title
                  published
                  date(formatString: "MMM Do YYYY")
                  slug
                  featuredImage {
                    publicURL,
                    childImageSharp {
                      fluid{
                        ...GatsbyImageSharpFluid_tracedSVG
                      },
                      fixed(width:290,height:200){
                        ...GatsbyImageSharpFixed_tracedSVG
                      }
                    }
                  }
                  tags
                }
              excerpt
              body
              timeToRead
              }
            }
          },
    }
`

export default Blogs;