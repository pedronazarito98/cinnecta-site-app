import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";

export const GlobalStyle = createGlobalStyle`
  :root{
        --background: #F6F6F6;
        --white: #fff;
        --background-card: #fcfcfc;
        --background-gray: #EBF1FF;
        --blue-40: #002163;
        --blue-50: #0055ff;
        --blue-80: #003297;
        --text: #6d6d6d;
        --gray-30: #d8d8d8;
        --placeholder: #9B9B9B;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body,input, textarea, button {
        font-family: 'Cabin', sans-serif;
    }
    p{
        font-family: 'Raleway', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }
    a{
        text-decoration: none;
        
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
