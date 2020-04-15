import React from 'react'
import classes from './blog.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import {IoIosArrowForward} from 'react-icons/io';

export default function Blog() {
    const data=useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    const name="Blog";

    return (
        <div id={name} className={classes.Wrapper}>
            <h1>/blog</h1>
            <p>Recently published blogs..</p>
            <main>
                <div className={classes.Blogs}>
                {
                    data.allMarkdownRemark.edges.map( (edge) =>{
                        return (
                            <div className={classes.Blog}>
                                <img src={"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
                                <Link to={`/blogs/${edge.node.fields.slug}`}><p>{edge.node.frontmatter.title}</p></Link>
                            </div>
                        )
                    })
                }
                </div>
                
                <div className={classes.All}>
                    <Link 
                        to="/blogs" 
                        style={{textAlign:'center',marginTop:'8px'}}>
                            
                            See all blogs <IoIosArrowForward />
                    </Link>
                </div>
            </main>
        </div>
    )
}
