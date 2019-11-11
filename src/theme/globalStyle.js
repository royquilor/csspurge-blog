import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');
  @font-face {
      font-family: 'Marvin Visions Big';
      src: url('../../staticMarvinVisionsBig-Bold.woff2') format('woff2'),
          url('../../staticMarvinVisionsBig-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }
  body {
    padding: 0;
    margin: 0;

  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1 {
    font-family: 'Marvin Visions Big'!important;
    font-size:8rem;
  }
`;
