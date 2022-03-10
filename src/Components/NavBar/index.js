import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Container,
    Dropdown,
    Navbar,
    Nav,
    NavDropdown,
    NavItem
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';

export default function NavBar() {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={5}>
                Logo
            </Grid>
            <Grid item xs={12} md={5}>
                <Nav className="me-auto" navbar style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <NavItem>
                            <RouterNavLink to="/" className="nav-link" exact>Donate</RouterNavLink>
                        </NavItem>
                        <NavItem>
                            <RouterNavLink to="/Store" className="nav-link" exact>Donate</RouterNavLink>
                        </NavItem>
                        <NavItem>
                            <RouterNavLink to="/About" className="nav-link" exact>About</RouterNavLink>
                        </NavItem>
                    </Nav>
                </Grid>
            <Grid item xs={0} md={1}></Grid>
        </Navbar>
    )
}
// Navbar