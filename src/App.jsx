import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import styled from "styled-components";
import StyledComponents from "./components/card";

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  width: 600px;
`;

const Title = styled.h1`
  color: orange;
`;

const DivEmptyBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const EmptyButton = styled.button`
  border: none;
  padding: 2px;
  width: 80%;
  color: grey;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;

const FooterCard = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 1rem;
align-items: flex-start;
margin-left: 1rem;
margin-right: 1rem;
`;

const Button = styled.div`
border-radius: 1rem;
background-color: orange; 
padding: 0.5rem 2rem;
`
const Title2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`;
const Picture = styled.img`
  size: 1rem;
`;

function App() {
  return (
    <ContainerCards className="containerCard">
      <div className="headerCard">
        <Picture src="src/assets\pictures/vegglee.png" alt="image" />
      </div>
      <MainCard className="mainCard">
        <Title>Vegglee</Title>
        <h2>secondary text</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
          quasi, aut autem eos quas exercitationem numquam explicabo earum
          molestias, rem possimus maxime?
        </p>
      </MainCard>
      <DivEmptyBtn>
        <EmptyButton></EmptyButton>
      </DivEmptyBtn>
      <Title2>
        <h2>Subtitle</h2>
      </Title2>
      <FooterCard className="footerCard">
        <Button>item1</Button>
        <Button>item2</Button>
        <Button>item3</Button>
        <Button>item4</Button>
      </FooterCard>
    </ContainerCards>
  );
}

export default App;
