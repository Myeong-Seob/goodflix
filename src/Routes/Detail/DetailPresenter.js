import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import VideoSlider from "Components/VideoSlider";
import IMDB from "Components/IMDB";
import Season from "Components/Season";
import SubTitle from "Components/SubTitle";
import Footer from "Components/Footer";

const Container = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Data = styled.div`
  padding: 40px;
  width: 60%;
  overflow: scroll;
`;

const TitleContiner = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Cover = styled.div`
  z-index: 1;
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const OverviewContainer = styled.div``;

const Video = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Goodflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Goodflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : null
            }
          />
          <Data>
            <TitleContiner>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              {result.imdb_id && <IMDB id={result.imdb_id} />}
            </TitleContiner>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>·</Divider>
              <Item>
                ⏱ {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>·</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
            </ItemContainer>
            <OverviewContainer>
              <SubTitle text={"Overview"} />
              <Overview>{result.overview}</Overview>
            </OverviewContainer>
            {result.videos && result.videos.results.length >= 1 && (
              <Video>
                <VideoSlider results={result.videos.results} />
              </Video>
            )}

            {result.seasons && result.seasons.length >= 1 && (
              <Season key={result.id} seasons={result.seasons} />
            )}
          </Data>
        </Content>
      </Container>
      <Footer />
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
