import React, { Component } from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
//import logo from '../../../public/gosselin_logo.png'
import './Header.css'

//create Header class
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: window.location.pathname,
      language: 'EN',
    };
  }

  //pour permettre a la barre blanche de rester actif sur la page active
  handleNavClick = (page) => {
    this.setState({ activePage: page });
  };

  //pour permmettre le changement de 'EN' en 'FR'
  toggleLanguage = () => {
    this.setState((prevState) => ({
      language: prevState.language === 'EN' ? 'FR' : 'EN',
    }));
  };

  render() {
    const { activePage, language } = this.state;
    return (
      <nav className='bg-black w-auto'>
        <Navbar bg="black" variant="dark" expand="md">
          <Container fluid className="d-flex justify-content-center align-items-center">
            <Navbar.Brand href="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/header/gosselin_logo.png`}
                width="450"
                height="160"
                className="img-fluid"
                alt="Gosselin Lessard"
              />
            </Navbar.Brand>

          </Container>
        </Navbar>
        <Navbar bg="blue" variant="blue" expand="md">
          <Container fluid className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="uppercase mx-auto">
                <Nav.Link href="/" className={`text-white px-3 nav-link-custom titre_nav ${activePage === '/' ? 'active' : ''}`} onClick={() => this.handleNavClick('/')}>
                  ACCUEIL
                </Nav.Link>
                <NavDropdown title="Propriétés" id="basic-nav-dropdown"
                  className={`text-white px-3 nav-link-custom ${['/residential', '/commercial', '/industrial', '/land'].includes(activePage) ? 'active' : ''}`}>
                  <NavDropdown.Item href="/residential" className="dropdown-item-custom" onClick={() => this.handleNavClick('/residential')}>
                    Résidentiel
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/commercial" className="dropdown-item-custom" onClick={() => this.handleNavClick('/commercial')}>
                    Commercial
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/industrial" className="dropdown-item-custom" onClick={() => this.handleNavClick('/industrial')}>
                    INDUSTRIEL
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/land" className="dropdown-item-custom" onClick={() => this.handleNavClick('/land')}>
                    TERRAIN
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about_us" className={`text-white px-3 nav-link-custom ${activePage === '/about_us' ? 'active' : ''}`} onClick={() => this.handleNavClick('/about_us')}>
                  à propos
                </Nav.Link>
                <Nav.Link href="/join_us" className={`text-white px-3 nav-link-custom ${activePage === '/join_us' ? 'active' : ''}`}
                  onClick={() => this.handleNavClick('/join_us')}>
                  CONTACTEZ-NOUS
                </Nav.Link>
                <Nav.Link href='#sale' className={`d-md-none px-3 nav-link-custom ${activePage === '/join_us' ? 'active' : ''}`}  >
                  
                    A LOUER
                  
                </Nav.Link>
                <Nav.Link href='#sale' className='d-none d-md-block'>
                  <img
                    src={`${process.env.PUBLIC_URL}/forRent.png`}
                    alt="À LOUER"
                    className="img-fluid a-louer"
                    style={{ width: '150px' }} // Ajustez la largeur et l'alignement vertical si nécessaire
                  />
                </Nav.Link>

              </Nav>
              <Nav className='pe-5 '>

                {/* Button pour changer la langue */}
                <Button variant="dark" className="btn-circle " onClick={this.toggleLanguage}>
                  {language}
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>
      </nav>
    );
  }
}
export default Header;
