import React, { useState, useEffect, useMemo } from 'react';
import './Rent.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Row, Col, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Import direct des données pour éviter de les importer plusieurs fois
import residentialData from '../../../data/residential.json';
import commercialData from '../../../data/commercial.json';
import industrialData from '../../../data/industrial.json';

// Constantes pour les catégories
const CATEGORIES = {
  ALL: 'all',
  RESIDENTIAL: 'residential',
  COMMERCIAL: 'commercial',
  INDUSTRIAL: 'industrial'
};

// Configuration des catégories
const CATEGORY_CONFIG = {
  [CATEGORIES.RESIDENTIAL]: {
    label: 'Résidentiel',
    path: '/ForResidential'
  },
  [CATEGORIES.COMMERCIAL]: {
    label: 'Commercial',
    path: '/ForCommercial'
  },
  [CATEGORIES.INDUSTRIAL]: {
    label: 'Industriel',
    path: '/ForIndustrial'
  }
};

// Fonction utilitaire pour vérifier la disponibilité
const isAvailable = (availability) => {
  return ["Oui", "Yes", "Immédiatement"].includes(availability);
};

// Fonction pour formater l'adresse selon le nouveau format
const formatAddress = (address) => {
  // L'adresse doit être un objet avec la structure attendue
  if (address && typeof address === 'object' && address.ville && address.adresse) {
    return {
      city: address.ville.toUpperCase(),
      street: address.adresse
    };
  }
  
  // Par défaut si l'adresse n'est pas valide
  return { city: 'THETFORD MINES', street: 'Adresse non disponible' };
};

const Rent = () => {
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);
  const [filteredProperties, setFilteredProperties] = useState([]);
  
  // Prépare les données une seule fois avec useMemo
  const allProperties = useMemo(() => {
    // Fonction pour formater les propriétés selon leur catégorie
    const formatProperties = (data, category) => {
      return data.properties.map(property => ({
        ...property,
        category,
        categoryLabel: CATEGORY_CONFIG[category].label,
        detailPath: `${CATEGORY_CONFIG[category].path}/${property.id}`
      }));
    };
    
    // Combine toutes les propriétés
    return [
      ...formatProperties(residentialData, CATEGORIES.RESIDENTIAL),
      ...formatProperties(commercialData, CATEGORIES.COMMERCIAL),
      ...formatProperties(industrialData, CATEGORIES.INDUSTRIAL)
    ];
  }, []);
  
  // Mise à jour des propriétés filtrées au chargement
  useEffect(() => {
    setFilteredProperties(allProperties);
  }, [allProperties]);
  
  // Gestion du changement de filtre
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    
    setFilteredProperties(
      category === CATEGORIES.ALL 
        ? allProperties 
        : allProperties.filter(property => property.category === category)
    );
  };
  
  // Navigation vers la page de détail ForRent avec catégorie et ID
  const handlePropertyClick = (property) => {
    // Mapping des catégories vers les valeurs d'URL
    const categoryMapping = {
      'residential': 'residentiel',
      'commercial': 'commercial', 
      'industrial': 'industriel'
    };
    
    // Construire le chemin vers ForRent avec la catégorie et l'ID
    const rentPath = `/ForRent/${categoryMapping[property.category]}/${property.id}`;
    navigate(rentPath);
  };
  
  // Rendu de la carte de propriété
  const renderPropertyCard = (property) => {
    // Formater l'adresse pour l'affichage
    const formattedAddress = property.address 
      ? formatAddress(property.address)
      : { city: 'THETFORD MINES', street: 'Adresse non disponible' };
    
    return (
      <Col key={`${property.category}-${property.id}`} className="p-2 p-md-3">
        <Card className="text-uppercase h-100 property-card">
          <div 
            className="custom-card-link" 
            onClick={() => handlePropertyClick(property)}
            style={{ cursor: 'pointer' }}
          >
            {/* Badge "À LOUER" */}
            {isAvailable(property.availability) && (
              <div className="rent-badge">Disponible</div>
            )}
            
            <Card.Img
              variant="top"
              src={property.imageUrl}
              alt={`Propriété ${property.title}`}
              className="img-fluid"
            />
            
            <Card.Body className="bg-gray">
              <Card.Text className="mb-1">
                <span className="badge bg-primary me-2">{property.categoryLabel}</span>
              </Card.Text>
              <Card.Text className="mb-2">
                <div className="address-container">
                  <div className="city fw-bold">{formattedAddress.city}</div>
                  <div className="street">{formattedAddress.street}</div>
                </div>
              </Card.Text>
              <Card.Text>
                <Row className="align-items-center">
                  <Col xs={12}></Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </Col>
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="bg-black flex-grow-1">
        {/* Bannière */}
        <Row className="m-0">
          <Col className="image-container-rent image-query p-0">
            <div className="image-title-rent">
              <h1 className="text-white text-uppercase fw-bold fs-1 nowrap">À louer</h1>
            </div>
          </Col>
        </Row>
        
        {/* Section de filtrage */}
        <Container className="mt-4">
          <Row className="mb-4">
            <Col md={6} lg={4} className="mx-auto">
              <Form.Group>
                <Form.Label className="text-white">Filtrer par catégorie</Form.Label>
                <Form.Select 
                  value={selectedCategory} 
                  onChange={handleCategoryChange}
                  className="bg-dark text-white border-secondary"
                >
                  <option value={CATEGORIES.ALL}>Toutes les propriétés</option>
                  <option value={CATEGORIES.RESIDENTIAL}>Résidentiel</option>
                  <option value={CATEGORIES.COMMERCIAL}>Commercial</option>
                  <option value={CATEGORIES.INDUSTRIAL}>Industriel</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        
        {/* Liste des propriétés */}
        <Container>
          <Row xs={1} md={2} lg={3} className="g-3 py-3">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(renderPropertyCard)
            ) : (
              <Col xs={12} className="text-center py-5">
                <h4 className="text-white">Aucune propriété trouvée pour cette catégorie</h4>
              </Col>
            )}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Rent;