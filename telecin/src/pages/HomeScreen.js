import React from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeroImage from '../images/TEL-IMAGE-HOME.jpg'

import '../css/homescreen.css'


export default function HomeScreen() {
    return (
        <div>
            <Container maxWidth="xl"
            style={{
                backgroundImage: `url(${HeroImage})`,
                width: '100%',
                height: '650px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
            }}
            >
                <Grid container>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={12} style={{padding: '38% 5%'}}>
                                <p className="TitleCover">Find Your Favorite TV Series information !</p>
                                <p className="TitleCover">Only On</p>
                                <p className="TitleCover">TELECIN</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
