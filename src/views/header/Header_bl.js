import React, { Component } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
//import logo from '../../../public/gosselin_logo.png'
import './Header.css'

//create Header class
class HeaderBl extends Component {
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
        <Navbar bg="blue" variant="blue" expand="md">
          <Container fluid className="justify-content-around">
            <Navbar>
              <Nav className="mx-auto uppercase">
                <Nav.Link href="/" className={` text-white nav-link-custom-promenade titre_nav ${activePage === '/' ? 'active' : ''}`} onClick={() => this.handleNavClick('/')}>
                  Retour
                </Nav.Link>
                
                <Nav.Link href="/promenade" className={`text-white nav-link-custom-promenade ${activePage === '/promenade' ? 'active' : ''}`} onClick={() => this.handleNavClick('/about_us')}>
                  Résidentiel
                </Nav.Link>
                
                {/* Button pour changer la langue */}
                <Button variant="dark" className="btn-circle marge" onClick={this.toggleLanguage}>
                  {language}
                </Button>
                {/* <Nav.Link href="#en" className="text-white">EN</Nav.Link> */}
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </nav>
    );
  }
}

export default HeaderBl;
