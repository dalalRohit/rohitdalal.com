import React from 'react'
import Head from './../components/helpers/head';
import SEO from './../components/seo';

import PageLayout from './../components/pageLayout';
import { window } from 'browser-monads';
import './../styles/templates/blogtemplate.scss';
import {graphql,Link} from 'gatsby';
import {IoLogoTwitter,IoMdArrowBack} from 'react-icons/io';
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogTemplate(props) {
    const {frontmatter,body,fields}=props.data.mdx;

    const twitterShare=`https://www.twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&via=rohitdalal&text=${encodeURIComponent(frontmatter.title)}`
    
    const image=frontmatter.thumbnail ? frontmatter.thumbnail.childImageSharp.fixed : null;

    const readingTime=fields.readingTime.text; //reading time
    // const {prevPost,nextPost}=props.pageContext;
    return (
          <PageLayout 
              scroll={false}
              changeBlog={true}
              blogTitle={frontmatter.title}
              margin={true}
              extraheight={true}
              scrollHeight={20}
            >
            
            <SEO 
              title={`${frontmatter.title} | Rohit Dalal`}
              description={body.excerpt} 
              image={image}
              postNode={props.data.mdx}
              postSEO />

            <Head title={frontmatter.title} info={"Rohit Dalal"} />


            <div className="blog">
                  
                  {/* blog metadata tags,title,date,share */}
                  <div className="info">
                    
                    <div className="back">
                      <Link to={`/blogs/`}>
                        <p> <IoMdArrowBack /> go to all blogs </p>
                      </Link>
                    </div>

                    <div className="metadata">
                       
                      <h1>{frontmatter.title}</h1>
                      <span className="meta"> 
                          <time> {frontmatter.date}   </time>
                          <span>{readingTime}</span>
                          <a
                          className="twitter" 
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Share on twitter"
                          href={twitterShare}>
                            <IoLogoTwitter size={25}/>
                          </a>
                      </span>
                      
                    </div>



                    <div className="tags">
                          {frontmatter.tags.map( (tag) => {
                            return (
                              <span className={"Tag"} key={Math.random()}>
                                <Link  to={`/tags/${tag}`} key={Math.random()} >{tag}</Link>
                              </span>
                            )
                          })}
                    </div>

                  </div>
                  
                  {/* Main blog content */}
                  <article className="article">
                    
                    <MDXRenderer  >
                      {body}
                    </MDXRenderer>
                  
                  </article>


                  {/* Previous and next posts 
                  <section className="reads">
                          
                  {prevPost && (<Link 
                    alt={prevPost.node.frontmatter.title} 
                    title={prevPost.node.frontmatter.title}
                    to={`/blogs/${prevPost.node.frontmatter.slug}`}>

                      <IoIosArrowBack  size={20}/> {prevPost.node.frontmatter.title} 
                  </Link>)
                  }

                  {nextPost===null ? null : (
                    <>
                      {
                        nextPost && (<Link 
                        alt={nextPost.node.frontmatter.title} 
                        title={nextPost.node.frontmatter.title}
                        to={`/blogs/${nextPost.node.frontmatter.slug}`}>

                          {nextPost.node.frontmatter.title} <IoIosArrowForward  size={20}/>
                        </Link>)
                      }
                    </>
                  )}

                  </section>
                  */}
                
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
            thumbnail{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                },
                fixed{
                  src,
                  width,
                  height
                }
              }
            }
          },
          body,
          rawBody,
          excerpt(pruneLength: 200),
          fields{
            readingTime{
              text
            }
          }
      }
    }
`
