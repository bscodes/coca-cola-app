import React, { Component } from 'react';


class Product extends Component {
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
    render () {
        if (this.props.items) {
            return <div className="minicart">
                        <p>Cart is empty</p>
                   </div>
        }
        return <div className="minicart">
                    <div className="cart-product-details">
                    
                        {this.props.items.map((item, index) => {
                            return <div id={index}>
                                <p className="p-name">${item.price}</p>
                                <p className="p-name">{item.productName}</p>
                                <button>Remove from cart</button>
                            </div>
                        })}
                        <p>Total: ${this.total()}</p>
                    </div>
                </div>
    }
}

export default Product;