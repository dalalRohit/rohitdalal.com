import { useEffect, useState } from 'react';

//https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36
import {window} from 'browser-monads';

export const useDarkMode = () => {
  let [theme, setTheme] = useState('light');
  
  // const windowObj=typeof window==='undefined' ? null :window;

  
  // if(window.localStorage.getItem('theme')!==''){
  //     theme=window.localStorage.getItem('theme');
  // }

  const [componentMounted, setComponentMounted] = useState(false);


  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };


  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');
    
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];



};