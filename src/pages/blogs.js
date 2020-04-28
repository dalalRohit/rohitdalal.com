import React,{useState} from 'react';
import BlogHeader from '../components/helpers/blog-header';
import AllBlogs from './../components/AllBlogs';
import Head from './../components/helpers/head';

import { ThemeProvider } from 'styled-components';
import {GlobalStyles,lightTheme,darkTheme} from './../components/global';
import { useDarkMode } from './../components/helpers/useDarkmode';

const Blogs=() => {
    const [theme, toggleTheme,componentMounted] = useDarkMode();
    if (!componentMounted) {
        return <div />
      };
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode} >
            <GlobalStyles />

            <>
                <Head title="Blogs" info="Rohit Dalal" />

                <BlogHeader 
                    location="portfolio"
                    path="/#Blog" 
                    click={toggleTheme}
                    theme={theme}
                    />
                
                <AllBlogs margin={true} />
            </>
        </ThemeProvider>
    )
};

export default Blogs;