import React from "react"

import PageLayout from './../components/pageLayout';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';





const IndexPage = () => {

  return (
            <PageLayout 
                scroll={true}
                gradient={true}
                changeBlog={false}
                
                >
                <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

                <Home  />
                <About />
                <Blog/>
                <Projects />
                <Contact  />

            </PageLayout>

        
    )

}

export default IndexPage
