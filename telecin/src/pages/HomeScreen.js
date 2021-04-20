import React, { useState } from "react";

import {Redirect} from 'react-router-dom'

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { getTopRatedSeries, getPopularSeries } from "../action/tvSeriesAction";

import Carousel from "react-multi-carousel";

import HeroImage from "../images/TEL-IMAGE-HOME.jpg";

import "../css/homescreen.css";


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

export default function HomeScreen() {

  const [redirectTo, setRedirectTo] = useState(false)
  const[tempId,setTempId] = useState(null)


  const { topRatedSeries, popularSeries } = useSelector((state) => {
    return {
      topRatedSeries: state.movieReducer.dataTopRatedSeries,
      popularSeries: state.movieReducer.dataPopularSeries
    };
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTopRatedSeries());
    dispatch(getPopularSeries())
  }, []);


  const handleToDetail = (id_series) => {
      setTempId(id_series)
      setRedirectTo(true)
  }

  if(redirectTo === true){
    return <Redirect to={`/detailseries?id=${tempId}`}/>
  }

  return (
    <div>
      <Container
        maxWidth="xl"
        style={{
          backgroundImage: `url(${HeroImage})`,
          width: "100%",
          height: "650px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} style={{ padding: "38% 5%" }}>
                <p className="TitleCover">
                  Find Your Favorite TV Series information !
                </p>
                <p className="TitleCover">Only On</p>
                <p className="TitleCover">TELECIN</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className="ContainerSizing">
        <Grid container>
          <Grid item xs={12}>
            <p className="TitleHeader">Most Popular TV Series All Time</p>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "3%" }}>
            <Carousel responsive={responsive} autoPlay >
              {popularSeries.map((item, index) => {
                return (
                  <Card key={index} style={{margin: '0% 4.4%'}} onClick={() => handleToDetail(item.id)}>
                    <CardActionArea>
                      <CardMedia
                        image={
                          "https://image.tmdb.org/t/p/original/" + item.poster_path
                        }
                        title={item.name}
                        style={{
                          width: "100%",
                          height: "250px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                        }}
                      />
                    </CardActionArea>
                  </Card>
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className="ContainerSizing">
        <Grid container>
          <Grid item xs={12}>
            <p className="TitleHeader">Top Rated TV Series All Time</p>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "3%" }}>
            <Carousel responsive={responsive} autoPlay>
              {topRatedSeries.map((item, index) => {
                return (
                  <Card key={index} style={{margin: '0% 4.4%'}} onClick={() => handleToDetail(item.id)}>
                    <CardActionArea>
                      <CardMedia
                        image={
                          "https://image.tmdb.org/t/p/original/" + item.poster_path
                        }
                        title={item.name}
                        style={{
                          width: "100%",
                          height: "250px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                        }}
                      />
                    </CardActionArea>
                  </Card>
                );
              })}
            </Carousel>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}
