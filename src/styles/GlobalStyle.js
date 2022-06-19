import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;   
    }
    html {
        font-size: 10px;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        background-color: hsla(295, 45%, 70%, 1);
    }
`;

export default GlobalStyle;
