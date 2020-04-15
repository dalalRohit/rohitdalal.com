import React from 'react'
import BlogHeader from './../components/helpers/blog-header';
import classes from './blogtemplate.module.css';
import {graphql,useStaticQuery} from 'gatsby';

export const query=graphql`

query (
    $slug : String
  ){
    markdownRemark (
      fields :{
        slug:{
          eq: $slug
        }
      }
    ){
      frontmatter{
        title,
        date
      },
      html
    }
  }
`
export default function BlogTemplate(props) {
    return (
        <div className={classes.Wrapper}>
            <BlogHeader location="all blogs" path="/blogs"/>

            <main className={classes.Content}> 
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>

                <article dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}>

                </article>
            </main>
        </div>
    )
}
