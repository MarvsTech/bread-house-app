import React from 'react';
import Logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter,
    BiLogoYoutube, BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <>
        <footer>
            <Container>
                <div className="heading-container">
                    <img src={Logo} alt="logo" />
                    <p>BREADHOUSE</p>
                </div>
                <Row>
                    <Col className='footer-heading'>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                        <div className='social-icon-container mt-5'>
                            <h6>FOLLOW US AT:</h6>

                            <div className="icons">
                                <BiLogoTwitter />
                                <BiLogoFacebook />
                                <BiLogoInstagram />
                                <BiLogoYoutube />
                                <BiLogoGmail />
                            </div>
                        </div>
                    </Col>
                    <Col className="bread-category-container">
                        <div className='bread-category'>
                            <h6>Bread Category</h6>
                            <small>
                                <ul>
                                    <li>BrazilIian Bread</li>
                                    <li>Spanish Bread</li>
                                    <li>Canian Bread</li>
                                    <li>Filipino Bread</li>
                                </ul>
                            </small>                            
                        </div>
                    </Col>
                    <Col className='contact-info-container'>
                        <div className="contact-info">
                            <h6>Address</h6>
                            <small>
                                Mabulo St. Prk. 6 Lanton Brgy. Apopong General Santos city
                            </small>
                        </div>
                        <div className="contact-info mt-5">
                            <h6>Email Address</h6>
                            <small>
                                marvinramos.nutnull@gmail.com <br />
                                marvin.ramos@seedtech.ph
                            </small>
                        </div>
                        <div className="contact-info mt-5">
                            <h6>Phone</h6>
                            <small>
                                09052885214
                            </small>
                        </div>
                    </Col>
                </Row>
                <small>
                    <p className='footer-right'>Copyright © 2023 <strong>BREADHOUSE</strong>. All Rights Reserved.</p>
                </small>
            </Container>
            
        </footer>
    </>
  )
}

export default Footer