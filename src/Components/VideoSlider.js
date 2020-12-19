import React from "react";
import ReactPlayer from "react-player/youtube";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Video = styled.div`
  width: 100%;
`;

const VideoSlider = ({ results }) => {
  return (
    <Container>
      <Title>Video</Title>
      <Video>
        <ReactPlayer
          width={"100%"}
          key={results.id}
          url={`https://www.youtube.com/watch?v=${results[0].key}`}
        />
      </Video>
    </Container>
  );
};
VideoSlider.propTypes = {
  results: PropTypes.array.isRequired,
};

export default VideoSlider;
