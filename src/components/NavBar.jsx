import React from 'react';
import { Container, NavbarBrand}  from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>E-comerce</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
                        <Nav.Link as={Link} to='/product/:id'>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

           
        </>
    );
};

export default NavBar;