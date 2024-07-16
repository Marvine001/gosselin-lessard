import React, { Component } from 'react'
import './Promenade.css'
import HeaderBl from '../../header/Header_bl';
import Footer from '../../footer/Footer';
import { Col, Container, Row, Carousel, Collapse, Button } from 'react-bootstrap';
import { IoBed } from "react-icons/io5"
import { FaBath } from "react-icons/fa"
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoIosRemoveCircleOutline } from "react-icons/io"

const images = [
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png',
    '/images/properties/image-properties.png'

]
class ForPromenade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'photos',
            index: 0,
            sections: {
                terrain: false,
                batiment: false,
                pieces: false,
                caracteristiques: false,
                inclusionsExclusions: false,
            }

        };
        this.imageRefs = [];
    }

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    handleSelect = (selectedIndex) => {
        this.setState({ index: selectedIndex }, () => {
            this.scrollToView(selectedIndex);
        });
    }

    handleImageClick = (idx) => {
        this.setState({ index: idx }, () => {
            this.scrollToView(idx);
        });
    }

    scrollToView = (idx) => {
        if (this.imageRefs[idx]) {
            this.imageRefs[idx].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }

    // toggleCollapse = () => {
    //     this.setState({ open: !this.state.open });
    // }

    toggleSection = (section) => {
        this.setState(prevState => ({
            sections: {
                ...prevState.sections,
                [section]: !prevState.sections[section]
            }
        }));
    }

    render() {
        const { activeTab, index, sections } = this.state;
        return (
            <div className='bg-black'>
                <HeaderBl />

                <div className='mt-5'>
                    <Container fluid>
                        <Row className='px-4'>
                            <Col md={12}>
                                <h3 className='text-center text-white uppercase fw-semibold'> Résidentiel à louer - Black Lake </h3>
                            </Col>
                            <Col md={12}>
                                <h3 className='text-center text-white uppercase'> $$ </h3>
                            </Col>
                        </Row>

                        <Row className='mt-5'>
                            <Col
                                xs={6}
                                md={6}
                                lg={4}
                                className={`p-3 border uppercase text-center fw-semibold ${activeTab === 'photos' ? 'bg-gray' : 'bg-white'}`}
                                onClick={() => this.setActiveTab('photos')}
                                style={{ cursor: 'pointer' }}
                            >
                                Photos
                            </Col>
                            <Col
                                xs={6}
                                md={6}
                                lg={4}
                                className={`p-3 border uppercase text-center fw-semibold ${activeTab === 'carte' ? 'bg-gray' : 'bg-white'}`}
                                onClick={() => this.setActiveTab('carte')}
                                style={{ cursor: 'pointer' }}

                            >
                                Carte
                            </Col>
                            <Col
                                xs={{ span: 12, order: 1 }}
                                md={{ span: 12, order: 1 }}
                                lg={{ span: 4, order: 0 }}
                                className='bg-blue text-white p-3 border uppercase text-center fw-semibold'>
                                Détails
                            </Col>
                            <Col
                                xs={{ span: 12, order: 0 }}
                                md={{ span: 12, order: 0 }}
                                lg={{ span: 8, order: 1 }}
                                className='p-0'>
                                {/* <img
                                    src={`${process.env.PUBLIC_URL}/images/properties/image-properties.png`}
                                    alt='ILLUSTRaTION '
                                    className='full-width-image'
                                /> */}
                                {activeTab === 'photos' && (
                                    <Carousel activeIndex={index} onSelect={this.handleSelect}>
                                        {images.map((image, idx) => (
                                            <Carousel.Item key={idx}>
                                                <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                )}

                                {activeTab === 'carte' && (
                                    <div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5052065576783!2d-122.33583748436696!3d47.60801307918556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102bff4af849%3A0x4cbcc01627d2d8bb!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1596174901810!5m2!1sen!2sus"
                                            width="100%"
                                            height="450"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                            title="Google Map"
                                        ></iframe>
                                    </div>
                                )}
                            </Col>
                            <Col
                                xs={{ span: 12, order: 2 }}
                                md={{ span: 12, order: 2 }}
                                lg={{ span: 4, order: 2 }}
                                className='text-white p-3'>
                                <h3 className='uppercase'>1378 rue champignon Thetford mines, QC G6G XXX</h3>
                                <hr className='white'></hr>
                                <p className='justify'>
                                    À louer superbe local au 1er étage dans une nouvelle bâtisse de prestige, très bien situé,
                                    voisin du McDonald, idéal pour bureau de professionnel ou autre. 1 local disponibles 2170p.c.
                                    Locataire avec bonne référence seulement. Grand espace de parking.
                                    <br />
                                    <br />
                                    <span className='fw-semibold fs-5'>Nombre de pièce: 0</span>
                                    <br />
                                    <span className='fw-semibold fs-5'>Pied de carré disponible: 788 Pi²</span>
                                </p>

                            </Col>
                        </Row>
                        {activeTab === 'photos' && (
                            <Row className='bg-gray d-none d-lg-block'>
                                <Col xs={12} md={12} lg={12} className='bg-gray p-0'>
                                    <div className="second-carousel">
                                        {images.map((image, idx) => (
                                            <div
                                                key={idx}
                                                ref={(ref) => this.imageRefs[idx] = ref}
                                                className={`image-containers ${index === idx ? 'active' : 'inactive'}`}
                                                onClick={() => this.handleImageClick(idx)}
                                            >
                                                <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        )}

                        <Row className='bg-blue text-white text-center uppercase py-4'>
                            <Col
                                xs={6}
                                md={6}
                                lg={6}
                            >
                                <IoBed className='icon-1 pb-1' />
                                <br />
                                3 Chambres
                            </Col>
                            <Col
                                xs={6}
                                md={6}
                                lg={6}
                            >
                                <FaBath className='icon-1 pb-1' />
                                <br />
                                1 salle de Bain
                            </Col>
                        </Row>

                        <div>
                            {/* Your other component code */}
                            <Row className='pt-5 px-3 text-white '>
                                <Col xs={9} md={9} lg={9} className='uppercase ps-5'>
                                    <h3>Particularités du terrain</h3>
                                </Col>
                                <Col xs={3} md={3} lg={3} className=''>
                                    <div className='icon-container'>
                                        {sections.terrain ? (
                                            <IoIosRemoveCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('terrain')}
                                                aria-controls="terrain-collapse-text"
                                                aria-expanded={sections.terrain}
                                            />
                                        ) : (
                                            <IoIosAddCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('terrain')}
                                                aria-controls="terrain-collapse-text"
                                                aria-expanded={sections.terrain}
                                            />
                                        )}
                                    </div>
                                </Col>
                                <hr className='mt-4 border-5'></hr>
                                <Col xs={12} md={12} lg={12} className='px-4'>
                                    <Collapse in={sections.terrain}>
                                        <div id="terrain-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row className='p-3 text-white '>
                                <Col xs={9} md={9} lg={9} className='uppercase ps-5'>
                                    <h3>Particularités du batiment</h3>
                                </Col>
                                <Col xs={3} md={3} lg={3} className=''>
                                    <div className='icon-container'>
                                        {sections.batiment ? (
                                            <IoIosRemoveCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('batiment')}
                                                aria-controls="batiment-collapse-text"
                                                aria-expanded={sections.batiment}
                                            />
                                        ) : (
                                            <IoIosAddCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('batiment')}
                                                aria-controls="batiment-collapse-text"
                                                aria-expanded={sections.batiment}
                                            />
                                        )}
                                    </div>
                                </Col>
                                <hr className='mt-4 border-5'></hr>
                                <Col xs={12} md={12} lg={12} className='px-4'>
                                    <Collapse in={sections.batiment}>
                                        <div id="batiment-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row className='p-3 text-white '>
                                <Col xs={9} md={9} lg={9} className='uppercase ps-5'>
                                    <h3>Détails des pièces</h3>
                                </Col>
                                <Col xs={3} md={3} lg={3} className=''>
                                    <div className='icon-container'>
                                        {sections.pieces ? (
                                            <IoIosRemoveCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('pieces')}
                                                aria-controls="pieces-collapse-text"
                                                aria-expanded={sections.pieces}
                                            />
                                        ) : (
                                            <IoIosAddCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('pieces')}
                                                aria-controls="pieces-collapse-text"
                                                aria-expanded={sections.pieces}
                                            />
                                        )}
                                    </div>
                                </Col>
                                <hr className='mt-4 border-5'></hr>
                                <Col xs={12} md={12} lg={12} className='px-4'>
                                    <Collapse in={sections.pieces}>
                                        <div id="pieces-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row className='p-3 text-white '>
                                <Col xs={9} md={9} lg={9} className='uppercase ps-5'>
                                    <h3>Caractéristiques</h3>
                                </Col>
                                <Col xs={3} md={3} lg={3} className=''>
                                    <div className='icon-container'>
                                        {sections.caracteristiques ? (
                                            <IoIosRemoveCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('caracteristiques')}
                                                aria-controls="caracteristiques-collapse-text"
                                                aria-expanded={sections.caracteristiques}
                                            />
                                        ) : (
                                            <IoIosAddCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('caracteristiques')}
                                                aria-controls="caracteristiques-collapse-text"
                                                aria-expanded={sections.caracteristiques}
                                            />
                                        )}
                                    </div>
                                </Col>
                                <hr className='mt-4 border-5'></hr>
                                <Col xs={12} md={12} lg={12} className='px-4'>
                                    <Collapse in={sections.caracteristiques}>
                                        <div id="caracteristiques-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row className='pb-5 px3 text-white '>
                                <Col xs={9} md={9} lg={9} className='uppercase ps-5'>
                                    <h3>Inclusions & Exclusions</h3>
                                </Col>
                                <Col xs={3} md={3} lg={3} className=''>
                                    <div className='icon-container'>
                                        {sections.inclusionsExclusions ? (
                                            <IoIosRemoveCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('inclusionsExclusions')}
                                                aria-controls="inclusionsExclusions-collapse-text"
                                                aria-expanded={sections.inclusionsExclusions}
                                            />
                                        ) : (
                                            <IoIosAddCircleOutline
                                                className='icon-2'
                                                onClick={() => this.toggleSection('inclusionsExclusions')}
                                                aria-controls="inclusionsExclusions-collapse-text"
                                                aria-expanded={sections.inclusionsExclusions}
                                            />
                                        )}
                                    </div>
                                </Col>
                                <hr className='mt-4 border-5'></hr>
                                <Col xs={12} md={12} lg={12} className='px-4'>
                                    <Collapse in={sections.inclusionsExclusions}>
                                        <div id="inclusionsExclusions-collapse-text">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                        </div>

                        <Row className='bg-gray p-5'>
                            <Col md={12} className='mx-auto p-2 text-center'>
                                <h3 className='uppercase fw-bold'> Besoin de plus d'informations ?</h3>
                            </Col>
                            <Col md={12} className='mx-auto text-center p-2'>
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
export default ForPromenade;