 import styled, {ThemeProvider} from 'styled-components';
 import { useState } from 'react';
 import GlobalStyle from "./GlobalStyle";
 import lightTheme from "./themes/light.json";
 import darkTheme from "./themes/dark.json";



export default function Layout ({children}) {

    function handleToggletheme (){
        setIsLight(!isLight);
    }


    const[ isLight, setIsLight] = useState(true);
  return (
 <ThemeProvider theme={isLight ? lightTheme : darkTheme}> 
    <div>
     <GlobalStyle/>
      {children}
      <button
      onClick={handleToggletheme}>
       Switch to {isLight ? " light" : "dark"} theme</button>
    </div>
 </ThemeProvider>  
  )
}

const wrapper= styled.div``;
