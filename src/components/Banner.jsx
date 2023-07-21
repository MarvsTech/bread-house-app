import React, { useState } from 'react';
import { FiStar, FiThumbsUp, FiHeart, FiEye, FiShoppingBag } from "react-icons/fi";

import Bread1 from '../img/bread-1.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useLocation } from "react-router-dom";
import ProductCounter from './ProductCounter';

const Banner = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { pathname } = useLocation();

    return (
        <Container className='banner-container'>
            <Row className='banner-row'>
                <Col md={6} className='image-container'>
                    <div className="blur-1"></div>
                    <div className="blur-2"></div>
                    <div className="blur-3"></div>
                    <img className="banner-image" src={Bread1} alt='Bread'/>
                </Col>
                <Col md={6}>
                    <div className="banner-title">BAGUETTE VIENNOISE</div>
                    <div className='banner-star-container'>
                        <Col md={2} sm={6}>
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                        </Col>
                        <Col md={10} sm={6}>
                            <p className="banner-star-rating">(200+ REVIEWS)</p>
                        </Col>
                    </div>
                    <div>
                        <p className="banner-description">
                            French bakeries often sell mouth-watering Baguette Viennoise alongside homemade Baguette Tradition. This is the best place to show the skills of a baker. It is also the result of a long history and tradition.
                        </p>
                    </div>

                    { pathname === "/cart" ? <ProductCounter /> : null }

                    <div className="banner-sub-title">PRICE: <span>PHP 100.00</span></div>
                    
                    <Row>
                        <Col md={6} className='product-icon-info-container'>
                            <FiThumbsUp />
                            <FiHeart />
                            <FiEye />
                        </Col>
                        <Col md={6} className='product-icon-buy-container'>
                            <FiShoppingBag />
                            <Button variant="primary" size="md" onClick={handleShow} >Buy Now</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                <FiShoppingBag />
                <h1>ARE YOU SURE YOU WANT TO PURCHASE THIS PRODUCTS?</h1>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose} className='purchase'>
                    PURCHASE
                </Button>
                <Button onClick={handleClose} className='cancel'>
                    CANCEL
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Banner