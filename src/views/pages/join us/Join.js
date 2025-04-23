import React, { Component } from 'react'
import InputMask from 'react-input-mask'
import { MdOutlinePhoneIphone } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import './Join.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'


//create Join class
class Join extends Component {
    constructor(props) {
        super(props);

        //J'ai ajouté des états pour stocker les valeurs des champs de formulaire (name, email, phone, message) 
        //et les erreurs de validation (errors) et success pour signifier que le message a été envoyer.
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: {},
            succes: false
        }
    }

    //Met à jour l'état lorsqu'un utilisateur saisit des informations dans les champs de formulaire.
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleMessageChange = (e) => {
        const message = e.target.value.slice(0, 500); // Limit to 500 characters
        this.setState({ message });
    }

    //Vérifie que tous les champs sont remplis et retourne un objet errors contenant les messages d'erreur.
    validateForm = () => {
        const { name, email, phone, message } = this.state;
        const errors = {};
        if (!name) errors.name = 'Nom est requis';
        if (!email) errors.email = 'Courriel est requis';
        if (!phone) {
            errors.phone = 'Téléphone est requis';
        } else if (phone.replace(/[^0-9]/g, '').length !== 10) {
            errors.phone = 'Téléphone doit être au format 418-003-0888';
        }
        if (!message) errors.message = 'Message est requis';
        return errors;
    };

    // Valide le formulaire et, s'il n'y a pas d'erreurs, appelle sendEmail.
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.sendEmail();
        } else {
            this.setState({ errors });
        }
    };

    //Envoi de l'email
    sendEmail = () => {
        const { name, email, phone, message } = this.state;
        // Simulating an email send operation
        console.log('Sending email with the following data:', { name, email, phone, message });
        // Reset form and display success message
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: {},
            success: true
        });
        // Hide success message after 5 seconds
        setTimeout(() => {
            this.setState({ success: false });
        }, 2000);
    };

    render() {
        const { name, email, phone, message, errors, success } = this.state;
        return (
            <div className='bg-black'>
                <Header />

                <div >
                    <Row>
                        <Col md={12} className="image-container-join image-query">
                            <div className="image-title-join">
                                <h2 className="text-white uppercase fw-bold fs-1">Contactez-nous</h2>
                            </div>
                        </Col>
                    </Row>

                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={6} className="text-white p-4 mt-5 ">
                                <h3 className='border-title fw-bold uppercase mb-5'>GOSSELIN LESSARD IMMOBILIER</h3>
                                <Row>
                                    <Col xs={1} md={1} lg={1}>
                                        <MdLocationOn className='blue' style={{ width: "30px", height: "30px" }} />
                                    </Col>
                                    <Col xs={11} md={11} lg={11} className='fs-5'>
                                        <p>
                                            851 Boul. Ouellet,
                                            <br />Thetford Mines, QC
                                            <br />G6G 4X7
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1} lg={1} className=''>
                                        <MdOutlinePhoneIphone className='blue' style={{ width: "30px", height: "30px" }} />
                                    </Col>
                                    <Col xs={11} md={11} lg={11} className='fs-5'>
                                        <p>(418) 814-0136 <strong> Hugo GOSSELIN</strong><br />(418) 576-5882 <strong>Christine LESSARD</strong></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1} lg={1}>
                                        <MdOutlineEmail className='blue' style={{ width: "30px", height: "30px" }} />
                                    </Col>
                                    <Col xs={11} md={11} lg={11} className='fs-5'>
                                        <p>Info@gosselinlessard.com</p>
                                    </Col>
                                </Row>
                                <p className='px-4 pt-3 fs-5'><strong>Heures d'ouverture :</strong><br />(Sur rendez-vous)</p>
                            </Col>
                            <Col md={6} className="p-4 mt-5 mb-5">
                                <h3 className="border-title text-white fw-bold uppercase mb-4">écrivez-nous</h3>
                                {success && <Alert variant='success'>Message envoyé avec succès!</Alert>}
                                <Form className='p-4' onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        {/* <Form.Label className="text-white">Nom</Form.Label> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Nom"
                                            value={name}
                                            onChange={this.handleChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="email">
                                        {/* <Form.Label className="text-white">Courriel</Form.Label> */}
                                        <Form.Control
                                            type="email"
                                            placeholder="Courriel"
                                            value={email}
                                            onChange={this.handleChange}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="phone">
                                        {/* <Form.Label className="text-white">Téléphone</Form.Label> */}
                                        <InputMask
                                            mask="999-999-9999"
                                            value={phone}
                                            onChange={this.handleChange}
                                        >
                                            {(inputProps) => (
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Téléphone"
                                                    {...inputProps}
                                                    isInvalid={!!errors.phone}
                                                />
                                            )}
                                        </InputMask>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <br />

                                    <Form.Group controlId="message">
                                        {/* <Form.Label className="text-white">Message</Form.Label> */}
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Message"
                                            value={message}
                                            onChange={this.handleMessageChange}
                                            isInvalid={!!errors.message}
                                        />
                                        <Form.Text className="text-muted bg-white fw-semibold">
                                            {message.length}/500
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message}
                                        </Form.Control.Feedback>
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