import React from 'react'
import BlogHeader from './../components/helpers/blog-header';
import classes from './blogtemplate.module.css';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
export const query=graphql`
  query($slug:String) {
    contentfulBlogPost(slug:{eq:$slug}){
      title,
      publishedDate (formatString:"MMMM Do, YYYY"),
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
          console.log(width,height);
          return <img alt={alt} src={url}/>
        }
      }
  }
    return (
        <div className={classes.Wrapper}>
            <BlogHeader location="all blogs" path="/blogs"/>

            {/*  MARKDOWN POST RENDER
            <main className={classes.Content}> 
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>

                <span className={classes.Details}>
                  <p>By Rohit Dalal | 3 mins read</p>
                  <p>{props.data.markdownRemark.frontmatter.date}</p>
                </span>
                <article dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}>

                </article>
            </main> 
            */}

            {/* Contentful post render */}
            <main className={classes.Content}>

            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p> {props.data.contentfulBlogPost.publishedDate} |  </p>
            {
              documentToReactComponents(props.data.contentfulBlogPost.body.json,options)
            }
            
            </main>
            
        </div>
    )
}
