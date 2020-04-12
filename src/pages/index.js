import React from "react"
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './../Global';
import Layout from './../components/layout';

import Head from './../components/head';
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
  <ThemeProvider theme={{mode:'light'}}>
    <>
    <GlobalStyles />
      <Layout>
        
        <Head info="MERN Stack Developer"/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </Layout>
    </>
  </ThemeProvider>

)

export default IndexPage
