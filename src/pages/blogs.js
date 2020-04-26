import React from 'react';
import Layout from '../components/helpers/layout';
import BlogHeader from '../components/helpers/blog-header';
import AllBlogs from './../components/AllBlogs';
import Head from './../components/helpers/head';

const Blogs=() => {
    return (
        <Layout>
            <Head title="Blogs" info="Rohit Dalal" />

            <BlogHeader 
                location="portfolio"
                path="/#Blog" />
            
            <AllBlogs margin={true} />
        </Layout>
    )
};

export default Blogs;