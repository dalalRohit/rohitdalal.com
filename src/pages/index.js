import React from "react"
import Layout from '../components/helpers/layout';

import Head from '../components/helpers/head';
import Home from './../components/Home';
import About from './../components/About';
import Projects from './../components/Projects';
import Contact from './../components/Contact';
import Blog from './../components/Blog';

import { ThemeProvider } from 'styled-components';
import {GlobalStyles,lightTheme,darkTheme} from './../components/global';
import { useDarkMode } from './../components/helpers/useDarkmode';

import 'bootstrap/dist/css/bootstrap.css';


const IndexPage = () => {
  //https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
  const [theme, toggleTheme,componentMounted] = useDarkMode();
  if (!componentMounted) {
      return <div />
    };
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <>
        <Head title={"Rohit Dalal"} info="MERN Stack Developer"/>

        <Home theme={theme} click={toggleTheme} />
        <About />
        <Blog/>
        <Projects />
        <Contact theme={theme} />

        </>
        
      </ThemeProvider>
    )

}

export default IndexPage
