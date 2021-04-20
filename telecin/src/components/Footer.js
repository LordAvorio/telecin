import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";

import "../css/footer.css";

export default function Footer() {


  const openLinkedin = () => {
    window.open(`https://www.linkedin.com/in/gading-condro-prakoso-647211134`, "_blank");
  }

  const openGithub = () => {
    window.open(`https://github.com/LordAvorio`, "_blank");
  }

  const openInstagram = () => {
    window.open(`https://www.instagram.com/keselaktayo/`, "_blank");
  }


  return (
    <div>
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "#ff884b", marginTop: "5%" }}
      >
        <Grid container style={{ padding: "3% 10%" }}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <p className="textFooter">ⓒ 2021 Telecin</p>
            </Grid>
            <Grid item xs={12}>
              <p className="textFooter2">Your Favorite TV Series Portals</p>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={10} style={{ padding: "0% 35%" }}>
              <Grid item xs={1}>
                <IconButton>
                  <GitHubIcon fontSize="large" color="primary" onClick={() => openGithub()}/>
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <InstagramIcon fontSize="large" color="primary" onClick={() => openInstagram()} />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <LinkedInIcon fontSize="large" color="primary" onClick={() => openLinkedin()} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className="DividerFooter" />
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <p className="footerDescription1">Find Your Favorite.</p>
              </Grid>
              <Grid item xs={12}>
                <p className="footerDescription2">
                  Telecin provide complete list of information your favorite tv
                  series. From old to modern tv series, all genres that you love
                  are already here.
                </p>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <p className="footerDescription1">Powered By TMDB.</p>
              </Grid>
              <Grid item xs={12}>
                <p className="footerDescription2">
                  For the data, Telecin using API from TMDB site because it
                  provide complete information about tv & movie information. You
                  can check the offical website of TMDB.
                </p>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <p className="footerDescription1">Share your support.</p>
              </Grid>
              <Grid item xs={12}>
                <p className="footerDescription2">
                  Telecin is need your support to become a good and nicely
                  website. If you want make it better, you can partipate to
                  develop this website too in github.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
