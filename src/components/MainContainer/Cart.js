import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
    
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
    render () {
        if (this.props.items.length === 0 ) {
            console.log("the cart is empty")
            return <div className="minicart">
                        <div className="container d-flex justify-content-center">
                            <div className="row">
                                <div className="cart-body">
                                    <h3>EMPTY</h3>
                                </div>
                            </div>
                        </div>
                   </div>
        }
        console.log("Items are added")
        return <div className="minicart">
                    <div className="container cart-product-details">
                    
                        {this.props.items.map((item, index) => {
                            return <div key={index}>
                                <p className="p-name">{item.productName}</p>
                                <p className="p-price">${item.price}</p>
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

function mapStateToProps(state) {
    return {
         items: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (index) => {
            dispatch({
                type: 'REMOVE_FROM_CART',
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Cart)