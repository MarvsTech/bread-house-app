import React from 'react'

import Table from 'react-bootstrap/Table';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { FiTrash2 } from "react-icons/fi";

const ProductTable = () => {

    const products = [
        { id: 1, name: 'Pandesal', price: '100', quantity: '5', total: '500', checkbox: <Form.Check type="checkbox" />, delete: <FiTrash2 /> },
        { id: 2, name: 'Kalderita', price: '50', quantity: '5', total: '50', checkbox: <Form.Check type="checkbox" />, delete: <FiTrash2 /> },
        { id: 3, name: 'Dinuguan', price: '80', quantity: '5', total: '10', checkbox: <Form.Check type="checkbox" />, delete: <FiTrash2 /> },
        { id: 4, name: 'Pamcit', price: '70', quantity: '9', total: '10', checkbox: <Form.Check type="checkbox" />, delete: <FiTrash2 /> },
    ];

    const purchases = products.map((product) => 
        <tr key={product.id}>
            <td>{product.checkbox}</td>
            <td>{product.id}</td>
            <td className='product-name-table'>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}5</td>
            <td>{product.total}</td>
            <td>{product.delete}</td>
        </tr>
    );
    return (
        <div className='container'>
            <Table striped bordered hover className='product-table' responsive="sm">
                <thead>
                    <tr>
                        <th>
                            <Form.Check type="checkbox" />
                        </th>
                        <th>#</th>
                        <th className='product-name-table'>Products</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {purchases}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable