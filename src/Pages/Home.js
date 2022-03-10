import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BackgroundHeader from "../Assets/Images/HomeBanner.jpg";
import './Home.css';

const styles = {
    BackgroundHeader: {
        backgroundImage: `url(${BackgroundHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '50vh',
    }
};

export default function Home() {
    return (
        <div>
            <div style={styles.BackgroundHeader}>
                <Grid container>
                    <Grid item xs={0} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <Typography component="div" style={{ color: "white" }}>
                            <Box sx={{ fontSize: 'h3.fontSize', pt: 18, pb: 1  }} style={{  }}>Vancouver Rabbit Rescue Association</Box>
                            <Box sx={{ fontSize: 'h6.fontSize', }}>A Chapter of the House Rabbit Society</Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                </Grid>
            </div>
            <div>
                <Grid container>
                    <Grid item xs={0} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <Grid container >
                            <Grid item md={3} >
                                <Paper sx={{ m:2 }}>1</Paper>
                            </Grid>
                            <Grid item md={3}>
                                <Paper sx={{ m:2 }}>2</Paper>
                            </Grid>
                            <Grid item md={3}>
                                <Paper sx={{ m:2 }}>3</Paper>
                            </Grid>
                            <Grid item md={3}>
                                <Paper sx={{ m:2 }}>4</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}
// Home