import React, { Component } from 'react';
import ProductShop from './ProductShop';
import Cart from './Cart';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    addToCart = (item) => {
        const cart = [...this.state.cart, item]
        this.setState({cart})

    }

    removeFromCart = (index) => {
        const cart = [...this.state.cart]
        cart.splice(index, 1)
        this.setState({cart}) 
    }
    render() {
        return (
            <div className="container">
                 <ProductShop addToCart={this.addToCart}/>
                 <Cart 
                 items={this.state.cart} 
                 removeFromCart={this.removeFromCart}
                 />
            </div>
        )
    }
}

export default MainContainer;
