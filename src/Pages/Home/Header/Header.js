import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg"sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">DentalCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='mx-3' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Customer">Customer Us</Nav.Link>
                            {/* <Nav.Link className='mx-3' as={Link} to="/">Services</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/blog">Blog</Nav.Link> */}
                            {/* {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handelSignOut}>Log Out</button>
                                    : <Nav.Link className='mx-3' as={Link} to="/login">Log In</Nav.Link>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;