import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${(props) => props.theme.background};
    width: 100%;
    height: 100vh;
  }

  #root {
    height: 100%;
  }

  @media screen and (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
