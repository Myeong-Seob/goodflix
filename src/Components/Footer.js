import React from "react";
import styled from "styled-components";
import IMDB from "./IMDB";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const ImdbContainer = styled.div``;

const Text = styled.p`
  font-size: 3em;
  font-weight: 700;
  text-shadow: 1px 1px 2px grey, 0 0 0.3em white, 0 0 0.1em white;
`;

const Footer = () => (
  <Container>
    <Text>GOODFLIX</Text>
    <ImdbContainer>
      <IMDB footer={true} />
    </ImdbContainer>
  </Container>
);

export default Footer;
