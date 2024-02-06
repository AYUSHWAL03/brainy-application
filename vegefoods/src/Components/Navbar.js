import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarGen = () => {

    const location = useLocation();
    const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="navbar position-fixed w-100 p-0 m-0 z-index-3">
    <Navbar expand="lg " className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/logo.png" height={30} width={150} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='my-1 mx-3 nav-link-effect'>
              Home
            </Link>
            <Link to="/product"  className='my-1 mx-3 nav-link-effect'>Product</Link>
            <Link to='/feature'  className='my-1 mx-3 nav-link-effect'>Feature</Link>
            <Link to='/blog'  className='my-1 mx-3 nav-link-effect'>Blog</Link>
            <Link to='/contact'  className='my-1 mx-3 nav-link-effect'>Contact</Link>
            <Link to='/about'  className='my-1 mx-3 nav-link-effect'>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
  )
}

export default NavbarGen