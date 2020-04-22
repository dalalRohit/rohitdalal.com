import React from 'react'
import classes from './blog.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import {IoIosArrowForward} from 'react-icons/io';
import BlogCard from './UI/blog_card';
import AllBlogs from './AllBlogs';

export default function Blog() {
    const data=useStaticQuery(graphql`
    {
        contentful:allContentfulBlogPost (
            sort:{
                fields:publishedDate,
                order:DESC
        })
        {
            edges{
                node{
                    title,
                    slug,
                    publishedDate (formatString:"MMMM Do, YYYY")
                }
            }
        },
        assets:allContentfulAsset (sort:{
            fields:title,
            order:DESC
            })
            {
                nodes{
                    file{
                    url
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

            <AllBlogs  />

            <footer>
                <Link to={`/blogs`}>
                    See all blogs
                </Link>
            </footer>
        </div>
    )
}
