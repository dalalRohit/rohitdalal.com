import React from 'react'
import  './../styles/components/blog.scss';
import {Link} from 'gatsby';
import Title from './UI/title';
import Layout from './Layout';
import AllBlogs from './AllBlogs';
 

export default function Blog(props) {
    const name="Blog";
    const x=(
        <div className="note">
            <Link to={`/blogs/`} >
                <p>See all blogs</p>
            </Link>
         </div>
    );

    return (
        <Layout name={name} id={name}  >
                <Title path={`${name}`}>/blog</Title>

                <div className="notice">
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

