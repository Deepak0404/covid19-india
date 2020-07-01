import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <NavLink exact to="/" className="navbar-brand">Covid-19 Tracker <sup className="blink">LIVE</sup></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
                        <NavLink exact activeClassName="active" to="/updates" className="nav-link">Latest Updates</NavLink>
                        <NavLink exact activeClassName="active" to="/tips" className="nav-link">Prevention Tips</NavLink>
                        {/* <NavLink exact activeClassName="active" to="/app" className="nav-link">Download Aarogya Setu</NavLink> */}
                        <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN" className="nav-link" target="_blank" rel="noopener noreferrer">
                        Download Aarogya Setu</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;