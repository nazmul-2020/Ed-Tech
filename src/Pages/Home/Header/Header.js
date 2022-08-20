import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user.displayName)

    const handelSignOut = () => {
       
        signOut(auth)
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg"sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Ed -Tech </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='mx-3' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            { 
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handelSignOut}>Log Out</button>
                                    // &&<button className='btn btn-link text-white text-decoration-none '>{user.displayName}</button>

                                    : <Nav.Link className='mx-3' as={Link} to="/login">Log In</Nav.Link>
                                    
                             }
                             {/* <Button variant="success" as={Link} to="/login">{user.displayName ? user.userName || user.displayName : "Login"}</Button> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;