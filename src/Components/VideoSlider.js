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

const VideoSlider = ({ results }) => {
  return (
    <Container>
      <SubTitle text={"Video"} />
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
