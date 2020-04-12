import {createGlobalStyle} from 'styled-components';

const GlobalStyles=createGlobalStyle`
  body{
    background-color:${ props => 
      props.theme.mode==='dark' ? '#2d2d2d' : 'aliceblue'
    };
    color: ${ props => 
      props.theme.mode==='dark' ? '#EEE' : 'black'
    };
`;

export default GlobalStyles;