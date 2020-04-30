import React,{Fragment} from 'react'

import { ThemeProvider } from 'styled-components';
import {GlobalStyles,lightTheme,darkTheme} from './global';
import { useDarkMode } from './helpers/useDarkmode';

export default function Layout(props) {

    console.log(lightTheme,darkTheme);
    //https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
    const [theme, toggleTheme,componentMounted] = useDarkMode();
    if (!componentMounted) {
        return <div />
        };
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <>
            <ThemeProvider theme={themeMode}>
                {/* <GlobalStyles > */}

                {props.children}

                {/* </GlobalStyles> */}

            </ThemeProvider>
        </>
    )
}
