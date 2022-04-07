import NavBar from '../NavBar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import Facebook from '../../Assets/Images/Social/Facebook_VRRA_Icon.png';
import Instagram from '../../Assets/Images/Social/Instagram_VRRA_Icon.png';
import Twitter from '../../Assets/Images/Social/Twitter_VRRA_Icon.png';
import YouTube from '../../Assets/Images/Social/YouTube_VRRA_Icon.png';

export default function SubHeader() {
    return (
        <>
            <Grid container>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={5} >
                    <span style={{ flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"50px"}}>
                        T: 604 612-7699 on Wed/Sat 9:00am to 5:30pm
                    </span>
                </Grid>
                <Grid item xs={12} md={5} style={{textAlign:"right", padding:"10px", justifyContent: "space-evenly"}}>
                    <span>
                        <img src={Facebook} width="10" height="15" />
                    </span>
                    <span style={{ paddingLeft: 20 }}>
                        <img src={Instagram} width="15" height="15" marginLeft="5px"/>
                    </span>
                    <span style={{ paddingLeft: 20 }}>
                        <img src={Twitter} width="17" height="15" />
                    </span>
                    <span style={{ paddingLeft: 20 }}>
                        <img src={YouTube} width="17" height="15" />
                    </span>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
            </Grid>
        </>
    )
}
// SubHeader