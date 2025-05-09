import React from 'react';
import './Properties.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

// Import des données
import residentialData from '../../../data/residential.json';
import commercialData from '../../../data/commercial.json';
import industrialData from '../../../data/industrial.json';

const Properties = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  // Mapping des données selon le type
  const dataMap = {
    residential: residentialData,
    commercial: commercialData,
    industrial: industrialData
  };

  // Mapping des titres selon le type
  const titleMap = {
    residential: 'Nos immeubles résidentiels',
    commercial: 'Nos immeubles commerciaux',
    industrial: 'Nos immeubles industriels'
  };

  // Obtenir les données pour le type actuel
  const currentData = dataMap[type];
  const pageTitle = titleMap[type];

  // Si le type n'est pas valide, rediriger vers la page d'accueil
  if (!currentData || !pageTitle) {
    navigate('/home');
    return null;
  }

  const { properties } = currentData;

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${type}/${propertyId}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="bg-black flex-grow-1">
        {/* Bannière */}
        <Row className="m-0">
          <Col className="image-container-properties image-query p-0">
            <div className="image-title-properties">
              <h1 className="text-white text-uppercase fw-bold fs-1 nowrap">{pageTitle}</h1>
            </div>
          </Col>
        </Row>
        
        {/* Liste des propriétés */}
        <Container>
          <Row xs={1} md={2} lg={3} className="g-3 py-5">
            {properties.map((property) => (
              <Col key={property.id} className="p-2 p-md-3">
                <Card className="text-uppercase h-100 property-card">
                  <div 
                    className="custom-card-link" 
                    onClick={() => handlePropertyClick(property.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Card.Img
                      variant="top"
                      src={property.imageUrl}
                      alt={`Propriété ${property.title}`}
                      className="img-fluid"
                    />
                    <Card.Body className="bg-gray">
                      <Card.Text className="mb-1">
                        <span className="badge bg-primary me-2">{property.title}</span>
                      </Card.Text>
                      <Card.Text className="mb-2 ">
                        {/* Ville en premier */}
                        <div className="fw-bold text-uppercase">{property.address.ville}</div>
                        {/* Adresse ensuite */}
                        <div className="">{property.address.adresse}</div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;