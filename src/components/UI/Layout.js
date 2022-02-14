 import styled, {ThemeProvider} from 'styled-components';
 import { useState } from 'react';
 import GlobalStyle from "./GlobalStyle";
 import lightTheme from "./themes/light.json";
 import darkTheme from "./themes/dark.json";

 import Header from "components/Header";
 import Footer from "components/Footer";
 import Home from "components/Home";

 



export default function Layout ({children}) {

    function handleToggletheme (){
        setIsLight(!isLight);
    }


    const[ isLight, setIsLight] = useState(true);
  return (
 <ThemeProvider theme={isLight ? lightTheme : darkTheme}> 
    <Wrapper>
     <GlobalStyle/>
      <Header isLight={isLight} handleToggletheme={handleToggletheme}/>
      <Home/>
      {children}
      <Footer/>
    </Wrapper>
 </ThemeProvider>  
  )
}

const Wrapper= styled.div``;

const Main = styled.div`
 min-height: calc(100vh - 192px);
 width: 96px;
 max-width: 1240px;
 margin: auto;
 margin-top: 32px;
`;
