import { createGlobalStyle } from 'styled-components';
import { color } from "../GlobalStyles/color";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Cabin', sans-serif;
    color: ${color.dark};
    background-color: ${color.light}
  }
`;

export default GlobalStyle;