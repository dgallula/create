import styled from 'styled-components';

export default function footer() {
  return (
    <Wrapper><h1>footer</h1></Wrapper>

  )
}

const Wrapper = styled.footer`
height: 80px;
 display:flex;
 justify-content: center;
 align-items: center;
 border-top: solid 1px;

`;

