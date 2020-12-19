import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LinkTo = styled.a`
  margin-left: 10px;
  font-size: 25px;
  border: 1px solid yellow;
  color: black;
  padding: 5px;
  border-radius: 5px;
  background-color: yellow;
  font-weight: 600;
`;

const IMDB = ({ id }) => (
  <LinkTo
    href={`https://www.imdb.com/title/${id}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    IMDB
  </LinkTo>
);

IMDB.propTypes = {
  id: PropTypes.string.isRequired,
};

export default IMDB;
