import React from 'react'
import './Promenade.css'
import HeaderBl from '../../header/Header_bl';
import Footer from '../../footer/Footer';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import propertiesData from '../../../data/promenade.json';

const PromenadeProperties = () => {
  const navigate = useNavigate();
  const { type } = useParams(); // Récupère le type depuis l'URL
  const { properties } = propertiesData;

  // Filtrer les propriétés selon le type
  const filteredProperties = properties.filter(property => {
    if (type === 'commercial') {
      return property.category === 'commercial';
    } else if (type === 'residential') {
      return property.category === 'residentiel';
    }
    return false;
  });

  const handlePropertyClick = (propertyId) => {
    // Utilise la route unifiée avec le type et l'ID
    navigate(`/ForPromenade/${type}/${propertyId}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderBl />
      <main className="bg-black flex-grow-1">
        {/* Bannière */}
        <Row className="m-0">
          <Col className="image-container-promenade image-query p-0">
            <div className="image-title-promenade">
              <h2 className="text-white text-uppercase fw-bold fs-1">Promenade Black Lake - {type}</h2>
            </div>
          </Col>
        </Row>
        
        {/* Liste des propriétés filtrées */}
        <Container>
          <Row xs={1} md={2} lg={3} className="g-3 py-5">
            {filteredProperties.map((property) => (
              <Col key={property.id} className="p-2 p-md-3">
                <Card className="text-uppercase h-100 property-card">
                  <div 
                    className="custom-card-link" 
                    onClick={() => handlePropertyClick(property.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="ratio ratio-4x3">
                      <Card.Img
                        src={property.imageUrl}
                        alt={`Propriété ${property.title}`}
                        className="img-fluid object-fit-cover"
                      />
                    </div>
                    <Card.Body className="bg-blue">
                      <Card.Title className="text-white text-center m-0">
                        {property.name ? property.name : property.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Body className="bg-gray">
                      <Card.Text className="mb-0 text-center">
                        {/* Ville en premier */}
                        <div className="fw-bold text-uppercase">{property.address.ville}</div>
                        {/* Adresse ensuite */}
                        <div className="small">{property.address.adresse}</div>
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

export default PromenadeProperties;