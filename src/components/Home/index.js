import styled from 'styled-components';

import UseSounds from 'hooks/UseSounds';

import GridButton from './GridButton';

 
export default function Home() {
 const {buttonsList}= UseSounds();

  return (
    <Wrapper>
          <Grid>
            {buttonsList.map(({soundPlay},index)=> { 
              return <GridButton key={index} soundPlay={soundPlay}/>
            })}
          </Grid>
    </Wrapper>
  

  )
}

const Wrapper = styled.div`


`;

const Grid = styled.div`
display: grid;
width: 400px;
height: 400px;
border: black solid 2px;
grid-template-columns: 1fr 1fr;
column-gap: 12px;
row-gap: 12px;
padding: 24px;
margin: auto;

@media(max-width:640px) {
  width: 300px;
  height: 300px;
}

`;
