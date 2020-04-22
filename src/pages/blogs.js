import React from 'react';
import Layout from '../components/helpers/layout';
import BlogHeader from '../components/helpers/blog-header';
import AllBlogs from './../components/AllBlogs';
import Head from './../components/helpers/head';



const Blogs=() => {
    return (
        <Layout>
            <Head info="Blogs" />
            <BlogHeader 
                location="portfolio"
                path="/#Blog" />
            
            <AllBlogs margin={true} />
        </Layout>
    )
};

export default Blogs;