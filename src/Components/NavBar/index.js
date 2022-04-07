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

export default function NavBar() {
    return (
        <Navbar bg="" variant="light" expand="md">
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={5}>
                <img src={logo} width="100" height="50" />
            </Grid>
            <Grid item xs={12} md={5}>
                <Nav className="me-auto" navbar style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <NavItem>
                        <RouterNavLink to="/" className="nav-link"  activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Home</RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/Store" className="nav-link" activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Who We Are</RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/About" className="nav-link" activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Get Involved</RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/About" className="nav-link" activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Store</RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/About" className="nav-link" activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Rabbits 101</RouterNavLink>
                    </NavItem>
                    <NavItem>
                        <RouterNavLink to="/About" className="nav-link" activeStyle={{color: "white",textDecoration:"none"}} style={{color:"grey"}} exact>Rabbit Updates</RouterNavLink>
                    </NavItem>
                </Nav>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
        </Navbar>
    )
}
// Navbar