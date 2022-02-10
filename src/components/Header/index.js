import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function header ({isLight,handleToggletheme}) {
  return (
    <Wrapper>
        <h1>header</h1>
        <nav>
          <Link to={"/"}>Home</Link>     
         <Link to={"/About"}>About</Link>
        </nav>
        <button
      onClick={handleToggletheme}>
       Switch to {isLight ? " light" : "dark"} theme</button>
 </Wrapper>

  )
}

const Wrapper = styled.div`
 height: 80px;
 display:flex;
 justify-content: space-between;
 padding: 0 24px;
 align-items: center;
 border-bottom: solid 1px;
 & a{
   text-decoration: none;
   color: inherit;
  }
 & a:first child {
   margin-right:12px; 
 }   


 }

`;