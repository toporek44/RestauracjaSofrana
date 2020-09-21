import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,500,700");
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;0,700;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');



*, *::before, *::after{
    box-sizing: border-box;
}

html{
font-size:62.5%;

scroll-behavior: smooth;
::-webkit-scrollbar {
  width: 15px;
  &-track{
    background: #f1f1f1;
  }
      &-thumb{
      background: #888;
          
          &:hover{
            background: #555;
          }
      }
  }
}



body{
    font-family:"Josefin Sans",sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}


`;

export default GlobalStyle;
