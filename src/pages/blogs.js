import React from 'react';

import AllBlogs from './../components/AllBlogs';
import Navbar from './../components/Navbar';


import Head from './../components/helpers/head';


const Blogs=() => {
    return (
            <>
                <Head title="Blogs" info="Rohit Dalal" />
                
                <Navbar display="row" scroll={false}  />
                
                <AllBlogs  margin={true} />
            </>
    )
};

export default Blogs;