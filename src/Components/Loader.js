import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const animate = keyframes`
    0%,40%,100%{
      transform:scale(0.2);  
    }
    20%{
      transform:scale(1);  
    }
`;

const Ul = styled.ul`
    display: flex;
`;

const Li = styled.li`
    width:40px;
    height:40px;
    background:#fff;
    border-radius:50%;
    animation: ${animate} 1.6s ease-in-out infinite;
    :nth-child(1){
        animation-delay: -1.4s;
        background:#ffff00;
        box-shadow: 0 0 50px #ffff00;
    }
    :nth-child(2){
        animation-delay: -1.2s;
        background:#76FF03;
        box-shadow: 0 0 50px #76FF03;
    }
    :nth-child(3){
        animation-delay: -1s;
        background:#F06292;
        box-shadow: 0 0 50px #F06292;
    }
    :nth-child(4){
        animation-delay: -0.8s;
        background:#4FC3F7;
        box-shadow: 0 0 50px #4FC3F7;
    }
    :nth-child(5){
        animation-delay: -0.6s;
        background:#BA68C8;
        box-shadow: 0 0 50px #BA68C8;
    }
    :nth-child(6){
        animation-delay: -0.4s;
        background:#F57C00;
        box-shadow: 0 0 50px #F57C00;
    }
    :nth-child(7){
        animation-delay: -0.2s;
        background:#673AB7;
        box-shadow: 0 0 50px #673AB7;
    }
`;



const Loader = () => (
  <Container>
      <Ul>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
      </Ul>
  </Container>
);

export default Loader;
