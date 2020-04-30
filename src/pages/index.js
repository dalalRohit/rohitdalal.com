import React,{useEffect,Fragment} from "react"
import {navigate} from 'gatsby';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';
import Footer from './../components/Footer';

import { ThemeProvider } from 'styled-components';
import {GlobalStyles,lightTheme,darkTheme} from './../components/global';
import { useDarkMode } from './../components/helpers/useDarkmode';

import 'bootstrap/dist/css/bootstrap.css';



const IndexPage = () => {
  
  useEffect( () => {
    console.log('Page URL:',window.location);
  })

  //https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
  const [theme, toggleTheme,componentMounted] = useDarkMode();
  if (!componentMounted) {
      return <div />
    };
  const themeMode = theme === 'light' ? lightTheme : darkTheme;



  return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <Fragment>
          
          <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

          <Home theme={theme} click={toggleTheme} />
          <About />
          <Blog/>
          <Projects />
          <Contact theme={theme} />

          <Footer />

        </Fragment>
        
      </ThemeProvider>
    )

}

export default IndexPage
