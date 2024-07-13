import React, { Component } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Header from '../../../header/Header'
import Footer from '../../../footer/Footer'
import './Commercial.css'

class Commercial extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className='bg-black'>
                    <Row>
                        <Col md={12} className="image-container-commercial image-query">
                            <div className="image-title-commercial">
                                <h2 className="text-white uppercase fw-bold fs-1 nowrap">Nos immeubles commerciaux</h2>
                            </div>
                        </Col>
                    </Row>

                    <Container className=''>
                        <Row xs={1} md={3} className="g-3 py-5">
                            {Array.from({ length: 9 }).map((_, idx) => (
                                <Col key={idx} className='p-4'>
                                    <Card className='uppercase'>
                                        <Card.Link href="#link" className='custom-card-link'>
                                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/properties/image-properties.png`} />
                                            <Card.Body className='bg-blue'>
                                                <Card.Title className='text-white text-center'>Maison Terre-neuve</Card.Title>
                                            </Card.Body>
                                            <Card.Body className='bg-gray'>
                                                <Card.Text>
                                                    Thetford-mines <br></br> 78 Rue Boily
                                                </Card.Text>
                                                <Card.Text className='fw-bold'>
                                                    10$ pi²/année
                                                </Card.Text>
                                            </Card.Body>
                                        </Card.Link>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

                <Footer />
            </div>
        );
    }
}
export default Commercial;