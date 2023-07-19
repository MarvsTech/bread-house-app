import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Quality from '../img/quality.png';
import Shipping from '../img/shipping.png';
import Return from '../img/return.png';
import Support from '../img/support.png';

const Service = () => {
  return (
    <>
        <Container>
            <Row>
                <Col xs={3}>
                    <img src={Quality} alt="Quality Product" />
                    <p>Quality Product</p>
                </Col>
                <Col xs={3}>
                    <img src={Shipping} alt="Free Shipping" />
                    <p>Free Shipping</p>
                </Col>
                <Col xs={3}>
                    <img src={Return} alt="14-Day Return" />
                    <p>14-Day Return</p>
                </Col>
                <Col xs={3}>
                    <img src={Support} alt="24/7 Support" />
                    <p>24/7 Support</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Service