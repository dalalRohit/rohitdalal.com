import React from 'react';
import Layout from '../components/helpers/layout';
import BlogHeader from '../components/helpers/blog-header';
import AllBlogs from './../components/AllBlogs';
import Head from './../components/helpers/head';
import 'bootstrap/dist/css/bootstrap.css';



const Blogs=() => {
    return (
        <Layout>
            <Head info="Blogs" />
            <BlogHeader 
                location="portfolio"
                path="/#Blog" />
            
            <AllBlogs />
        </Layout>
    )
};

export default Blogs;