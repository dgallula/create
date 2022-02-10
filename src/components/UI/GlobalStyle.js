import { createGlobalStyle } from "styled-components";

const GlobalStyle= createGlobalStyle`
  body{
    transition: linear 1s;  
    color:${props=> props.theme.mainColor} ;
    background-Color:${props=> props.theme.backgroundColor};
}
`;

export default GlobalStyle;