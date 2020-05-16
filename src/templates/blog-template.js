import React from 'react'
import Head from './../components/helpers/head';

import PageLayout from './../components/pageLayout';

import classes from './../styles/templates/blogtemplate.module.scss';
import {graphql,Link} from 'gatsby';
import {FaTwitter} from 'react-icons/fa';
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogTemplate(props) {
    const twitterShare=`https://www.twitter.com/intent/tweet?url=${window.location.href}&via=rohitdalal&text=${props.data.mdx.frontmatter.title}`
    return (

          <PageLayout 
            scroll={false}
            changeBlog={true}
            blogTitle={props.data.mdx.frontmatter.title}
            >

            <Head title={props.data.mdx.frontmatter.title} info={"Rohit Dalal"} />

            <div className={classes.Wrapper}>

                <article className={classes.Content}>
                  
                  <div className={classes.Info}>

                    <div className={classes.Metadata}>
                      <h1>{props.data.mdx.frontmatter.title}</h1>
                      <time> {props.data.mdx.frontmatter.date}   </time>
                      <span>{props.data.mdx.timeToRead} mins read</span>
                    </div>


                    <div className={classes.BlogShare}>
                        <a className="twitter-share-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on twitter"
                        href={twitterShare}>
                          <FaTwitter size={30}/>
                        </a>
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
                    
                    <MDXRenderer  >
                      {props.data.mdx.body}
                    </MDXRenderer>
                  
                  </main>
                
                </article>

                
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
            date(formatString: "MMM Do YYYY"),
            tags,
            featuredImage{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          body,
          rawBody
          timeToRead
      }
    }
`
