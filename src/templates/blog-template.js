import React from 'react'
import Head from './../components/helpers/head';

import PageLayout from './../components/pageLayout';
import { window } from 'browser-monads';
import './../styles/templates/blogtemplate.scss';
import {graphql,Link} from 'gatsby';
import {IoLogoTwitter,IoMdArrowBack} from 'react-icons/io';
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogTemplate(props) {
    const twitterShare=`https://www.twitter.com/intent/tweet?url=${window.location.href}&via=rohitdalal&text=${props.data.mdx.frontmatter.title}`
    
    const {frontmatter,body}=props.data.mdx;
    const {text}=props.data.mdx.fields.readingTime; //reading time
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
                          <span>{text}</span>
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
          },
          featuredImg{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          body,
          rawBody
          fields{
            readingTime{
              text
            }
          }
      }
    }
`
