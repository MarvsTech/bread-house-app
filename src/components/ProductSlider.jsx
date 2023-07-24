import React from 'react';
import { FiPlus, FiStar } from "react-icons/fi";
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

// Import the images for the carousel
import Bread1 from '../img/bread-1.png';
import Bread2 from '../img/bread-2.png';
import Bread3 from '../img/bread-3.png';

const ProductSlider = () => {
  const cardData = [
    {
      title: 'Siomay',
      price: '100',
      rating: '4.1',
      image: Bread1,
    },{
      title: 'Siopao',
      price: '200',
      rating: '4.9',
      image: Bread2, 
    },{
      title: 'Giniling',
      price: '300',
      rating: '3.9',
      image: Bread3, 
    },{
      title: 'balbacua',
      price: '100',
      rating: '4.1',
      image: Bread1, 
    },{
      title: 'kalderata',
      price: '200',
      rating: '4.9',
      image: Bread2, 
    },{
      title: 'hotdog',
      price: '300',
      rating: '3.9',
      image: Bread3, 
    },{
      title: 'Siomay',
      price: '100',
      rating: '4.1',
      image: Bread1,
    },{
      title: 'Siopao',
      price: '200',
      rating: '4.9',
      image: Bread2,
    },{
      title: 'Giniling',
      price: '300',
      rating: '3.9',
      image: Bread3,
    },{
      title: 'balbacua',
      price: '100',
      rating: '4.1',
      image: Bread1,
    },{
      title: 'kalderata',
      price: '200',
      rating: '4.9',
      image: Bread2, 
    },{
      title: 'hotdog',
      price: '300',
      rating: '3.9',
      image: Bread3,
    },{
      title: 'Chorizo',
      price: '300',
      rating: '3.9',
      image: Bread3,
    },{
      title: 'Utan',
      price: '300',
      rating: '3.9',
      image: Bread3,
    },{
      title: 'Torta',
      price: '300',
      rating: '3.9',
      image: Bread3,
    },
  ];

  return (
    <Carousel>
      {cardData.reduce((acc, card, index) => {
        if (index % 5 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(card);
        return acc;
      }, []).map((cardGroup, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row>
              {cardGroup.map((card, innerIndex) => (
                <Col key={innerIndex} className="card-column">
                  <Card>
                    <Card.Body>
                      <div className="blur-background"></div>
                      <img className="product-image" src={card.image} alt={card.title} />
                      <Card.Title className="product-name">{card.title}</Card.Title>
                      <Card.Text className="product-price">Price: <span>PHP. {card.price}</span></Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Container>
                        <Row>
                          <Col>
                            <div className="star-container">
                              <FiStar />
                              <div className="product-ratings">{card.rating}</div>
                            </div>
                          </Col>
                          <Col className="plus-col">
                            <FiPlus className="plus-btn"/>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
