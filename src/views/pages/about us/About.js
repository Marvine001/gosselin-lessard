import React, { Component } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { ReactComponent as FacebookIcon } from '../../../icons/facebook.svg';
import { ReactComponent as MailIcon } from '../../../icons/mail.svg';
import './About.css'


//create About class
class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bg-black'>
                    <Row>
                        <Col md={12} className="image-container image-query">
                            <div className="image-title">
                                <h2 className="text-white uppercase fw-bold fs-1">A propos</h2>
                            </div>
                        </Col>
                    </Row>
                    <Container>
                        <Row className='px-4'>
                            <Col md={12} className="my-5">
                                <p className='justify text-white fs-4'> <span className='fw-bold'>Gosselin Lessard Immobilier</span>  est propriétaire et gestionnaire
                                    d'immeubles commerciaux, résidentiels, industriels ainsi que des terrains dans la région de Thetford Mines .
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies eget fames venenatis egestas
                                    amet ipsum semper. Dui, nascetur lectus arcu, egestas. Porta vulputate erat magna arcu at mauris.
                                    Non quisque amet massa vulputate eget. Praesent sem tempus, diam ut amet. Bibendum mauris id enim tempor,
                                    scelerisque justo massa tortor at. Vitae mauris risus enim nisl fermentum. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Ultricies eget fames venenatis egestas amet ipsum semper. Dui,
                                    nascetur lectus arcu, egestas. Porta vulputate erat magna arcu at mauris. Non quisque amet massa
                                    vulputate eget. Praesent sem tempus, diam ut amet. Bibendum mauris id enim tempor, scelerisque justo
                                    massa tortor at. Vitae mauris risus enim nisl fermentum.</p>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center align-items-center px-4'>
                            <Col md={6} className='d-flex justify-content-center align-items-center mb-5'>
                                <Card className='mb-5' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/about_us/profil.png`} />
                                    <Card.Body className='bg-blue text-white'>
                                        <Card.Title className='fs-5 fw-bold'>Olivier Test</Card.Title>
                                        <Card.Text className='mt-4'>
                                            <Row>
                                                <Col xs={7} md={8} className='d-flex justify-content-start fw-semibold'> Président </Col>
                                                <Col xs={5} md={4} className="d-flex justify-content-around">
                                                    <div className="icon-circle">
                                                        <FacebookIcon className="icon" />
                                                    </div>
                                                    <div className="icon-circle">
                                                        <MailIcon className="icon" />
                                                    </div>
                                                </Col>  {/* inserer svg facebook et mail */}
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center align-items-center mb-5'>
                                <Card className='mb-5' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/about_us/profil.png`} />
                                    <Card.Body className='bg-blue text-white'>
                                        <Card.Title className='fs-5 fw-bold'>Olivier Test</Card.Title>
                                        <Card.Text className='mt-4'>
                                            <Row>
                                                <Col xs={7} md={8} className='d-flex justify-content-start fw-semibold'> Président </Col>
                                                <Col  xs={5} md={4} className="d-flex justify-content-around">
                                                    <div className="icon-circle">
                                                        <FacebookIcon className="icon" />
                                                    </div>
                                                    <div className="icon-circle">
                                                        <MailIcon className="icon" />
                                                    </div>
                                                </Col> 
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Container>
                </div>
                <Footer />
            </div>

        );
    }
}
export default About;