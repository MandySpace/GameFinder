import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* :root{
    --color-light-font: #202020;

    --color-light-body: #fff;

     --color-light-font: #fff;

    --color-light-body: #1a1a1a;

    --color-primary: #186ED7;

    --color-primary-dark: #00439C;
}   */

.light {

    --color-light-font: #202020;

    --color-light-body: #fff;

    --color-primary: #186ED7;

    --color-primary-dark: #00439C;

}

.dark{
    --color-light-font: #fff;

    --color-light-body: #1a1a1a;

    --color-primary: #186ED7;

    --color-primary-dark: #00439C;
}

* {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}

html {
    font-size: 100%;
    &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: #0000000; */
    border-radius: 50px;
  }


  @media screen and (max-width: 93.75em){
      font-size: 75%;
  }

  @media screen and (max-width: 57.81em){
      font-size: 60%;
  }

  @media screen and (max-width: 40.625em){
      font-size: 40%;
  }
  
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 100%;
    color: var(--color-light-font);
    background-color: var(--color-light-body);
}

h2 {
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem 0;
}

h3 {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.5rem 0 .25rem 0;
}

p {
    font-size: 1rem;
    padding: .25rem 0;
}

a {
    text-decoration: none;
    color : var(--color-light-font);
}
`;

export default GlobalStyles;
