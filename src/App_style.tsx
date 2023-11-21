import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BONX-Number';
    src: url('fonts/BMJUA_ttf.ttf') format('truetype');
  }

  body {
    font-family: 'BONX-Number', sans-serif;
  }
`

export default GlobalStyle;