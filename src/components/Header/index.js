import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function header () {
    
  
  return (
    <Wrapper>
        <h1>header</h1>
        <nav>
          <Link to={"/"}> 
            <MenuEl>Home</MenuEl>    
          </Link>
          <Link to={"/About"}> 
            <MenuEl>About</MenuEl>    
          </Link>
        </nav>
 </Wrapper>
  )
}

const Wrapper = styled.div`
 height: 80px;
 display:flex;
 justify-content: space-between;
 padding: 0 24px;
 border: solid 1px;
 align-items: center;
 & a{
   text-decoration: none;
   color: inherit;
  }
 & a:first-child {
   margin-right:16px; 
   
 }   

 

`;

const MenuEl = styled.p`

font-size:18px;
display:flex;
padding-bottom: 2px;
& :hover {
  background-color: gold;
  border-bottom: solid 2px 
}

`;