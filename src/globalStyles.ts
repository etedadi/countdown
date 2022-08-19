import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #fff;
    @media (prefers-color-scheme: dark) {
        background-color: #4a4a4a;
        color: white;
    }

  }
  .icon32{
  width: 32px;
  }
`;

export default GlobalStyle;
