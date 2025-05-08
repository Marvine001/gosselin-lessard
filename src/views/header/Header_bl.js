import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const HeaderBl = () => {
  // Use useState instead of this.state
  const [activePage, setActivePage] = useState(window.location.pathname);
  const [language, setLanguage] = useState('EN');

  // Update active page when the location changes
  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  // Handle navigation click
  const handleNavClick = (page) => {
    setActivePage(page);
  };

  // Toggle language between EN and FR
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'EN' ? 'FR' : 'EN');
  };

  // Check if a page is active
  const isActive = (path) => activePage === path;

  return (
    <nav className='bg-black w-auto'>
      {/* Logo Navbar */}
      <Navbar bg="black" variant="dark" expand="md">
        <Container fluid className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="/promenade">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/promenade_bl.png`}
              width="380"
              height="150"
              className="img-fluid"
              alt="Gosselin Lessard"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Navigation Navbar */}
      <Navbar bg="blue" variant="white" expand="md">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="uppercase mx-auto">
              {/* Gosselin Lessard Link */}
              <Nav.Link 
                href="/home" 
                className={`text-white nav-link-custom-promenade titre_nav ${isActive('/home') ? 'active' : ''}`}
                onClick={() => handleNavClick('/home')}
              >
                Gosselin Lessard
              </Nav.Link>
              
              {/* Résidentiel Link */}
              <Nav.Link 
                href="/promenade/residential" 
                className={`text-white nav-link-custom-promenade ${isActive('/promenade/residential') ? 'active' : ''}`}
                onClick={() => handleNavClick('/promenade/residential')}
              >
                Résidentiel
              </Nav.Link>
              
              {/* Commercial Link */}
              <Nav.Link 
                href="/promenade/commercial" 
                className={`text-white nav-link-custom-promenade ${isActive('/promenade/commercial') ? 'active' : ''}`}
                onClick={() => handleNavClick('/promenade/commercial')}
              >
                Commercial
              </Nav.Link>
            </Nav>
            
            {/* Language Toggle Button */}
            <Nav className='pe-3'>
              <Button 
                variant="dark" 
                className="btn-circle" 
                onClick={toggleLanguage}
              >
                {language}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default HeaderBl;