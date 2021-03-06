import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import Footer from "Components/Footer";

const Container = styled.div`
  padding: 20px;
  position: relative;
  padding-bottom: 100px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Goodflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <>
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
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title={"Coming Soon"}>
              {upcoming.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  isMove={true}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title={"Popular"}>
              {popular.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  isMove={true}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
          <Footer />
        </Container>
      </>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
