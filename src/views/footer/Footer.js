import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import './Footer.css'

//create Footer class
class Footer extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/gosselinlessard_footer.png`} className="custom-img-height" />
                <Card.Body className="bg-blue text-white">
                    <Card.Text className="custom_text">
                        © Tous droits réservés - Gosselin Lessard Inc. 2024
                    </Card.Text>
                </Card.Body>
            </Card>
            // <div className='bg-blue'>
            //     <Container fluid className=''>
            //         <img
            //             src={`${process.env.PUBLIC_URL}/gosselinlessard_footer.png`}
            //             className="logo_footer"
            //             alt="Gosselin Lessard"
            //         />
            //     </Container>
            // </div>
        );
    }
}
export default Footer;