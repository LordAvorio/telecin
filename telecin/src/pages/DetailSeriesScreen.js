import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import {
  getDetailSeries,
  getDetailSeriesGenre,
  getDetailSeriesProducer,
  getDetailSeriesNetwork,
  getDetailSeriesTrailer,
  getDetailSeriesCasting,
  getDetailSeriesCompanies
} from "../action/tvSeriesAction";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";

import Carousel from "react-multi-carousel";

import "../css/detailTv.css";

import ProfileScreen from "../images/TEL-PP.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function DetailSeriesScreen() {
  const authResult = new URLSearchParams(window.location.search);
  const id_series = authResult.get("id");

  const {
    detailSeries,
    genredetailseries,
    producerDetailSeries,
    networkDetailSeries,
    trailerDetailSeries,
    castingDetailSeries,
    companiesDetailSeries
  } = useSelector((state) => {
    return {
      detailSeries: state.movieReducer.dataDetailSeries,
      genredetailseries: state.movieReducer.dataDetailGenreSeries,
      producerDetailSeries: state.movieReducer.dataDetailProducerSeries,
      networkDetailSeries: state.movieReducer.dataDetailNetworkSeries,
      trailerDetailSeries: state.movieReducer.dataDetailTrailerSeries,
      castingDetailSeries: state.movieReducer.dataDetailCastingSeries,
      companiesDetailSeries: state.movieReducer.dataDetailCompaniesSeries
    };
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchDataReducer = async () => {
      await dispatch(getDetailSeries(id_series));
      await dispatch(getDetailSeriesGenre(id_series));
      await dispatch(getDetailSeriesProducer(id_series));
      await dispatch(getDetailSeriesNetwork(id_series));
      await dispatch(getDetailSeriesTrailer(id_series));
      await dispatch(getDetailSeriesCasting(id_series));
      await dispatch(getDetailSeriesCompanies(id_series));
    };

    fetchDataReducer();
  }, []);

  const openOfficialWebsite = () => {
    window.open(`${detailSeries.homepage}`, "_blank");
  };

  return (
    <div>
      <Container
        maxWidth="xl"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailSeries.backdrop_path})`,
          width: "100%",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></Container>
      <Container maxWidth="xl" className="ContainerSizingDetail">
        <Grid container>
          <Grid item xs={12}>
            <p className="TitleSeries">{detailSeries.name}</p>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Card elevation={10} className="CardDetail">
                <Grid container>
                  <Grid item xs={12}>
                    <p className="CardText1">Genres :</p>
                  </Grid>
                  <Grid container>
                    {genredetailseries.map((item, index) => {
                      return (
                        <Grid item xs={4} key={index}>
                          <Card className="CardGenres">
                            <p className="CardTextGenres">{item.name}</p>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid container>
                    <Grid item xs={6}>
                      <Grid item xs={12} className="MarginTitleCard">
                        <p className="CardText1">First Release :</p>
                      </Grid>
                      <Grid item xs={12}>
                        <p className="CardText2">
                          {moment(detailSeries.first_air_date).format(
                            "D MMMM YYYY"
                          )}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid item xs={12} className="MarginTitleCard">
                        <p className="CardText1">Newest Release :</p>
                      </Grid>
                      <Grid item xs={12}>
                        <p className="CardText2">
                          {moment(detailSeries.last_air_date).format(
                            "D MMMM YYYY"
                          )}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="MarginTitleCard2">
                    <p className="CardText1">Producer :</p>
                  </Grid>
                  <Grid container>
                    {producerDetailSeries.map((item, index) => {
                      return (
                        <Grid item xs={2} key={index}>
                          <Card style={{ margin: "3% 4.5%", padding: "0%" }}>
                            <CardActionArea>
                              <CardMedia
                                image={
                                  item.profile_path === null
                                    ? ProfileScreen
                                    : "https://image.tmdb.org/t/p/original/" +
                                      item.profile_path
                                }
                                title={item.name}
                                style={{
                                  width: "100%",
                                  height: "84px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "100% 100%",
                                }}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid item xs={12} className="MarginTitleCard2">
                    <p className="CardText1">Channel :</p>
                  </Grid>
                  <Grid container>
                    {networkDetailSeries.map((item, index) => {
                      return (
                        <Grid item xs={3} key={index}>
                          <Card style={{ margin: "3% 5%", padding: "0%" }}>
                            <CardActionArea>
                              <CardMedia
                                image={
                                  item.logo_path === null
                                    ? ProfileScreen
                                    : "https://image.tmdb.org/t/p/original/" +
                                      item.logo_path
                                }
                                title={item.name}
                                style={{
                                  width: "100%",
                                  height: "100px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "contain",
                                }}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid item xs={12} className="MarginTitleCard2">
                    <p className="CardText1">Production House :</p>
                  </Grid>
                  <Grid container style={{marginBottom: '3%'}}>
                    {companiesDetailSeries.map((item, index) => {
                      return (
                        <Grid item xs={3} key={index}>
                          <Card style={{ margin: "3% 5%", padding: "0%" }}>
                            <CardActionArea>
                              <CardMedia
                                image={
                                  item.logo_path === null
                                    ? ProfileScreen
                                    : "https://image.tmdb.org/t/p/original/" +
                                      item.logo_path
                                }
                                title={item.name}
                                style={{
                                  width: "100%",
                                  height: "100px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "contain",
                                }}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card elevation={10} className="CardDetail">
                <Grid container>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ color: "white" }}
                      onClick={() => openOfficialWebsite()}
                    >
                      Visit Official Website
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <p className="overviewDetail">{detailSeries.overview}</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2} className="CardInfo">
                    <Grid container>
                      <Grid item xs={12} style={{ marginBottom: "5%" }}>
                        <p className="CardTextInfo">Rating</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <p className="CardTextInfo2">
                          {detailSeries.vote_average}%
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} className="CardInfo">
                    <Grid container>
                      <Grid item xs={12} style={{ marginBottom: "5%" }}>
                        <p className="CardTextInfo">Vote Count</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <p className="CardTextInfo2">
                          {detailSeries.vote_count}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} className="CardInfo">
                    <Grid container>
                      <Grid item xs={12} style={{ marginBottom: "5%" }}>
                        <p className="CardTextInfo">Total Seasons</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <p className="CardTextInfo2">
                          {detailSeries.number_of_seasons}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} className="CardInfo">
                    <Grid container>
                      <Grid item xs={12} style={{ marginBottom: "5%" }}>
                        <p className="CardTextInfo">Total Episode</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <p className="CardTextInfo2">
                          {detailSeries.number_of_episodes}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container style={{ margin: "5% 0%" }}>
                  <Grid item xs={12}>
                    <p className="TrailerTitle">Trailer</p>
                  </Grid>
                  <Grid item xs={12}>
                    {trailerDetailSeries ? (
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailerDetailSeries.key}`}
                        controls={true}
                        width="100%"
                      />
                    ) : (
                      <p className="TrailerTitle">Trailer Is Not Available</p>
                    )}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <p className="TrailerTitle">Cast & Crew</p>
                  </Grid>
                  <Grid item xs={12}>
                    {castingDetailSeries ? (
                      <Carousel responsive={responsive}>
                        {castingDetailSeries.map((item, index) => {
                          return (
                            <Card key={index} style={{ margin: "0% 4.5%" }}>
                              <CardActionArea>
                                <CardMedia
                                  image={
                                    "https://image.tmdb.org/t/p/original/" +
                                    item.profile_path
                                  }
                                  title={`${item.name} (${item.character})`}
                                  style={{
                                    width: "100%",
                                    height: "150px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%",
                                  }}
                                />
                              </CardActionArea>
                            </Card>
                          );
                        })}
                      </Carousel>
                    ) : (
                      <p className="TrailerTitle">
                        Cast & Crew Is Not Available
                      </p>
                    )}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
