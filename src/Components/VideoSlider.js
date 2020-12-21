import React from "react";
import ReactPlayer from "react-player/youtube";
import PropTypes from "prop-types";
import styled from "styled-components";
import SubTitle from "./SubTitle";

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Video = styled.div`
  width: 100%;
`;

const Error = styled.p``;

const VideoSlider = ({ results }) => {
  return results[0].key ? (
    <Container>
      <SubTitle text={"Video"} />
      <Video>
        <ReactPlayer
          width={"100%"}
          url={`https://www.youtube.com/watch?v=${results[0].key}`}
        />
      </Video>
    </Container>
  ) : (
    <Error>No Video</Error>
  );
};
VideoSlider.propTypes = {
  results: PropTypes.array.isRequired,
};

export default VideoSlider;
