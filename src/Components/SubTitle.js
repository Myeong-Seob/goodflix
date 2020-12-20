import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SubTitle = ({ text }) => <Title>{text}</Title>;

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubTitle;
