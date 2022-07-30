import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from "../images/logo.jpg"

const Header = () => {
    return (
        <Navbar bg="light" variant='info' expand="lg">
            <LinkContainer to="/" className='ms-3'>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>
                            <Button variant="outline-primary">Home</Button>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/explore">
                        <Nav.Link>
                            <Button variant="outline-primary">Explore</Button>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/regions">
                        <Nav.Link>
                            <Button variant="outline-primary">Regions</Button>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>
                            <Button variant="outline-primary">About Us</Button>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>
                            <Button variant="outline-primary">Contact Us</Button>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login" className='justify-content-end'>
                        <Nav.Link>
                            <Button variant="dark">Login</Button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header