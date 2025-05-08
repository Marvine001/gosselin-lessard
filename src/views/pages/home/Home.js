import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './Home.css';
import { Col, Container, Row, Button, Carousel, Card } from 'react-bootstrap';

const Home = ({ 
  // Data props with defaults
  carouselHeroItems = [], 
  aboutData = {}, 
  propertyTypes = [],
  promenadeData = {}
}) => {
  // Default carousel hero items if none provided
  const defaultCarouselHeroItems = carouselHeroItems.length > 0 ? carouselHeroItems : [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/home/background_accueil.png`,
      title: 'GOSSELIN LESSARD \nIMMOBILIER, \nUNE QUESTION DE VALEURS',
      buttonText: 'En savoir plus',
      buttonLink: '/about_us'
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/home/background_accueil.png`,
      title: 'GOSSELIN LESSARD \nIMMOBILIER, \nUNE QUESTION DE VALEURS',
      buttonText: 'En savoir plus',
      buttonLink: '/about_us'
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/home/background_accueil.png`,
      title: 'GOSSELIN LESSARD \nIMMOBILIER, \nUNE QUESTION DE VALEURS',
      buttonText: 'En savoir plus',
      buttonLink: '/about_us'
    }
  ];

  // Default about section data if none provided
  const defaultAboutData = {
    title: 'GOSSELIN LESSARD IMMOBILIER',
    years: 'XX',
    description: `Active dans le domaine de la gestion immobilière au Québec depuis plus de xx ans,
      notre société propose à ses clients d'affaires et résidentiels des espaces locatifs situés
      dans les secteurs les plus attrayants de la ville de Thetford. Nous sommes attentifs à vos
      besoins et soucieux de vous offrir un service sur mesure. Nous sommes attentifs à vos
      besoins et soucieux de vous offrir un service sur mesure. Nous sommes attentifs à vos
      besoins et soucieux de vous offrir un service sur mesure. Nous sommes attentifs à vos
      besoins et soucieux de vous offrir un service sur mesure.`,
    image: `${process.env.PUBLIC_URL}/images/home/accueil_1.png`,
    buttonText: 'En savoir plus',
    buttonLink: '/about_us'
  };

  // Default property types if none provided
  const defaultPropertyTypes = propertyTypes.length > 0 ? propertyTypes : [
    {
      id: 1,
      type: 'Immeubles résidentiels',
      link: '/residential',
      image: `${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`
    },
    {
      id: 2,
      type: 'Immeubles commerciaux',
      link: '/commercial',
      image: `${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`
    },
    {
      id: 3,
      type: 'Immeubles industriels',
      link: '/industrial',
      image: `${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`
    },
    {
      id: 4,
      type: 'Terrains',
      link: '/land',
      image: `${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`
    }
  ];

  // Default promenade data if none provided
  const defaultPromenadeData = {
    title: 'Promenade Black Lake',
    description: `Nous possédons PROMENADE BLACK LAKE.
      Active dans le domaine de la gestion immobilière de Québec depuis plus de xx ans,
      notre société propose à ses clients d'affaires et résidentiels des espaces locatifs situés dans les
      secteurs les plus attrayants et animés de la ville de Thetford. Nous sommes attentifs à vos besoins et
      soucieux de vous offrir un service sur mesure. Nous possédons PROMENADE BLACK LAKE. Active dans le
      domaine de la gestion immobilière de Québec depuis plus de xx ans, notre société propose à ses clients
      d'affaires et résidentiels des espaces locatifs situés dans les secteurs les plus attrayants et animés
      de la ville de Thetford. Nous sommes attentifs à vos besoins et soucieux de vous offrir un service sur
      mesure.`,
    image: `${process.env.PUBLIC_URL}/images/home/promenade_bl.png`,
    buttonText: 'En savoir plus',
    buttonLink: '/promenade/residential'
  };

  // Use provided data or defaults
  const aboutSectionData = { ...defaultAboutData, ...aboutData };
  const promenadeSectionData = { ...defaultPromenadeData, ...promenadeData };

  // Extract reusable components
  const PropertyCard = ({ type, link, image }) => (
    <Card>
      <Card.Link href={link} className='custom-card-link-home'>
        <Card.Img 
          variant="top" 
          src={image} 
          className='custom-img-height img-fluid' 
          alt={type}
        />
        <Card.Body className='bg-blue text-white text-center'>
          <Card.Text className='fw-semibold fs-5 uppercase'>{type}</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );

  return (
    <div className='bg-black'>
      <Header />
      <div>
        {/* Hero Carousel */}
        
            <Carousel indicators={true} controls={false}>
              {defaultCarouselHeroItems.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`Slide ${item.id}`}
                  />
                  <div className="carousel-caption d-none d-lg-block custom-caption p-4">
                    <h4 className='mt-3 mb-4'>
                      {item.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < item.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h4>
                    <Button href={item.buttonLink} className="btn btn-primary uppercase">{item.buttonText}</Button>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          

        <Container>
          {/* About Section */}
          <Row className='mt-5'>
            <Col md={12} lg={9} className="p-2">
              <h3 className="white uppercase">Nous c'est</h3>
              <h1 className="blue uppercase">{aboutSectionData.title}</h1>
              <p className="white">{aboutSectionData.years} année d'expérience dans la gestion immobilière</p>
              <p className="white justify">
                {aboutSectionData.description}
              </p>
              <Button href={aboutSectionData.buttonLink} className='uppercase' variant="primary">{aboutSectionData.buttonText}</Button>
            </Col>
            <Col lg={3} className="d-none d-lg-block p-2">
              <img
                style={{ maxWidth: '100%', height: '22rem' }}
                src={aboutSectionData.image}
                alt="accueil illustration"
                className="img-fluid"
              />
            </Col>
          </Row>

          {/* Properties Section */}
          <Row className='mt-5'>
            <Col md={12} className=''>
              <h3 className="white uppercase">Nos</h3>
              <h1 className="blue uppercase">Propriétés</h1>
            </Col>
            <Col md={12}>
              <Carousel indicators={false} controls={true}>
                {defaultPropertyTypes.map((property) => (
                  <Carousel.Item key={property.id}>
                    <PropertyCard 
                      type={property.type} 
                      link={property.link} 
                      image={property.image}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>

          {/* Promenade Section */}
          <Row className='mt-5'>
            <Col md={12} lg={7}>
              <h1 className='uppercase'>
                <span className='white'>Promenade</span> <span className='blue'>Black Lake</span>
              </h1>
              <p className='text-white justify mt-4'>
                {promenadeSectionData.description}
              </p>
              <Button href={promenadeSectionData.buttonLink} className='uppercase' variant="primary">{promenadeSectionData.buttonText}</Button>
            </Col>
            <Col lg={5} className='mt-5 mb-3 d-none d-lg-block'>
              <img
                src={promenadeSectionData.image}
                alt="promenade black lake logo"
                className="image-custom-logo-bl"
              />
            </Col>
          </Row>
        </Container>

        {/* Contact CTA Section */}
        <Container fluid className='bg-gray mt-4'>
          <Row>
            <Col md={12} className='mx-auto mt-5 mb-4 text-center'>
              <h3 className='uppercase fw-bold'>Besoin de plus d'informations ?</h3>
            </Col>
            <Col md={12} className='mx-auto mb-5 text-center'>
              <Button href='/join_us' variant="primary" className='uppercase'>Contactez-nous</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;