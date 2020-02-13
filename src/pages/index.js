import React from "react"

import Layout from './../components/layout';

import Home from './../components/Home';
import About from './../components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
  </Layout>

)

export default IndexPage
