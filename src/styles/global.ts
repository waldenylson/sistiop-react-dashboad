// Resetar todos os estilos -------------------------------
import { createGlobalStyle } from 'styled-components';
import 'bootswatch/dist/slate/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    /* color: yellow; */

  }

  body {
    background-color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .center {
    justify-content: center;
    text-align: center;
  }
  
  .card-text-content {
    font-size: xx-large;
  }

  .span-badge-name-titles {
    width: 100%;
  }

  .card-header {
    padding: .5rem 1rem;
    margin-bottom: 0;
    background-color: #0a0a0a;
    border-bottom: 2px solid rgba(0,0,0,.6);
  }

  .card {
    min-width: 0;
    background-color: #101010;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: .25rem;
  }

  .blink {
    width:200px;
    height: 50px;
    color: red;
    padding: 15px;
    text-align: justify;
    line-height: 50px;
  }
  .span {
    font-size: 35px; 
    font-family: Verdana;
    font-weight: bold;
    color: white;
    animation: blink 1.3s linear infinite;
  }
  @keyframes blink {
    /*0%{opacity: 0;}*/
    50%{opacity: .0;}
    100%{opacity: 5;}
  }
`;

export default GlobalStyle;
