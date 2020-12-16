import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image:url(${props => props.bgUrl});
    height:180px;
    background-size:cover;
    border-radius:4px;
    background-position:center center;
    transition: opacity .2s linear;
`;

const Rating = styled.span`
position:absolute;
    bottom: 5px;
    right:5px;
    opacity:0;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    &:hover{
        ${Image}{
            opacity:0.3;
        }
        ${Rating}{
            opacity:1;
        }
    }
    position:relative;
`;



const Title = styled.span`
    display:block;
    margin-bottom:3px;
`;

const Year = styled.span`
    font-size:10px;
    color:rgba(255,255,255,0.5);
`;

const Poster = ({ id,imageUrl, title, rating, year, isMove = false }) => (
  <Link to={isMove ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl? `https://image.tmdb.org/t/p/w300${imageUrl}`: ("https://images.unsplash.com/photo-1579990087546-177610dff49b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80") } />
        <Rating>
          <span role="img" aria-label="rating">
            🌟
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length >15 ? `${title.substring(0,18)}...` :title }</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMove: PropTypes.bool,
};

export default Poster