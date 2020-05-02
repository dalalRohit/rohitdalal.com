import React,{useState} from 'react';
import BlogHeader from '../components/helpers/blog-header';
import AllBlogs from './../components/AllBlogs';
import Head from './../components/helpers/head';


const Blogs=() => {
    return (
            <>
                <Head title="Blogs" info="Rohit Dalal" />

                <BlogHeader />
                
                <AllBlogs  margin={true} />
            </>
    )
};

export default Blogs;