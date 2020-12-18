import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  all: unset;
  z-index: 10;
  width: 5%;
  font-size: 50px;
`;

const VideoContainer = styled.div`
  width: 90%;
  display: flex;
`;
const Video = styled.div``;

const VideoSlider = ({ results }) => {
  const TOTAL_VIDEOS = results.length - 1;
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const nextVIdeo = () => {
    if (currentVideo >= TOTAL_VIDEOS) {
      setCurrentVideo(0);
    } else {
      setCurrentVideo(currentVideo + 1);
    }
  };
  const prevVideo = () => {
    if (currentVideo === 0) {
      setCurrentVideo(TOTAL_VIDEOS);
    } else {
      setCurrentVideo(currentVideo - 1);
    }
  };

  const widthCalc = (index) => {
    if (currentVideo === index) {
      return "100%";
    }
  };
  useEffect(() => {
    videoRef.current.style.transition = "all 0.5s ease-in-out";
    videoRef.current.style.transform = `translateX(-${currentVideo}00%)`;
  }, [currentVideo]);

  return (
    <Container>
      <Button onClick={prevVideo}>＜</Button>
      <VideoContainer ref={videoRef}>
        {results.map((video, index) => (
          <Video>
            <ReactPlayer
              width={widthCalc(index)}
              index={index}
              key={video.id}
              url={`https://www.youtube.com/watch?v=${video.key}`}
            />
          </Video>
        ))}
      </VideoContainer>
      <Button onClick={nextVIdeo}>＞</Button>
    </Container>
  );
};
VideoSlider.propTypes = {
  results: PropTypes.array.isRequired,
};

export default VideoSlider;
