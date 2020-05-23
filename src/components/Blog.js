import React from 'react'
import classes from './../styles/components/blog.module.scss';
import {Link} from 'gatsby';
import Title from './UI/title';
import Layout from './Layout';
import AllBlogs from './AllBlogs';
 

export default function Blog(props) {
    const name="Blog";
    const x=(
        <div className={classes.Note}>
            <Link to={`/blogs/`} >
                <h3>See all blogs</h3>
            </Link>
         </div>
    );

    return (
        <Layout name={name} id={name}  >
            <div className={"Wrapper"}>
                <Title path={`${name}`}>/blog</Title>

                <div style={{margin:"1em 1em 0 1em"}}>
                    <p>I like to write about javascript, web devlopement in general. <br/> Check out my blogs</p>          
                    
                    {x}
                </div>

                <div className={classes.Blogs}>

                    <AllBlogs
                        blogs={props.blogs}
                    />
                </div>
            </div>
            
        </Layout>
    )
}

