
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root{
    --landing-bg: #8EC5FC;
    --landing-gradient:linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    --hover-color:#8EC5FC;
 
    --dark-landing: linear-gradient(to right, #434343, #000000); // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    --second-dark-landing:linear-gradient(to right, #485563, #29323c);
    --third-dark-landing:linear-gradient(to right, #606c88, #3f4c6b); //ash https://uigradients.com/#Ash 
    --fourth-dark-landing:linear-gradient(to right, #232526, #414345); // https://uigradients.com/#MidnightCity  
  }

  a{
    color:inherit;
    text-decoration:none;
    text-transform:none;
  }

  body {
    box-sizing:border-box;
    align-items: center;
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s ease-in-out;
  }
  
`

export const lightTheme={
    body: '#eee',
    text: 'black',
    toggleBorder: '#FFF',
    navbarBg:'#eee'
}

export const darkTheme={
    body: '#202020',
    text: '#eee',
    toggleBorder: '#202020',
    navbarBg:'#202020'
}