import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

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

const Text = styled.span``;

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
              <Text key={movie.id}>{movie.title}</Text>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title={"TV Show Results"}>
            {tvResults.map((show) => (
              <Text key={show.id}>{show.name}</Text>
            ))}
          </Section>
        )}
      </>
    )}
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
