import headerStyles from './Header.module.scss';
import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/posts" className={headerStyles.navLink}>
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={headerStyles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={headerStyles.navLink}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
