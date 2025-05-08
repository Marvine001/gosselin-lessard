import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { FaFacebookSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './About.css';

// Composant réutilisable pour les profils d'équipe
const TeamMemberCard = ({ name, title, image, email, facebook }) => (
  <Col md={6} className='d-flex justify-content-center align-items-center mb-5'>
    <Card className='mb-5' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/about_us/${image}`} />
      <Card.Body className='bg-blue text-white'>
        <Card.Title className='fs-5 fw-bold'>{name}</Card.Title>
        <Card.Text className='mt-4'>
          <Row>
            <Col xs={7} md={8} className='d-flex justify-content-start fw-semibold'>{title}</Col>
            <Col xs={5} md={4} className="d-flex justify-content-around">
              <a 
                href={facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-circle"
              >
                <FaFacebookSquare className="icon" />
              </a>
              <a 
                href={`mailto:${email}`} 
                className="icon-circle"
              >
                <MdAlternateEmail className="icon" />
              </a>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

// Composant pour le Hero Banner
const HeroBanner = ({ title }) => (
  <div className="image-container-about image-query">
    <div className="image-title">
      <h1 className="text-white uppercase fw-bold fs-1">{title}</h1>
    </div>
  </div>
);

// Données des membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: 'Hugo Gosselin',
    title: 'Président',
    image: 'profil.png',
    email: 'hugo@gosselinlessard.com',
    facebook: 'https://www.facebook.com/gosselinlessard' 
  },
  {
    id: 2,
    name: 'Christine Lessard',
    title: 'Vice présidente',
    image: 'profil.png',
    email: 'gosselinlessard@gmail.com',
    facebook: 'https://www.facebook.com/gosselinlessard' 
  }
];

// Composant fonctionnel About
const About = () => {
  return (
    <div>
      <Header />
      <div className='bg-black'>
        <HeroBanner title="À propos" />
        
        <Container>
          <Row className='px-1'>
            <Col md={12} className="my-5">
              <p className='text-white fs-4' style={{ textAlign: 'justify' }}>
              <span className='fw-bold'>Gosselin Lessard Immobilier</span> est une entreprise de confiance spécialisée dans la propriété et la gestion d'immeubles commerciaux, résidentiels et industriels dans la région de Thetford Mines. Fondée par Hugo Gosselin et Christine Lessard, notre équipe apporte une expertise locale inégalée et une approche personnalisée à chaque projet immobilier. Nous nous engageons à offrir un service de qualité supérieure et à bâtir des relations durables avec nos clients et partenaires. Que vous soyez à la recherche d'un espace commercial, d'une propriété résidentielle ou de terrains à développer, nous mettons notre connaissance approfondie du marché immobilier local et notre réseau étendu à votre service. Chez Gosselin Lessard Immobilier, nous ne vendons pas simplement des propriétés – nous créons des opportunités et accompagnons nos clients à chaque étape de leur parcours immobilier.
              </p>
            </Col>
          </Row>
          
          <Row className='d-flex justify-content-center align-items-center px-4'>
            {teamMembers.map(member => (
              <TeamMemberCard 
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                email={member.email}
                facebook={member.facebook}
              />
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;