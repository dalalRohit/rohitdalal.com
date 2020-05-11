import React from 'react';

import AllBlogs from './../components/AllBlogs';
import PageLayout from './../components/pageLayout';
import Head from './../components/helpers/head';
import BlogFilter from './../components/helpers/BlogFilter';


const Blogs=() => {
    return (
            <PageLayout 
                scroll={false}
                gradient={false}
                changeBlog={true}>

                <Head title="Blogs" info="Rohit Dalal" />
                <h1>All blogs </h1>  
                <BlogFilter />                 
                <AllBlogs  margin={true} />
            </PageLayout>
    )
};

export default Blogs;