import React, { Component } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
//import logo from '../../../public/gosselin_logo.png'
import './Header.css'

//create Header class
class Header extends Component {
  render() {
    return (
      <nav className='bg-black w-auto'>
        <Navbar bg="black" variant="dark" expand="md">
          <Container fluid className="d-flex justify-content-center">
            <Navbar.Brand href="/">
              <img
                src={`${process.env.PUBLIC_URL}/gosselin_logo.png`}
                width="420"
                height="160"
                className=""
                alt="Gosselin Lessard"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="blue" variant="blue" expand="md">
          <Container fluid className="justify-content-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/" className="text-white nav-link-custom titre_nav">ACCUEIL</Nav.Link>
                <Nav.Link href="#properties" className="text-white nav-link-custom">PROPRIETES</Nav.Link>
                <Nav.Link href="/about_us" className="text-white nav-link-custom">A PROPOS</Nav.Link>
                <Nav.Link href="/join_us" className="text-white nav-link-custom">CONTACTEZ-NOUS</Nav.Link>
                <Button variant="dark" className="btn-circle marge">EN</Button>
                {/* <Nav.Link href="#en" className="text-white">EN</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  }
}
export default Header;
