import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const TitleText = styled.span``;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title={"Now Playing"}>
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              isMove={true}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date&&movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title={"Coming Soon"}>
          {upcoming.map((movie) => (
            <TitleText key={movie.id}>{movie.title}</TitleText>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title={"Popular"}>
          {popular.map((movie) => (
            <TitleText key={movie.id}>{movie.title}</TitleText>
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
