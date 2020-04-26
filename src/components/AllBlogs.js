import React from 'react'
import classes from './allblogs.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import BlogCard from './UI/blog_card';

export default function AllBlogs(props) {

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

    return (
        <div className={classes.Wrapper}>

            <main 
                className={classes.Blogs} 
                style={{marginTop:props.margin ? '8vh' : '0'}}
                 >
                {
                        data['contentful'].edges.map( (edge,i) =>{
                            return (
                                <BlogCard
                                    change={props.change}
                                    key={Math.random()}
                                    date={edge.node.publishedDate}
                                    slug={edge.node.slug}
                                    title={edge.node.title}
                                    excerpt={edge.node.excerpt}
                                    img={data.assets.nodes[i].file.url}
                                    />
                            )
                        })
                }
            </main> 
        </div>
    )
}
