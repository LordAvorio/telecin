import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getListSeries,
  getListSeriesPagination,
  getGenreSeries,
  getTvSeriesGenre,
  getKeywords
} from "../action/tvSeriesAction";

import "../css/listScreen.css";

import MovieScreen from "../images/TELECIN-COVER-MOVIE-LIST.svg";


export default function ListSeriesScreen() {
  const [pageList, setPageList] = useState(1);
  const [genreSeries, setGenreSeries] = useState(0);
  const [redirectTo, setRedirectTo] = useState(false);
  const [tempId, setTempId] = useState(null);
  const [alertTrigger, setAlertTrigger] = useState(false);
  const [keyword,setKeyword] = useState("")
  const [alertText,setAlertText] = useState("")

  const { listSeries, generalSeries, dataGenres } = useSelector((state) => {
    return {
      listSeries: state.movieReducer.dataTvSeries,
      generalSeries: state.movieReducer.dataGeneralTvSeries,
      dataGenres: state.movieReducer.dataGenres,
    };
  });

  const paginationChange = async (event, value) => {
    await setPageList(value);
    dispatch(getListSeriesPagination(value, genreSeries));
  };

  const searchFilter = () => {
    if (genreSeries === 0) {
      return(
        setAlertTrigger(true),
        setAlertText("Inputan Filter Harap Diisikan !")
        ) 
    }
    console.log(genreSeries);
    dispatch(getTvSeriesGenre(genreSeries));
    setKeyword("")
  };

  const searchKeyword = () => {
    console.log(keyword)
    if(keyword === ""){
      return(
        setAlertTrigger(true),
        setAlertText("Keywords Harap Diisikan !")
      )
    }
    dispatch(getKeywords(keyword))
    setGenreSeries(0)
  }

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListSeries());
    dispatch(getGenreSeries());
  }, []);

  const handleToDetail = (id_series) => {
    setTempId(id_series);
    setRedirectTo(true);
  };

  if (redirectTo === true) {
    return <Redirect to={`/detailseries?id=${tempId}`} />;
  }

  return (
    <div>
      <Container maxWidth="xl" style={{ padding: "5%" }}>
        <Fade in={alertTrigger} style={{ marginTop: "2%" }}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertTrigger(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alertText}
          </Alert>
        </Fade>
        <Grid container style={{ marginTop: "1%" }} spacing={3}>
          <Grid item xs={3}>
            <Card style={{ marginTop: "24%", backgroundColor: "#0f3057" }}>
              <Grid item xs={12} style={{ backgroundColor: "#ff884b" }}>
                <p className="filterTitle">Filter</p>
              </Grid>
              <Grid item xs={12} style={{ padding: "5%" }}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel
                    id="labelGenres"
                    style={{ color: "#ff884b", fontSize: "20px" }}
                  >
                    Genres
                  </InputLabel>
                  <Select
                    labelId="labelGenres"
                    value={genreSeries}
                    onChange={(e) => setGenreSeries(e.target.value)}
                    color="secondary"
                    style={{
                      width: "100%",
                      color: "#ff884b",
                      marginTop: "7%",
                      paddingLeft: "3%",
                    }}
                  >
                    {dataGenres.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={item.id}
                          style={{
                            color: "#ff884b",
                            backgroundColor: "#0f3057",
                          }}
                        >
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "10% 0%", width: "100%" }}
                  onClick={() => searchFilter()}
                >
                  Filter Now
                </Button>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={6} style={{ marginBottom: "3%" }}>
                <Pagination
                  count={generalSeries.total_pages}
                  page={pageList}
                  onChange={paginationChange}
                  color="secondary"
                  style={{paddingTop: '3%'}}
                />
              </Grid>
              <Grid item xs={4} style={{ marginBottom: "3%" }}>
                <FormControl style={{ width: "100%" }}>
                  <TextField
                    label="Keywords"
                    color="secondary"
                    size="small"
                    style={{ margin: "0% 10%", color: 'red'}}
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2} style={{ marginBottom: "3%" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%", padding: "6%" }}
                  onClick={() => searchKeyword()}
                >
                  Search Now
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              {listSeries.map((item, index) => {
                return (
                  <Grid item xs={3} key={index}>
                    <Card onClick={() => handleToDetail(item.id)}>
                      <CardActionArea>
                        <CardMedia
                          image={
                            item.poster_path === null
                            ? MovieScreen :
                            "https://image.tmdb.org/t/p/original/" +
                            item.poster_path
                          }
                          title={item.name}
                          style={{
                            width: "100%",
                            height: "45vh",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
