import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LinkTo = styled.a`
  margin-left: 10px;
  font-size: 25px;
  border: 1px solid #fcd303;
  color: black;
  padding: 5px;
  border-radius: 5px;
  background-color: #fcd303;
  font-weight: 700;
  display: block;
  text-align: center;
  width: ${(props) => (props.footer ? "100px" : null)};
`;

const IMDB = ({ id, footer = false }) => (
  <>
    {footer ? (
      <LinkTo
        href={"https://www.imdb.com"}
        target="_blank"
        footer={footer}
        rel="noopener noreferrer"
      >
        IMDB
      </LinkTo>
    ) : (
      <LinkTo
        href={id && `https://www.imdb.com/title/${id}`}
        target="_blank"
        footer={footer}
        rel="noopener noreferrer"
      >
        IMDB
      </LinkTo>
    )}
  </>
);

IMDB.propTypes = {
  id: PropTypes.string,
  footer: PropTypes.bool,
};

export default IMDB;
