import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* Dimentions */
    --width: min(var(--max-width), 95%);
    --min-width: 700px;
    --max-width: 1140px;
    --section-padding: 5vh 5%;

    /* Colors */
    --main: #FFC759;
    --secondary: #5991FF;
    --light-gray: #DEDFE3;
    --gray: #9396A5;
    --white: #F6F6F6;
    --darker-blue: #252734;
    --dark-blue: #2D303F;
    --light-blue: #424657;

    /* Box Shadows */
    --shadow-flat: -11px 11px 0px #FFC759;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: clamp(14px, 16px, 3vw);
  }

  body: {
    height: 100%;
  }

  

`
