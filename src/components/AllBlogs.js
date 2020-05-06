import React from 'react'
import classes from './../styles/allblogs.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import BlogCard from './UI/blog_card';
import PropTypes from 'prop-types';

export default function AllBlogs(props) {

    const data=useStaticQuery(graphql`
        {
            contentful:allContentfulBlogs (
                sort:{
                    fields:publishedDate,
                    order:DESC
                },
                
            )
            {
                edges{
                    node{
                        title,
                        slug,
                        tags,
                        description,
                        publishedDate (formatString:"MMMM Do, YYYY"),
                        image{
                            fixed{
                                src,
                                width,
                                height
                                srcSet
                            },
                            fluid(maxWidth:500){
                                sizes,
                                src,
                                srcSet
                            },
                            file{
                                url
                            }
                        }

                    }
                }
            },

        }

    `)

    return (
            <main 
                className={classes.Blogs}
                style={{marginTop:props.margin ? '8.5vh' : '0'}}
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
                                    img={edge.node.image.fixed.src}
                                    srcset={edge.node.image.fluid.srcSet}
                                    time={'2 min read'}
                                    tags={edge.node.tags}
                                    />
                            )
                        })
                }
            </main> 
    )
}

AllBlogs.propTypes={
    margin:PropTypes.bool
}
