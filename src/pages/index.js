import React,{useEffect,useState} from "react"

import PageLayout from './../components/pageLayout';
import {graphql} from 'gatsby';
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
                changeBlog={false}
                margin={false}                
                >
                <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

                <Home  />
                <About fluid={props.data.imageQuery.fluid}/>
                <Blog blogs={props.data.indexBlogQuery} />
                <Projects />
                <Contact  />

            </PageLayout>

        
    )

}

export const indexBlogQuery=graphql` 
  {
    indexBlogQuery:allMdx(limit:3,sort:{
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
                  fluid(maxWidth:300,maxHeight:200){
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

      imageQuery:imageSharp(fluid:{originalName:{eq:"me-cropped.jpg"}}){
        fluid(maxWidth:1000,traceSVG:{color:"#eee"}){
          ...GatsbyImageSharpFluid_tracedSVG
        },
        fixed{
          ...GatsbyImageSharpFixed_tracedSVG
        }
      },

  }
`

export default IndexPage
