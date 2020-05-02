import React from 'react'
import classes from './../styles/blog.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import BlogCard from './UI/blog_card';
import Title from './UI/title';
import Layout from './Layout';
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
        <Layout name={name} id={name}  >
            <div  className={classes.Wrapper}>
                <Title path={`${name}`}>/blog</Title>
                <p>Recently published blogs..</p>            

                <div className={classes.Blogs}>
                    <AllBlogs />
                </div>

                <footer>
                    <Link to={`/blogs`}>
                        See all blogs
                    </Link>
                </footer>
            </div>
            
        </Layout>
    )
}
