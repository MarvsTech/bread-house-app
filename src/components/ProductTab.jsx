import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bread1 from '../img/bread-1.png';
import { FiPlus, FiStar } from 'react-icons/fi';

import { useLocation } from "react-router-dom";

const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
};

const ProductTab = () => {
    const [activeTab, setActiveTab] = useState('all');
    const { pathname } = useLocation();
    const products = [
        { id: 1, name: 'Pandesal', category: 'filipino', price: '100', rating: '4.5' },
        { id: 2, name: 'Mamon', category: 'spanish', price: '100', rating: '1.5' },
        { id: 3, name: 'Siomai', category: 'filipino', price: '110', rating: '5.5' },
        { id: 4, name: 'Kalderita', category: 'filipino', price: '120', rating: '2.5' },
        { id: 5, name: 'Gisado', category: 'filipino', price: '130', rating: '6.5' },
    ];

    const filteredProducts = activeTab === 'all' ? products : products.filter(product => product.category === activeTab);
    const chunkedProducts = chunkArray(filteredProducts, 5);
    
    return (
        <div className='container'>
            <h1 className='explore-products'>
                { pathname === "/cart" ? "SUGGESTED PRODUCT FOR YOU" : "EXPLORE MORE PRODUCT CATEGORY" }
                
            </h1>
            <div>
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                    className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                    >
                    All
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className={`nav-link ${activeTab === 'spanish' ? 'active' : ''}`}
                    onClick={() => setActiveTab('spanish')}
                    >
                    Spanish
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className={`nav-link ${activeTab === 'filipino' ? 'active' : ''}`}
                    onClick={() => setActiveTab('filipino')}
                    >
                    Filipino
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className={`nav-link ${activeTab === 'canadian' ? 'active' : ''}`}
                    onClick={() => setActiveTab('canadian')}
                    >
                    Canadian
                    </button>
                </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'all' ? 'show active' : ''}`} id="all">
                    {chunkedProducts.map((row, rowIndex) => (
                        <Row key={rowIndex}>
                        {row.map(product => (
                            <Col key={product.id} className='product-card-container'>
                            <Card className="product-card" key={product.id}>
                                <Card.Body>
                                <div className="blur-background"></div>
                                <img className="product-image" src={Bread1} alt="bread"/>
                                
                                <div className="product-name">{product.name}</div>
                                <div className="product-price">Price: <span>PHP. {product.price}</span></div>
                                </Card.Body>
                                <Card.Footer>
                                <Container>
                                    <Row>
                                    <Col>
                                        <div className="star-container">
                                        <FiStar />
                                        <div className="product-ratings">{product.rating}</div>
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
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTab;
