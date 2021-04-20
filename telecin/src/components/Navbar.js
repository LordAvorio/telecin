import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
                <img src={Logo} style={{ maxWidth: "100%", height: "auto", margin: '5% 0%' }} />
              </Grid>
              <Grid item xs={8}>
                <Grid container style={{ padding: "2% 0%" }} spacing={5}>
                  <Grid item xs={1}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <Button variant="outlined" color="secondary">
                        Home
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link to="/listseries" style={{textDecoration: 'none'}}>
                      <Button variant="outlined" color="secondary">
                        List Series
                      </Button>
                    </Link>
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
