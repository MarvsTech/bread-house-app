import React from 'react'
import { FiStar, FiThumbsUp, FiHeart, FiEye, FiShoppingBag } from "react-icons/fi";

import Bread1 from '../img/bread-1.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Banner = () => {
  return (
    <Container className='banner-container'>
        <Row className='banner-row'>
            <Col sm={6} className='image-container'>
                <div className="blur-1"></div>
                <div className="blur-2"></div>
                <div className="blur-3"></div>
                <img className="banner-image" src={Bread1} alt='Bread'/>
            </Col>
            <Col sm={6}>
                <div className="banner-title">BAGUETTE VIENNOISE</div>
                <div className='banner-star-container'>
                    <Col sm={2}>
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </Col>
                    <Col sm={10}>
                        <p className="banner-star-rating">(200+ REVIEWS)</p>
                    </Col>
                </div>
                <div>
                    <p className="banner-description">
                        French bakeries often sell mouth-watering Baguette Viennoise alongside homemade Baguette Tradition. This is the best place to show the skills of a baker. It is also the result of a long history and tradition.
                    </p>
                </div>
                <div className="banner-sub-title">PRICE: <span>PHP 100.00</span></div>
                <Row>
                    <Col sm={6} className='product-icon-info-container'>
                        <FiThumbsUp />
                        <FiHeart />
                        <FiEye />
                    </Col>
                    <Col sm={6} className='product-icon-buy-container'>
                        <FiShoppingBag />
                        <Button variant="primary" size="md" disabled>Buy Now</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner