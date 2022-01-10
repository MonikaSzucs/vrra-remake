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

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">React Graph Tutorial</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto" navbar>
              <NavItem>
                <RouterNavLink to="/" className="nav-link" exact>Home EE</RouterNavLink>
              </NavItem>
                <NavItem>
                    <RouterNavLink to="/Pages/Store" className="nav-link" exact>Store</RouterNavLink>
                </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
// Navbar