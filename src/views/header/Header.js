import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './Header.css';

// Convert class component to functional component with hooks
const Header = () => {
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

  // Check if a page is active for navigation links
  const isActive = (path) => activePage === path;
  const isPropertyActive = () => ['/residential', '/commercial', '/industrial', '/land'].includes(activePage);

  return (
    <nav className='bg-black w-auto'>
      {/* Logo Navbar */}
      <Navbar bg="black" variant="dark" expand="md" className=''>
        <Container fluid className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/header/gosselin_logo.png`}
              width="700"
              height="400"
              className="img-fluid"
              alt="Gosselin Lessard"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      {/* Navigation Navbar */}
      <Navbar bg="blue" variant="blue" expand="xl">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="uppercase mx-auto">
              {/* Home Link */}
              <Nav.Link 
                href="/home" 
                className={`text-white px-3 nav-link-custom ${isActive('/home') ? 'active' : ''}`}
                onClick={() => handleNavClick('/home')}
              >
                ACCUEIL
              </Nav.Link>
              
              {/* Properties Dropdown */}
              <NavDropdown 
                title="Propriétés" 
                id="basic-nav-dropdown"
                className={`text-white px-3 nav-link-custom ${isPropertyActive() ? 'active' : ''}`}
              >
                <NavDropdown.Item 
                  href="/residential" 
                  className="dropdown-item-custom" 
                  onClick={() => handleNavClick('/residential')}
                >
                  Résidentiel
                </NavDropdown.Item>
                <NavDropdown.Item 
                  href="/commercial" 
                  className="dropdown-item-custom" 
                  onClick={() => handleNavClick('/commercial')}
                >
                  Commercial
                </NavDropdown.Item>
                <NavDropdown.Item 
                  href="/industrial" 
                  className="dropdown-item-custom" 
                  onClick={() => handleNavClick('/industrial')}
                >
                  INDUSTRIEL
                </NavDropdown.Item>
                <NavDropdown.Item 
                  href="/land" 
                  className="dropdown-item-custom" 
                  onClick={() => handleNavClick('/land')}
                >
                  TERRAIN
                </NavDropdown.Item>
              </NavDropdown>
              
              {/* Promenade Black Lake Link */}
              <Nav.Link 
                href="/promenade/residential" 
                className={`text-white px-3 nav-link-custom ${isActive('/promenadeResidentiel') ? 'active' : ''}`}
                onClick={() => handleNavClick('/promenadeResidentiel')}
              >
                PROMENADE BLACK LAKE
              </Nav.Link>
              
              {/* About Us Link */}
              <Nav.Link 
                href="/about_us" 
                className={`text-white px-3 nav-link-custom ${isActive('/about_us') ? 'active' : ''}`}
                onClick={() => handleNavClick('/about_us')}
              >
                à propos
              </Nav.Link>
              
              {/* Contact Us Link */}
              <Nav.Link 
                href="/join_us" 
                className={`text-white px-3 nav-link-custom ${isActive('/join_us') ? 'active' : ''}`}
                onClick={() => handleNavClick('/join_us')}
              >
                CONTACTEZ-NOUS
              </Nav.Link>
              
              {/* For Rent Link - Visible only on Mobile and Tablette (ipad) */}
              <Nav.Link 
                href='/rent' 
                className={`d-xl-none px-3 nav-link-custom bg-red ${isActive('/') ? 'active' : ''}`}
              >
                A LOUER
              </Nav.Link>
              
              {/* For Rent Link - Visible only on desktop and up */}
              <Nav.Link href='/rent' className='d-none d-xl-block'>
                <img
                  src={`${process.env.PUBLIC_URL}/forRent.png`}
                  alt="À LOUER"
                  className="img-fluid a-louer"
                  style={{ width: '150px' }}
                />
              </Nav.Link>
            </Nav>
            
            {/* Language Toggle Button */}
            <Nav className='pe-5'>
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

export default Header;