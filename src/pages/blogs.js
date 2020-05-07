import React from 'react';

import AllBlogs from './../components/AllBlogs';
import PageLayout from './../components/pageLayout';
import Head from './../components/helpers/head';


const Blogs=() => {
    return (
            <PageLayout scroll={false} gradient={false}>
                <Head title="Blogs" info="Rohit Dalal" />
                                
                <AllBlogs  margin={true} />
            </PageLayout>
    )
};

export default Blogs;