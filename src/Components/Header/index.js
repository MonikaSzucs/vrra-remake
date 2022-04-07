import NavBar from '../NavBar';
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Container,
    Dropdown,
    Navbar,
    Nav,
    NavDropdown,
    NavItem,
    Image
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import logo from '../../Assets/Images/Logo/VRRA_Logo_White_Transparent.png';
import BackgroundHeader from "../../Assets/Images/HomeBanner.jpg";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

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


export default function Header() {
    return (
        <div style={styles.BackgroundHeader}>
            <NavBar/>
            <Grid container>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={10} >
                    <Typography component="div" style={{ color: "white" }}>
                        <Box sx={{ fontSize: 'h4.fontSize', pt: 18, pb: 1  }} >Vancouver Rabbit Rescue Association</Box>
                        <Box >A Chapter of the House Rabbit Society</Box>
                    </Typography>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
            </Grid>
        </div>
    )
}
// Header