import React,{useEffect,Fragment} from "react"
import {navigate} from 'gatsby';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';
import Footer from './../components/Footer';


import 'bootstrap/dist/css/bootstrap.css';



const IndexPage = () => {

  return (

        <Fragment>
          
          <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

          <Home  />
          <About />
          <Blog/>
          <Projects />
          <Contact  />

          {/* <Footer /> */}

        </Fragment>
        
    )

}

export default IndexPage
