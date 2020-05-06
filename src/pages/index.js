import React from "react"



import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';



const IndexPage = () => {

  return (
            <>
            <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

            <Navbar 
                display="row"
                scroll={true} 
                gradient={true}
                />

            <Home  />
            <About />
            <Blog/>
            <Projects />
            <Contact  />

            <Footer  />
            </>

        
    )

}

export default IndexPage
