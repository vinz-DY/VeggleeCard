import React from "react";
import styled from "styled-components";
``


const Card = () => {
  return (
    <div className="containerCard">
      <div className="headerCard">
        <img src="src/assets\pictures/vegglee.png" alt="image" />
      </div>
      <div className="mainCard">
        <h1>Vegglee</h1>
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
    </div>
  );
};


const StyledComponents = () => (
  <ContainerCards>
    <Title>Example Styled-Components</Title>
  </ContainerCards>
);
export default StyledComponents;
