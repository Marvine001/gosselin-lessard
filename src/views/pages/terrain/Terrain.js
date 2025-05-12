import React from 'react'
import './Terrain.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { FaMapMarkedAlt, FaHome, FaStore, FaIndustry, FaPhoneAlt } from 'react-icons/fa'

const Terrain = () => {
  // Types de terrains disponibles
  const terrainTypes = [
    {
      icon: <FaHome size={50} className="mb-3 text-primary" />,
      title: 'Terrains résidentiels',
      description: 'Parcelles idéales pour la construction de maisons individuelles ou de petits immeubles résidentiels.'
    },
    {
      icon: <FaStore size={50} className="mb-3 text-primary" />,
      title: 'Terrains commerciaux',
      description: 'Emplacements stratégiques pour des commerces, bureaux ou espaces de vente au détail.'
    },
    {
      icon: <FaIndustry size={50} className="mb-3 text-primary" />,
      title: 'Terrains industriels',
      description: 'Grandes surfaces adaptées aux activités industrielles, entrepôts ou zones logistiques.'
    }
  ];

  // Zones géographiques où nous avons des terrains
  const locations = [
    'Thetford Mines',
    'Black Lake'
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="bg-black flex-grow-1">
        {/* Bannière */}
        <Row className="m-0">
          <Col className="image-container-land image-query p-0">
            <div className="image-title-land">
              <h1 className="text-white text-uppercase fw-bold fs-1">Terrains disponibles</h1>
              <p className="text-white fs-5 mt-2">Des opportunités exceptionnelles pour votre prochain projet</p>
            </div>
          </Col>
        </Row>

        {/* Introduction */}
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h2 className="text-white mb-4">À la recherche d'un terrain?</h2>
              <p className="text-white fs-5">
                Nous disposons d'un vaste inventaire de terrains à vendre dans la région de Thetford Mines 
                et ses environs. Que ce soit pour un projet résidentiel, commercial ou industriel, 
                contactez-nous pour découvrir nos opportunités exceptionnelles.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="mt-4 px-4 text-uppercase"
                href="#contact-section"
              >
                Nous contacter
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Types de terrains */}
        <Container className="py-5 bg-gray">
          <Row className="mb-4">
            <Col className="text-center">
              <h2 className="text-uppercase fw-bold">Nos types de terrains</h2>
            </Col>
          </Row>
          <Row>
            {terrainTypes.map((type, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 text-center p-4 shadow-sm">
                  {type.icon}
                  <Card.Title className="text-uppercase fw-bold">{type.title}</Card.Title>
                  <Card.Text>{type.description}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Régions */}
        <Container className="py-5">
          <Row className="mb-4">
            <Col className="text-center">
              <h2 className="text-white text-uppercase fw-bold">Nos emplacements</h2>
              <p className="text-white">Nous avons des terrains disponibles dans ces localités</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="location-map bg-blue p-4 rounded">
                <div className="d-flex align-items-center mb-4">
                  <FaMapMarkedAlt size={30} className="text-white me-3" />
                  <h3 className="text-white m-0">Régions disponibles</h3>
                </div>
                <div className="location-grid">
                  {locations.map((location, index) => (
                    <div key={index} className="location-item bg-white p-3 rounded mb-3 text-center">
                      {location}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Button 
                    variant="light" 
                    className="px-4 text-uppercase"
                    href="#contact-section"
                  >
                    Vérifier la disponibilité
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* CTA de contact */}
        <Container id="contact-section" className="py-5 bg-blue">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <div className="p-4 rounded">
                <FaPhoneAlt size={40} className="text-white mb-3" />
                <h2 className="text-white text-uppercase fw-bold mb-4">
                  Intéressé par un de nos terrains?
                </h2>
                <p className="text-white fs-5 mb-4">
                  Notre équipe est à votre disposition pour vous fournir toutes les informations 
                  nécessaires sur nos terrains disponibles et vous accompagner dans votre projet.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button 
                    variant="light" 
                    size="lg" 
                    className="px-4 text-uppercase fw-bold"
                    href="tel:+14188140136"
                  >
                    Appeler maintenant
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="px-4 text-uppercase fw-bold"
                    href="/join_us"
                  >
                    Formulaire de contact
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Avantages */}
        <Container className="py-5">
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="text-white text-uppercase fw-bold">Pourquoi choisir nos terrains?</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary fw-bold fs-1 mb-2">01</div>
                  <Card.Title className="fw-bold">Emplacements stratégiques</Card.Title>
                  <Card.Text>
                    Tous nos terrains sont situés dans des zones à fort potentiel 
                    de développement et facilement accessibles.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary fw-bold fs-1 mb-2">02</div>
                  <Card.Title className="fw-bold">Terrains viabilisés</Card.Title>
                  <Card.Text>
                    La plupart de nos terrains sont déjà viabilisés et prêts pour 
                    vos projets de construction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary fw-bold fs-1 mb-2">03</div>
                  <Card.Title className="fw-bold">Accompagnement personnalisé</Card.Title>
                  <Card.Text>
                    Notre équipe vous guide tout au long du processus d'acquisition 
                    et vous met en relation avec nos partenaires.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Terrain;