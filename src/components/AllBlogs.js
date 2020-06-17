import React from 'react'
import BlogCard from './UI/blog_card';
import PropTypes from 'prop-types';
export default function AllBlogs(props) {
        
    return (
            <div 
                className="all-blogs"
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
                                    fluid={edge.node.featuredImg.childImageSharp.fluid}
                                    fixed={edge.node.featuredImg.childImageSharp.fixed}
                                    time={`${edge.node.fields.readingTime.text} `}
                                    tags={edge.node.frontmatter.tags}
                                />
                            )
                        })
                }
            </div> 
    )
}

AllBlogs.propTypes={
    margin:PropTypes.bool
}
