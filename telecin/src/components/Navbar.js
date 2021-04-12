import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import Logo from "../images/TEL-LOGO.svg";

export default function NavBar(props) {
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container>
              <Grid item xs={2}>
                <img src={Logo} style={{ maxWidth: "100%", height: "auto" }} />
              </Grid>
              <Grid item xs={8}>
                <Grid container style={{ padding: "1.5% 0%" }}>
                  <Grid item xs={1}>
                    <Link to="/">
                      <p>Home</p>
                    </Link>
                  </Grid>
                  <Grid item xs={1}>
                    <p>List Series</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
