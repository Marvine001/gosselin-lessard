import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { MdOutlinePhoneIphone, MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Join.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import emailjs from 'emailjs-com'; // You'll need to install this package

// Composant contact info pour réduire la répétition
const ContactInfoItem = ({ icon: Icon, children }) => (
  <Row className="mb-3">
    <Col xs={1} md={1} lg={1}>
      <Icon className='blue' style={{ width: "30px", height: "30px" }} />
    </Col>
    <Col xs={11} md={11} lg={11} className='fs-5'>
      {children}
    </Col>
  </Row>
);

const Join = () => {
  // Utilisation de useState pour gérer l'état du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Destructuration des données du formulaire
  const { name, email, phone, message } = formData;

  // Mise à jour des champs du formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: id === 'message' ? value.slice(0, 500) : value
    }));
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Nom est requis';
    if (!email) newErrors.email = 'Courriel est requis';
    if (!phone) {
      newErrors.phone = 'Téléphone est requis';
    } else if (phone.replace(/[^0-9]/g, '').length !== 10) {
      newErrors.phone = 'Téléphone doit être au format 418-003-0888';
    }
    if (!message) newErrors.message = 'Message est requis';
    return newErrors;
  };

  // Envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      
      // Préparation des données pour l'envoi d'email
      const templateParams = {
        to_email: 'info@gosselinlessard.com', // L'adresse email de destination
        from_name: name,
        from_email: email,
        phone: phone,
        message: message
      };
      
      // Envoi de l'email via EmailJS
      // Remplacez 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', et 'YOUR_USER_ID' par vos identifiants EmailJS
      emailjs.send(
        'service_soblcx9',
        'template_d2m4sdx',
        templateParams,
        'hBFj99RBjWTx0WzCy'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          
          // Réinitialisation du formulaire et affichage du message de succès
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
          setSuccess(true);
          setLoading(false);
          
          // Masquer le message de succès après 2 secondes
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }, (err) => {
          console.log('FAILED...', err);
          setErrors({ submit: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.' });
          setLoading(false);
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='bg-black'>
      <Header />

      <div>
        
          <div className="image-container-join image-query">
            <div className="image-title-join">
              <h1 className="text-white uppercase fw-bold fs-1">Contactez-nous</h1>
            </div>
          </div>
        

        <Container>
          <Row className="justify-content-md-center">
            {/* Informations de contact */}
            <Col md={6} className="text-white p-4 mt-5">
              <h3 className='border-title fw-bold uppercase mb-5'>GOSSELIN LESSARD IMMOBILIER</h3>
              
              <ContactInfoItem icon={MdLocationOn}>
                <p>
                  851 Boul. Ouellet,
                  <br />Thetford Mines, QC
                  <br />G6G 4X7
                </p>
              </ContactInfoItem>
              
              <ContactInfoItem icon={MdOutlinePhoneIphone}>
                <p>(418) 814-0136 <strong> Hugo GOSSELIN</strong><br />(418) 576-5882 <strong>Christine LESSARD</strong></p>
              </ContactInfoItem>
              
              <ContactInfoItem icon={MdOutlineEmail}>
                <p>Info@gosselinlessard.com</p>
              </ContactInfoItem>
              
              <p className='px-4 pt-3 fs-5'><strong>Heures d'ouverture :</strong><br />(Sur rendez-vous)</p>
            </Col>
            
            {/* Formulaire de contact */}
            <Col md={6} className="p-4 mt-5 mb-5">
              <h3 className="border-title text-white fw-bold uppercase mb-4">écrivez-nous</h3>
              {success && <Alert variant='success'>Message envoyé avec succès!</Alert>}
              {errors.submit && <Alert variant='danger'>{errors.submit}</Alert>}
              
              <Form className='p-4' onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Courriel"
                    value={email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="phone" className="mb-3">
                  <InputMask
                    mask="999-999-9999"
                    value={phone}
                    onChange={handleChange}
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

                <Form.Group controlId="message" className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Text className="text-muted bg-white fw-semibold">
                    {message.length}/500
                  </Form.Text>
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Join;