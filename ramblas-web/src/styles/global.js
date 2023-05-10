import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{

    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {

    widht: 100vw;
    height: 100vh;
    background-color: rgb(201, 76, 76);
    font-family: sans-serif;    

}

`;

export default GlobalStyle;
