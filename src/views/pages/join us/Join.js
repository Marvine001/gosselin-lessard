import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './Join.css'


//create Join class
class Join extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className='bg-black'>
                    <Row>
                        <Col md={12} className="image-container-join image-query">
                            <div className="image-title-join">
                                <h2 className="text-white uppercase fw-bold fs-1">Contactez-nous</h2>
                            </div>
                        </Col>
                    </Row>

                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="6" className="text-white p-4 mt-5 ">
                                <h3 className='border-title fw-bold uppercase mb-5'>GOSSELIN LESSARD IMMOBILIER</h3>
                                <p className='px-4'>851 Boul. Ouellet,<br />Thetford Mines, QC<br />G6G 4X7</p>
                                <p className='px-4'>Tel: (418) 814-0136<br /> (418) 576-5882</p>
                                <p className='px-4'>Hugo@gosselinlessard.com<br />Info@gosselinlessard.com</p>
                                <p className='px-4 pt-3'><strong>Heures d'ouverture :</strong><br />(Sur rendez-vous)</p>
                            </Col>
                            <Col md="6" className="p-4 mt-5 mb-5">
                                <h3 className="border-title text-white fw-bold uppercase mb-4">écrivez-nous</h3>
                                <Form className='p-4'>
                                    <Form.Group controlId="formName">
                                        {/* <Form.Label className="text-white">Nom</Form.Label> */}
                                        <Form.Control type="text" placeholder="Nom" />
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="formEmail">
                                        {/* <Form.Label className="text-white">Courriel</Form.Label> */}
                                        <Form.Control type="email" placeholder="Courriel" />
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="formPhone">
                                        {/* <Form.Label className="text-white">Téléphone</Form.Label> */}
                                        <Form.Control type="text" placeholder="Téléphone" />
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="formMessage">
                                        {/* <Form.Label className="text-white">Message</Form.Label> */}
                                        <Form.Control as="textarea" rows={3} placeholder="Message" />
                                    </Form.Group>
                                    <br />
                                    <Button variant="primary" type="submit">
                                        Envoyer
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </div>
        );
    }
}
export default Join;