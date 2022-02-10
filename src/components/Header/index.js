import styled from 'styled-components';

export default function header ({isLight,handleToggletheme}) {
  return (
    <Wrapper>
        <h1>header</h1>
        <button
      onClick={handleToggletheme}>
       Switch to {isLight ? " light" : "dark"} theme</button>
 </Wrapper>

  )
}

const Wrapper = styled.header`
 height: 80px;
 display:flex;
 justify-content: space-between;
 padding: 0 24px;
 align-items: center;
 border-bottom: solid 1px;

`;