import { useState } from "react";
import "./App.css";
import styled from "styled-components";

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: flex-start;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Button = styled.div`
  border-radius: 1rem;
  background-color: ${(props) => (props.isHover ? "orange" : "white")};
  border: ${(props) => (props.isHover ? "solid 2px orange" : "none")};
  color: ${(props) => (props.isHover ? "white" : "black")};
  border: orange;
  padding: 0.5rem 2rem;
  border: solid 2px orange;
  cursor: pointer;
`;

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
  const [isButtonHovered, setIsButtonHovered] = useState({
    printemps: false,
    été: false,
    automne: false,
    hivers: false,
  });

  return (
    <ContainerCards className="containerCard">
      <div className="headerCard">
        <Picture src="src/assets\pictures/vegglee.png" alt="image" />
      </div>
      <MainCard className="mainCard">
        <Title>Vegglee</Title>
        <h2>Vers un monde meilleur</h2>
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
        <h2>Saisons</h2>
      </Title2>
      <FooterCard className="footerCard">
        <Button
          className="btnhover"
          onMouseEnter={() =>
            setIsButtonHovered({ ...isButtonHovered, printemps: true })
          }
          onMouseLeave={() =>
            setIsButtonHovered({ ...isButtonHovered, printemps: false })
          }
          isHover={isButtonHovered.printemps}
        >
          printemps
        </Button>
        <Button
          className="btnhover"
          onMouseEnter={() =>
            setIsButtonHovered({ ...isButtonHovered, été: true })
          }
          onMouseLeave={() =>
            setIsButtonHovered({ ...isButtonHovered, été: false })
          }
          isHover={isButtonHovered.été}
        >
          été
        </Button>
        <Button
          className="btnhover"
          onMouseEnter={() =>
            setIsButtonHovered({ ...isButtonHovered, automne: true })
          }
          onMouseLeave={() =>
            setIsButtonHovered({ ...isButtonHovered, automne: false })
          }
          isHover={isButtonHovered.automne}
        >
          automne
        </Button>
        <Button
          className="btnhover"
          onMouseEnter={() =>
            setIsButtonHovered({ ...isButtonHovered, hivers: true })
          }
          onMouseLeave={() =>
            setIsButtonHovered({ ...isButtonHovered, hivers: false })
          }
          isHover={isButtonHovered.hivers}
        >
          hivers
        </Button>
      </FooterCard>
    </ContainerCards>
  );
}



export default App;
