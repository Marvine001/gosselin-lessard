import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import './Footer.css'

//create Footer class
class Footer extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/footer/gosselinlessard_footer.png`} className="custom-img-height-footer" />
                <Card.Body className="bg-blue text-white">
                    <Card.Text className="custom_text-family fs-5">
                        © Tous droits réservés - Gosselin Lessard Inc. 2024
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default Footer;