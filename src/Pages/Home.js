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
    const initState = [
        { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
        { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
        { id: 3, name: "water", quantitiy: 10, location: "fridge" },
        { id: 4, name: "rice", quantitiy: 10, location: "pantry" }
      ];

      const images = [
        { id: 11, path: require( "../Assets/Images/RecentArrivals/Brooke.jpg" ), name: "Booke" },
        { id: 12, path: require( "../Assets/Images/RecentArrivals/Greg.jpg" ), name: "Greg" },
        { id: 13, path: require( "../Assets/Images/RecentArrivals/HarperAndRider.jpg" ), name: "Harper & Rider" },
        { id: 14, path: require( "../Assets/Images/RecentArrivals/OllieAndTwix.jpeg" ), name: "Ollie & Twix" },
      ];
    
      const Img = ( { image } ) => (
        <div style={{ textAlign:"center" }}>
          <img width="100%" src={image.path} />
          <h4>{image.name}</h4>
        </div>
      );

    const [state, setState] = React.useState(initState);
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
                        <Grid container>
                            {images.map( image => (
                                <Grid item md={3} sx={{ pt: 5, pb: 1  }}>
                                    <Img key={image.id} image={image} />
                                </Grid>
                                )
                            )}
                            {state.map((item) => (
                                <tr key={item.id}>
                                    {Object.values(item).map((val) => (
                                        <td>{val}</td>
                                    ))}
                                </tr>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={0} md={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}
// Home