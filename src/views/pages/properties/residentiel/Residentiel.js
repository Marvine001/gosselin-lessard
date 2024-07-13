import React, { Component } from 'react'
import './Residentiel.css'
import Header from '../../../header/Header'
import Footer from '../../../footer/Footer'
import { Row, Col, Container, Card } from 'react-bootstrap'


class Residentiel extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className='bg-black'>
                    <Row>
                        <Col md={12} className="image-container-residential image-query">
                            <div className="image-title-residential">
                                <h2 className="text-white uppercase fw-bold fs-1">Nos immeubles résidentiels</h2>
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
                                                <Card.Text>
                                                    <Row>
                                                        <Col xs={8} md={8} className='fw-bold'>$$</Col>
                                                        <Col xs={4} md={4}>
                                                            <div className="icons">
                                                                <span role="img" aria-label="beds">🛏️ 3</span>
                                                                <span role="img" aria-label="baths">🛁 1</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
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
export default Residentiel;