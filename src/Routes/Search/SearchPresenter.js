import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const TitleText = styled.span``;

const SearchPresenter = ({
  handleSubmit,
  movieResults,
  tvResults,
  searchTerm,
  updateTerm,
  loading,
  error,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        placeholder="Search Movies or TV Shows..."
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title={"Movie Results"}>
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title={"TV Show Results"}>
            {tvResults.map((show) => (
              <TitleText key={show.id}>{show.name}</TitleText>
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="#e74c3c" text={error}/>}
    {tvResults && movieResults && tvResults.length ===0 && movieResults.length===0 && <Message text="Nothing Found" color="#95a5a6" /> }
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
