import React, { Component } from 'react';


class Cart extends Component {
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
    render () {
        if (this.props.items.length === 0 ) {
            return <div className="minicart">
                        <p>Cart is empty</p>
                   </div>
        }
        return <div className="minicart">
                    <div className="cart-product-details">
                    
                        {this.props.items.map((item, index) => {
                            return <div key={index}>
                                <p className="p-name">{item.productName}</p>
                                <p className="p-name">${item.price}</p>
                                <button 
                                onClick={() => this.props.removeFromCart(index)}>
                                Remove from cart</button>
                            </div> 
                        })}
                        <p>Total: ${this.total()}</p>
                    </div>
                </div>
    }
}

export default Cart;