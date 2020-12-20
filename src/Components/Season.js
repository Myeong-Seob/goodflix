import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SubTitle from "./SubTitle";

const Container = styled.div`
  width: 100%;
  margin-top: 15px;
`;
const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const ShowName = styled.span`
  margin: 5px 0px;
  font-size: 16px;
`;

const Date = styled.span`
  font-size: 16px;
`;

const Poster = styled.div`
  border-radius: 5px;
  background-image: url(${(props) => props.imgURL});
  width: 200px;
  height: 295px;
  background-position: center center;
  background-size: cover;
`;

const Season = ({ seasons }) => (
  <Container>
    <SubTitle text={"Seasons"} />
    <ItemContainer>
      {seasons.map((show) => (
        <Item>
          <Poster
            imgURL={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
          />{" "}
          <ShowName>{show.name}</ShowName>
          <Date>Year: {show.air_date.substring(0, 4)}</Date>
        </Item>
      ))}
    </ItemContainer>
  </Container>
);

Season.propTypes = {
  seasons: PropTypes.array.isRequired,
};

export default Season;
