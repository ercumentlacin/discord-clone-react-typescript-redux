import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   .App {
    display: flex;
    background-color: #2f3135;
   }

   *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
    background-color: #2f3135;
  }

  *::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #000000;
  }



`;

export default GlobalStyle;
