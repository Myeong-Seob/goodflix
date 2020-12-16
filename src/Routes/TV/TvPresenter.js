import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from 'Components/Loader'
import Message  from 'Components/Message'

const Container = styled.div`
  padding: 0px 20px;
`;

const TitleText = styled.span``;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? <Loader /> : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title={"Top Rated"}>
          {topRated.map((show) => <TitleText key={show.id}>{show.name}</TitleText>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title={"Popular"}>
          {popular.map((show) => <TitleText key={show.id}>{show.name}</TitleText>)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title={"Popular"}>
          {airingToday.map((show) => <TitleText key={show.id}>{show.name}</TitleText>)}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error}/>}
    </Container>
  );

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TvPresenter;
