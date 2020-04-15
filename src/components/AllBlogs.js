import React from 'react'
import classes from './allblogs.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';

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

export default function AllBlogs() {
    return (
        <div className={classes.Wrapper}>
            <h2>All blogs</h2>
        </div>
    )
}
