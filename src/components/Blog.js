import React from 'react'
import  './../styles/components/blog.scss';
import {Link} from 'gatsby';
import Title from './UI/title';
import Layout from './Layout';
import AllBlogs from './AllBlogs';
import Button from '@material-ui/core/Button';

export default function Blog(props) {
    const name="Blog";


    return (
        <Layout name={name} id={name}  >
                <Title path={`${name}`}>/blog</Title>

                <div className="notice">
                    <p>I like to write about javascript, web devlopement in general. <br/> Check out my blogs</p>          
                    
                    <div className="note">
                        <Button variant="contained" color="primary" disableElevation>
                            <Link to={`/blogs/`} >
                                See all blogs
                            </Link>
                        </Button>
                    </div>

                </div>

                <div className="Blogs">
                    <AllBlogs blogs={props.blogs}/>
                </div>
            
        </Layout>
    )
}

