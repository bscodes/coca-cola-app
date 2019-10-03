import React, { Component } from 'react';
import ProductShop from './ProductShop';
import Cart from './Cart';


class MainContainer extends Component {

     render() {
        return (
            <div className="container">
                 <ProductShop />
                 <Cart/>
            </div>
        )
    }
}

export default MainContainer;
