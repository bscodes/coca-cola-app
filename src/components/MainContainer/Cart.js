import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductShop.css';


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
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5 mt-5 empty-cart">
                                <h3>You have no items in your shopping cart.</h3>
                            </div>
                        </div>
                   </div>
        }
        console.log("Items are added")
        return <div className="minicart">
                    <div className="container cart-product-details">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                

                                
                                {this.props.items.map((item, index) => {
                                    return(
                                    <tbody key={index}>
                                      <tr>
                                        <th scope="row">{item.units}</th>
                                        <td>{item.productName}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.props.removeFromCart(index)}>
                                              Remove
                                            </button>
                                        </td>
                                      </tr>
                                    </tbody> 
                                    )
                                    
                                })}
                                    
                                    <tfoot>
                                        <tr>
                                            <td><h5>Total: </h5></td>
                                            <td></td>
                                            <td></td>
                                            <td><h5>${this.total()}</h5></td>
                                        </tr>
                                    </tfoot>
                            </table>
                            </div>
                        </div>
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