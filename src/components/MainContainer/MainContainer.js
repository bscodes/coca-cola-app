import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductShop from './ProductShop';


class MainContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ProductImage/>
                    <ProductShop/>
                </div>
            </div>
        )
    }
}

export default MainContainer;
