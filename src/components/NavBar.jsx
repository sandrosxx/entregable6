import React, { useState } from 'react';
import { Container , Offcanvas } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>E-comerce</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
                        <Nav.Link onClick={handleShow} as={Link} >Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
         <Cart show= {show} handleClose={handleClose} />


        </>
    );
};

export default NavBar;