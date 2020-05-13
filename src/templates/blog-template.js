import React from 'react'
import Head from './../components/helpers/head';

import PageLayout from './../components/pageLayout';

import classes from './blogtemplate.module.scss';
import {graphql,Link} from 'gatsby';
import {FaTwitter,FaLinkedinIn} from 'react-icons/fa';
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function BlogTemplate(props) {

    return (

          <PageLayout 
            scroll={false}
            changeBlog={true}
            blogTitle={props.data.mdx.frontmatter.title}
            >

            <Head title={props.data.mdx.frontmatter.title} info={"Rohit Dalal"} />

            <div className={classes.Wrapper}>

                {/* Contentful post render */}
                <article className={classes.Content}>
                  
                  <div className={classes.Info}>
                    <h1>{props.data.mdx.frontmatter.title}</h1>
                    <time> {props.data.mdx.frontmatter.date}   </time>
                    <span>{props.data.mdx.timeToRead} mins read</span>

                    <div className={classes.BlogShare}>

                      <div className={classes.Twitter}>
                        <a className="twitter-share-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on twitter"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.data.mdx.frontmatter.title)} this is new`}>
                          <FaTwitter size={30}/>
                        </a>

                        <a className="twitter-share-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on LinkedIn"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.data.mdx.frontmatter.title)} this is new`}>
                          <FaLinkedinIn size={30}/>
                        </a>
                      </div>

                    </div>

                    <div className={classes.Tags}>
                          {props.data.mdx.frontmatter.tags.map( (tag) => {
                            return (
                              <span className={"Tag"} key={Math.random()}>
                                <Link  to={`/tags/${tag}`} key={Math.random()} >{tag}</Link>
                              </span>
                            )
                          })}
                    </div>

                  </div>
                  
                  <main className={classes.Data}>
                    
                    <MDXRenderer>
                      {props.data.mdx.body}
                    </MDXRenderer>
                  
                  </main>
                
                </article>

                {/* <aside className={classes.BlogNav}>
                  <p>Navigate</p>
                  <ul>
                  <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                  </ul>
                </aside> */}

                
            </div>
          
          </PageLayout>

    )
}


export const query=graphql`
    query($slug: String) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
          frontmatter {
            slug
            title
            date(formatString: "MMM Do YY"),
            tags
          }
          body,
          rawBody
          timeToRead
      }
    }
`
