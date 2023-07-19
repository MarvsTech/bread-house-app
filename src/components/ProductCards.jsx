import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bread1 from '../img/bread-1.png';
import { FiPlus, FiStar } from "react-icons/fi";

const ProductCards = () => {
  return (
    <Card className="product-card">
      <Card.Body>
        <div className="blur-background"></div>
        <img className="product-image" src={Bread1} alt="bread"/>
        
        <div className="product-name">Pão De Queijo</div>
        <div className="product-price">Price: <span>PHP. 200</span></div>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row>
            <Col>
              <div className="star-container">
                <FiStar />
                <div className="product-ratings">4.5</div>
              </div>
            </Col>
            <Col className="plus-col">
              <FiPlus className="plus-btn"/>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  )
}

export default ProductCards