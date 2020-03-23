import React from "react"

import Layout from './../components/layout';

import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Footer from './../components/UI/footer';

import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const IndexPage = () => (
  <Layout>
    
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>

)

export default IndexPage
