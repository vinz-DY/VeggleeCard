import { useState } from 'react'
import './App.css'
import Card from './components/card'
import styled from 'styled-components'
import StyledComponents from './components/card'

const ContainerCards = styled.div`
display:flex;
flex-direction: column;
border: solid 1px black;
`;

const Title = styled.h1`
color: orange;
`;

function App() {
  

  return (
   <ContainerCards className="containerCard">
      <div className="headerCard">
        <img src="src/assets\pictures/vegglee.png" alt="image" />
      </div>
      <div className="mainCard">
        <Title>Vegglee</Title>
        <h2>secondary text</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
          quasi, aut autem eos quas exercitationem numquam explicabo earum
          molestias, rem possimus maxime? Tenetur, omnis odio expedita doloribus
          explicabo veniam minus.
              </p>
              <button></button>
          </div>
          <div className="footerCard">
              <h2>Subtitle</h2>
              <button>item1</button>
              <button>item2</button>
              <button>item3</button>
              <button>item4</button>
          </div>
    </ContainerCards>
  );
};

export default App
