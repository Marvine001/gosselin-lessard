import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css';

// Composant Footer optimisé en fonction
const Footer = () => {
    return (
        <footer>
            <Card className="footer-card">
                <Card.Img 
                    variant="top" 
                    src={`${process.env.PUBLIC_URL}/images/footer/gosselinlessard_footer.png`} 
                    className="custom-img-height-footer" 
                    alt="Gosselin Lessard Footer"
                    loading="lazy"
                />
                <Card.Body className="bg-blue text-white text-center">
                    <Card.Text className="custom_text-family fs-5 mb-0">
                        © Tous droits réservés - Gosselin Lessard Inc. 2025
                    </Card.Text>
                </Card.Body>
            </Card>
        </footer>
    );
};

export default Footer;