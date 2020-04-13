import React from "react"
import Layout from './../components/layout';

import Head from './../components/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Footer from './../components/UI/footer';

import 'bootstrap/dist/css/bootstrap.css';



const IndexPage = () => (
      <Layout>
        
        <Head info="MERN Stack Developer"/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </Layout>

)

export default IndexPage
