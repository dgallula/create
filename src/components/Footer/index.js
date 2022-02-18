import styled from 'styled-components';

export default function footer({isLight,handleToggletheme}) {
  return (
    <Wrapper>
       <button
      onClick={handleToggletheme}>
       Switch to {isLight ? " dark" : "light"} theme</button>
      </Wrapper>

  )
}

const Wrapper = styled.footer`
height: 200px;
 display:flex;
 justify-content: center;
 align-items: center;
 background-color:${props=>props.theme.mainColor};

`;

