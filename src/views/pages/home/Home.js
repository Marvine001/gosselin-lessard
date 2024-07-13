import React, { Component } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './Home.css'
import { Col, Container, Row, Button, Carousel, Card } from 'react-bootstrap'

//create Home class
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bg-black'>

                    <Row>
                        <Col md={12} >
                            <Carousel indicators={true} controls={false}> {/* Remarquez controls={false} pour enlever les flèches des carousel */}
                                <Carousel.Item className=''>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/images/home/background_accueil.png`}
                                        alt="First slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block custom-caption p-4">
                                        <h5 className='mt-3 mb-4'> GOSSELIN LESSARD <br /> IMMOBILIER, <br /> UNE QUESTION DE VALEURS</h5>
                                        <button className="btn btn-primary">En savoir plus</button>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/images/home/background_accueil.png`}
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block custom-caption p-4">
                                        <h5 className='mt-3 mb-4'> GOSSELIN LESSARD <br /> IMMOBILIER, <br /> UNE QUESTION DE VALEURS</h5>
                                        <button className="btn btn-primary">En savoir plus</button>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.PUBLIC_URL}/images/home/background_accueil.png`}
                                        alt="Third slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block custom-caption p-4">
                                        <h5 className='mt-3 mb-4'> GOSSELIN LESSARD <br /> IMMOBILIER, <br /> UNE QUESTION DE VALEURS</h5>
                                        <button className="btn btn-primary" href='/about_us'>En savoir plus</button>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                    <Container>
                        <Row className='p-4'>
                            <Col md={12} lg={9} className="my-4">
                                <h3 className="white uppercase">Nous c'est</h3>
                                <h1 className="blue uppercase">GOSSELIN LESSARD IMMOBILIER</h1>
                                <p className="white">XX année d'expérience dans la gestion immobilière</p>
                                <p className="white justify">
                                    Active dans le domaine de la gestion immobilière au Québec depuis plus de xx ans,
                                    notre société propose à ses clients d'affaires et résidentiels des espaces locatifs situés
                                    dans les secteurs les plus attrayants de la ville de Thetford. Nous sommes attentifs à vos
                                    besoins et soucieux de vous offrir un service sur mesure. Nous sommes attentifs à vos
                                    besoins et soucieux de vous offrir un service sur mesure. Nous sommes attentifs à vos
                                    besoins et soucieux de vous offrir un service sur mesure.Nous sommes attentifs à vos
                                    besoins et soucieux de vous offrir un service sur mesure.
                                </p>
                                <Button href='/about_us' variant="primary">En savoir plus</Button>
                            </Col>
                            <Col lg={3} className="my-4 pt-4 d-none d-lg-block">
                                <img
                                    style={{ maxWidth: '100%', height: '20rem' }} // Utilisation de styles inline pour contrôler la taille de l'image
                                    src={`${process.env.PUBLIC_URL}/images/home/accueil_1.png`}
                                    alt="accueil illustration"
                                    className="img-fluid"
                                />
                            </Col>
                        </Row>

                        <Row className='p-4'>
                            <Col md={12} className='mt-4 mb-3'>
                                <h3 className="white uppercase">Nos</h3>
                                <h1 className="blue uppercase">Propriétés</h1>

                            </Col>
                            <Col md={12}>
                                <Carousel className='mb-5' indicators={false} controls={true} > {/* Remarquez indicators={false} pour enlever les points en barre du carrousel */}
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Link href="/residential" className='custom-card-link'>
                                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`} className='custom-img-height img-fluid' />
                                                <Card.Body className='bg-blue text-white text-center '>
                                                    <Card.Text href="/join_us" className='fw-semibold fs-5 uppercase '>Immeuble résidentiel</Card.Text>
                                                </Card.Body>
                                            </Card.Link>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Link href="/commercial" className='custom-card-link'>
                                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`} className='custom-img-height img_fluid' />
                                                <Card.Body className='bg-blue text-white text-center'>
                                                    <Card.Text href="#Commercial" className='fw-semibold fs-5 uppercase '>Immeuble commercial</Card.Text>
                                                </Card.Body>
                                            </Card.Link>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Link href="/industrial" className='custom-card-link'>
                                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`} className='custom-img-height img_fluid' />
                                                <Card.Body className='bg-blue text-white text-center'>
                                                    <Card.Text href="#Industriel" className='fw-semibold fs-5 uppercase '>Immeuble industriel</Card.Text>
                                                </Card.Body>
                                            </Card.Link>

                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card>
                                            <Card.Link href="/land" className='custom-card-link'>
                                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/accueil_carousel.png`} className='custom-img-height img_fluid' />
                                                <Card.Body className='bg-blue text-white text-center'>
                                                    <Card.Text href="#Industriel" className='fw-semibold fs-5 uppercase '>Terrain</Card.Text>
                                                </Card.Body>
                                            </Card.Link>

                                        </Card>
                                    </Carousel.Item>


                                </Carousel>

                            </Col>
                        </Row>

                        <Row className='p-4'>
                            <Col md={12} className='mb-4'>
                                <h1 className='uppercase'><span className='white' >Propriétés</span>  <span className='blue'>Récentes</span></h1>
                            </Col>
                            <Col md={4} className='mb-5'>
                                <Card className='uppercase'>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/media.png`} />
                                    <Card.Body className='bg-blue'>
                                        <Card.Title className='text-white text-center'>Maison Terre-neuve</Card.Title>
                                    </Card.Body>
                                    <Card.Body className='bg-gray'>
                                        <Card.Text>
                                            Thetford-mines <br></br> 78 Rue Boily
                                        </Card.Text>
                                        <Card.Text className='fw-bold'>$$</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className='mb-5'>
                                <Card className='uppercase'>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/media.png`} />
                                    <Card.Body className='bg-blue'>
                                        <Card.Title className='text-white text-center'>Maison Terre-neuve</Card.Title>
                                    </Card.Body>
                                    <Card.Body className='bg-gray'>
                                        <Card.Text>
                                            Thetford-mines <br></br> 78 Rue Boily
                                        </Card.Text>
                                        <Card.Text className='fw-bold'>$$</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className='mb-5'>
                                <Card className='uppercase'>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/home/media.png`} />
                                    <Card.Body className='bg-blue'>
                                        <Card.Title className='text-white text-center'>Maison Terre-neuve</Card.Title>
                                    </Card.Body>
                                    <Card.Body className='bg-gray'>
                                        <Card.Text>
                                            Thetford-mines <br></br> 78 Rue Boily
                                        </Card.Text>
                                        <Card.Text className='fw-bold'>$$</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row className='p-4'>
                            <Col md={12} lg={7}>
                                <h1 className='uppercase'><span className='white' >Promenade</span>  <span className='blue'>Black Lake</span></h1>
                                <p className='text-white justify mt-4'>Nous possédons PROMENADE BLACK LAKE.
                                    Active dans le domaine de la gestion immobilière de Québec depuis plus de xx ans,
                                    notre société propose à ses clients d’affaires et résidentiels des espaces locatifs situés dans les
                                    secteurs les plus attrayants et animés de la ville de Thetford. Nous sommes attentifs à vos besoins et
                                    soucieux de vous offrir un service sur mesure. Nous possédons PROMENADE BLACK LAKE. Active dans le
                                    domaine de la gestion immobilière de Québec depuis plus de xx ans, notre société propose à ses clients
                                    d’affaires et résidentiels des espaces locatifs situés dans les secteurs les plus attrayants et animés
                                    de la ville de Thetford. Nous sommes attentifs à vos besoins et soucieux de vous offrir un service sur
                                    mesure.
                                </p>
                                <Button href='#promenade' variant="primary">En savoir plus</Button>
                            </Col>
                            <Col lg={5} className='mt-5 mb-3 d-none d-lg-block'>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/home/promenade_bl.png`}
                                    alt="promenade black lake logo"
                                    className="image-custom-logo-bl"
                                />
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className='bg-gray mt-4'>
                        <Row>
                            <Col md={12} className='mx-auto mt-5 mb-4 text-center'>
                                <h3 className='uppercase fw-bold'> Besoin de plus d'informations ?</h3>
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
    }
}
export default Home;