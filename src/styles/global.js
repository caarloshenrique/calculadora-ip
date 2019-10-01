import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font: 14px 'Roboto';
    background: #8557FF;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`