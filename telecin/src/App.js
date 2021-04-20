import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./components/Navbar";
import FooterComponent from './components/Footer'
import "../src/css/Prepare.css";

// Import Pages
import HomeScreen from "./pages/HomeScreen";
import DetailSeriesScreen from "./pages/DetailSeriesScreen"
import ListSeriesScreen from './pages/ListSeriesScreen'
import ErrorScreen from './pages/ErrorScreen'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f3057",
    },
    secondary: {
      main: "#ff884b",
    },
    background: {
      default: "#16213e",
    },
    text: {
        primary: '#ffff',
      },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/detailseries" component={DetailSeriesScreen} />
          <Route path="/listseries" component={ListSeriesScreen} />
          <Route path="/errorscreen" component={ErrorScreen} />
        </Switch>
        <FooterComponent/>
      </div>
    </ThemeProvider>
  );
}
