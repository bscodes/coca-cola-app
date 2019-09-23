import React, { Component } from 'react';
import './ProductImage.css';
import Image from './classic.png';

class ProductImage extends Component {
    render() {
        return (
            <div className="col-lg-6 mb-2 product-thumbnail">
                <div className="product-name mb-4 mt-4 text-center">
                    <h2>Original.</h2>
                </div>
                <div className="product-img-box mb-4 mt-5">
                    <img src={Image} alt="" className="product-img img-fluid"/>
                </div>
            </div>
        )
    }
}

export default ProductImage;
