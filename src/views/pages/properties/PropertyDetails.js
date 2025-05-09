import React, { useState, useEffect, useRef } from 'react';
import './Properties.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Col, Container, Row, Carousel, Button, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

// Import des données
import residentialData from '../../../data/residential.json';
import commercialData from '../../../data/commercial.json';
import industrialData from '../../../data/industrial.json';

// Déplacer dataMap en dehors du composant pour éviter de le recréer à chaque rendu
const dataMap = {
    residential: residentialData,
    commercial: commercialData,
    industrial: industrialData
};

// Déplacer spaceTypeMap en dehors du composant également
const spaceTypeMap = {
    residential: 'Espace résidentiel',
    commercial: 'Espace commercial',
    industrial: 'Espace industriel'
};

const PropertyDetails = () => {
    const { type, propertyId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('photos');
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [property, setProperty] = useState(null);
    const imageRefs = useRef([]);
    
    useEffect(() => {
        setLoading(true);
        
        // Obtenir les données pour le type actuel
        const currentData = dataMap[type];
        
        if (!currentData) {
            navigate('/home');
            setLoading(false);
            return;
        }
        
        // Rechercher la propriété par ID
        const foundProperty = currentData.properties.find(p => p.id === parseInt(propertyId));
        
        if (foundProperty) {
            setProperty(foundProperty);
        } else {
            // Rediriger vers la liste des propriétés du type
            navigate(`/properties/${type}`);
        }
        setLoading(false);
    }, [propertyId, type, navigate]); // Maintenant nous n'avons plus besoin de dataMap dans les dépendances
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        scrollToView(selectedIndex);
    };

    const handleImageClick = (idx) => {
        setIndex(idx);
        scrollToView(idx);
    };

    const scrollToView = (idx) => {
        if (imageRefs.current[idx]) {
            imageRefs.current[idx].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    // Afficher un indicateur de chargement pendant le chargement des données
    if (loading) {
        return (
            <div className="bg-black d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    // Si la propriété n'est pas trouvée
    if (!property) {
        return (
            <div className="bg-black text-white d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <p>Propriété non trouvée. Redirection...</p>
            </div>
        );
    }

    // Construire l'adresse complète en format uppercase
    const fullAddress = `${property.address.adresse}, ${property.address.ville}, ${property.address.province} ${property.address.codePostale}`.toUpperCase();


    return (
        <div className='bg-black'>
            <Header />

            <div className='mt-5'>
                <Container fluid>
                    <Row className='px-4'>
                        <Col md={12}>
                            <h3 className='text-center text-white uppercase fw-semibold'>
                                {property.title} - {property.location.split('\n')[0]}
                            </h3>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col
                            xs={6}
                            md={6}
                            lg={4}
                            className={`p-3 border uppercase text-center fw-semibold ${activeTab === 'photos' ? 'bg-gray' : 'bg-white'}`}
                            onClick={() => setActiveTab('photos')}
                            style={{ cursor: 'pointer' }}
                        >
                            Photos
                        </Col>
                        <Col
                            xs={6}
                            md={6}
                            lg={4}
                            className={`p-3 border uppercase text-center fw-semibold ${activeTab === 'carte' ? 'bg-gray' : 'bg-white'}`}
                            onClick={() => setActiveTab('carte')}
                            style={{ cursor: 'pointer' }}
                        >
                            Carte
                        </Col>
                        <Col
                            xs={{ span: 12, order: 1 }}
                            md={{ span: 12, order: 1 }}
                            lg={{ span: 4, order: 0 }}
                            className='bg-blue text-white p-3 border uppercase text-center fw-semibold'>
                            Détails
                        </Col>
                        <Col
                            xs={{ span: 12, order: 0 }}
                            md={{ span: 12, order: 0 }}
                            lg={{ span: 8, order: 1 }}
                            className='p-0'>
                            {activeTab === 'photos' && (
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    {property.images.map((image, idx) => (
                                        <Carousel.Item key={idx}>
                                            <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            )}

                            {activeTab === 'carte' && (
                                <div>
                                    <iframe
                                        src={property.mapLocation.embedUrl}
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            )}
                        </Col>
                        <Col
                            xs={{ span: 12, order: 2 }}
                            md={{ span: 12, order: 2 }}
                            lg={{ span: 4, order: 2 }}
                            className='text-white p-3'>
                            <h3 className='uppercase'>{fullAddress}</h3>
                            <hr className='white'></hr>
                            <p className='justify'>
                                {property.description}
                                <br />
                            </p>
                        </Col>
                    </Row>
                    
                    {activeTab === 'photos' && (
                        <Row className='bg-gray d-none d-lg-block'>
                            <Col xs={12} md={12} lg={12} className='bg-gray p-0'>
                                <div className="second-carousel">
                                    {property.images.map((image, idx) => (
                                        <div
                                            key={idx}
                                            ref={(ref) => imageRefs.current[idx] = ref}
                                            className={`image-containers ${index === idx ? 'active' : 'inactive'}`}
                                            onClick={() => handleImageClick(idx)}
                                        >
                                            <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}

                    <Row className='bg-blue text-white text-center uppercase py-4'>
                        <Col xs={12} md={12} lg={12}>
                            <span className='fs-5'>{spaceTypeMap[type]}</span>
                        </Col>
                    </Row>

                    <Row className='bg-gray p-5'>
                        <Col md={12} className='mx-auto p-2 text-center'>
                            <h3 className='uppercase fw-bold'>Besoin de plus d'informations ?</h3>
                        </Col>
                        <Col md={12} className='mx-auto text-center p-2'>
                            <Button href='/join_us' variant="primary" className='uppercase'>Contactez-nous</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default PropertyDetails;