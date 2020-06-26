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
                            const {frontmatter,excerpt,}=edge.node;
                            const {fluid}=frontmatter.thumbnail.childImageSharp;

                            return (
                                <BlogCard
                                    change={props.change}
                                    key={Math.random()}
                                    date={frontmatter.date}
                                    slug={frontmatter.slug}
                                    title={frontmatter.title}
                                    excerpt={excerpt}
                                    fluid={fluid}
                                    time={`${edge.node.fields.readingTime.text} `}
                                    tags={frontmatter.tags}
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
