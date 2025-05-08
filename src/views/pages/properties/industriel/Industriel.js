import React from 'react';
import './Industriel.css';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import industrialData from '../../../../data/industrial.json';

const Industriel = () => {
  const navigate = useNavigate();
  const { properties } = industrialData;

  const handlePropertyClick = (propertyId) => {
    // Utilisez une route dynamique avec l'ID de la propriété
    navigate(`/Forindustrial/${propertyId}`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="bg-black flex-grow-1">
        {/* Bannière */}
        <Row className="m-0">
          <Col className="image-container-industrial image-query p-0">
            <div className="image-title-industrial">
              <h1 className="text-white text-uppercase fw-bold fs-1 nowrap">Nos immeubles industriels</h1>
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
                      <Card.Text className="mb-2">
                        {property.location.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
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

export default Industriel;