import React from "react"
import Layout from '../components/helpers/layout';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';

import 'bootstrap/dist/css/bootstrap.css';


const IndexPage = () => (
      <Layout>
        
        <Head info="MERN Stack Developer"/>

        <Home />
        <About />
        <Blog/>
        <Projects />
        <Contact />
        
      </Layout>

)

export default IndexPage
