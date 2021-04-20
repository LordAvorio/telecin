import React from 'react'

import { Redirect } from "react-router-dom";

import Lottie from "react-lottie";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import animationData from "../lottie/lf30_editor_lpfsetiq.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

export default function ErrorScreen() {
    return (
        <div>
            <Container  maxWidth="xl" style={{ padding: "5%" }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Lottie options={defaultOptions} height={450} width={450} />
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <p style={{textAlign: 'center', fontSize: '50px'}}>I think there is an error.....</p>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
