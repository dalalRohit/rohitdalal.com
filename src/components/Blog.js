import React from 'react'
import classes from './../styles/blog.module.scss';
import {Link} from 'gatsby';
import Title from './UI/title';
import Layout from './Layout';
import AllBlogs from './AllBlogs';
 

export default function Blog() {

    const name="Blog";

    const x=(
        <div className={classes.Note}>
            <Link to={`/blogs/`} >
                <h4>See all blogs</h4>
            </Link>
         </div>
    );

    return (
        <Layout name={name} id={name}  >
            <div  className={"Wrapper"}>
                <Title path={`${name}`}>/blog</Title>
                
                <p className={classes.BlogText}>These are my recently published blogs. Check them out ...</p>          
                
                {x}

                <div className={classes.Blogs}>
                    <AllBlogs />
                </div>
            </div>
            
        </Layout>
    )
}
