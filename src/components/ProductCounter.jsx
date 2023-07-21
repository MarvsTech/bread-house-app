import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FiPlus, FiMinus, FiRotateCcw } from "react-icons/fi";

const ProductCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className='product-counter-container'>
            <div className="product-counter-wrapper">
                <div className="plus-icon-wrapper">
                    <Button onClick={handleIncrement}>
                        <FiPlus />
                    </Button>
                </div>
                <div className="number-wrapper">
                    <h1>{count}</h1>
                </div>
                <div className="minus-icon-wrapper">
                    <Button onClick={handleDecrement}>
                        <FiMinus />
                    </Button>
                </div>
            </div>
            <div className="product-reset-wrapper">
                <Button onClick={handleReset}>
                    <FiRotateCcw />
                </Button>
            </div>
        </div>
    )
}

export default ProductCounter