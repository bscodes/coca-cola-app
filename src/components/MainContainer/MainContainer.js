import React, { Component } from 'react';
import ProductShop from './ProductShop';
import Product from './Product';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(item) {
        const cart = [...this.state.cart, item]
        this.setState({cart})

    }
    render() {
        return (
            <div className="container">
                 <ProductShop addToCart={this.addToCart}/>
                 <Product items={this.state.cart}/>
            </div>
        )
    }
}

export default MainContainer;
