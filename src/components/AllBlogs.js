import React from 'react'
import classes from './../styles/helpers/allblogs.module.scss';
import BlogCard from './UI/blog_card';
import PropTypes from 'prop-types';
export default function AllBlogs(props) {
        
    return (
            <main 
                className={classes.Blogs}
                style={{marginTop:props.margin ? '8.5vh' : '0'}}
                >
                {
                        props.blogs.edges.map( (edge) => {
                            return (
                                <BlogCard
                                    change={props.change}
                                    key={Math.random()}
                                    date={edge.node.frontmatter.date}
                                    slug={edge.node.frontmatter.slug}
                                    title={edge.node.frontmatter.title}
                                    excerpt={edge.node.excerpt}
                                    fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                                    fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed}
                                    time={`${edge.node.timeToRead} mins read`}
                                    tags={edge.node.frontmatter.tags}
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
