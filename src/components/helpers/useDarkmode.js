import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  let [theme, setTheme] = useState('light');
  if(window.localStorage.getItem('theme')!==''){
    theme=window.localStorage.getItem('theme');
  }
  // console.log('Theme :',theme);
  
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