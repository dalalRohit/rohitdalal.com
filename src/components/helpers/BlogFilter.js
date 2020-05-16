import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import classes from './../../styles/helpers/blogfilter.module.scss';
import {useStaticQuery,graphql,Link} from 'gatsby';

import {getAllTags} from './../../static/data';


export default function BlogFilter() {
    const [blog,setCurrentBlog]=useState("");

    const data=useStaticQuery(graphql`
        query{
            allMdx{
                edges{
                    node{
                        frontmatter{
                            title,
                            slug,
                            tags,
                            date,
                            featuredImage{
                                childImageSharp{
                                    fluid(maxWidth:600){
                                        src
                                    }
                                }
                                
                            }

                        }
                        excerpt,
                        body
                    }
                }
            },
        }
    `)

    let allTags=getAllTags(data);

    const blogFilterHandler=(e) => {
        setCurrentBlog(e.target.value);
        data.allBlogs.edges.map( (edge) => {
            if(edge.node.title.toLowerCase().startsWith(e.target.value)){
                console.log("Blog found!");
            }
        })
    }
    

    return (
        <div className={classes.Filter}>
            <h3>Filter blogs by categories</h3>

            <div className={classes.Tags}>
                {Object.keys(allTags).map( (tag) => {
                    return (
                        <span className={"Tag"} key={Math.random()}>
                            <Link to={`/tags/${tag}`}>
                                {tag} <span className={classes.BlogCount}>{allTags[tag]}</span>
                            </Link>
                        </span>
                    )
                })}
            </div>

            {/* <div className={classes.Form}>
                <TextField
                    className={classes.Input}
                    label="Filter blogs"
                    placeholder="Type here to filter blogs.."
                    variant="outlined"
                    margin="normal"
                    onChange={(event) => blogFilterHandler(event)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div> */}
        </div>
    )
}
