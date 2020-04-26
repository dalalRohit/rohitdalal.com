import React from 'react'
import Head from './../components/helpers/head';
import BlogHeader from './../components/helpers/blog-header';
import BlogFooter from './blog-footer';

import classes from './blogtemplate.module.css';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query=graphql`
  query($slug:String) {
    contentfulBlogPost(slug:{eq:$slug}){
      title,
      publishedDate (formatString:"MMMM Do, YYYY"),
      description{
        json
      },
      body{
        json
      }
    }
  }
`
export default function BlogTemplate(props) {

  const options={
      renderNode:{
        "embedded-asset-block" : (node) => {
          // console.log(JSON.stringify(node,undefined,4));
          const alt=node.data.target.fields.title['en-US'];
          const url=node.data.target.fields.file['en-US'].url;
          const details=node.data.target.fields.file['en-US'].details;
          const {width,height}=details.image;
          return <img alt={alt} src={url} width={"40%"} />
        }
      }
  }
    return (
      <>
        <Head title={props.data.contentfulBlogPost.title}  />
        <div className={classes.Wrapper}>

            <BlogHeader location="all blogs" path="/blogs"/>

            {/* Contentful post render */}
            <main className={classes.Content}>

              <h1>{props.data.contentfulBlogPost.title}</h1>
              <p> {props.data.contentfulBlogPost.publishedDate} |  </p>
              {
                documentToReactComponents(props.data.contentfulBlogPost.body.json,options)
              }
            
            </main>

            <BlogFooter />
            
        </div>
      </>
    )
}
