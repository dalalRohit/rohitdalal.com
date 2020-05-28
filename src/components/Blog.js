import React from 'react'
import  './../styles/components/blog.scss';
import {Link} from 'gatsby';
import Title from './UI/title';
import Layout from './Layout';
import AllBlogs from './AllBlogs';
 

export default function Blog(props) {
    const name="Blog";
    const x=(
        <div className="Note">
            <Link to={`/blogs/`} >
                <h3>See all blogs</h3>
            </Link>
         </div>
    );

    return (
        <Layout name={name} id={name}  >
                <Title path={`${name}`}>/blog</Title>

                <div style={{margin:"1em 1em 0 1em"}}>
                    <p>I like to write about javascript, web devlopement in general. <br/> Check out my blogs</p>          
                    
                    {x}
                </div>

                <div className="Blogs">

                    <AllBlogs
                        blogs={props.blogs}
                    />
                </div>
            
        </Layout>
    )
}

