import React from "react"

import PageLayout from './../components/pageLayout';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';


const IndexPage = (props) => {

  return (
            <PageLayout 
                scroll={true}
                gradient={true}
                changeBlog={false}
                
                >
                <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

                <Home  />
                <About />
                <Blog 
                    blogs={props.data}
                    />
                <Projects />
                <Contact  />

            </PageLayout>

        
    )

}

export const blogQuery=graphql`
query {
    allMdx(limit:3,sort:{
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
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
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
    }
  }
`

export default IndexPage
