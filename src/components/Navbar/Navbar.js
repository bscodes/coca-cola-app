import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './logo.svg';
import './Navbar.css';

 class Navbar extends Component {
    // for total price, do this
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }
    render () {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light mb-3 p-3"> 
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="nav-link"><Logo className="responsive-logo"/></Link>
                    </div>

                    <div>
                        <ul className="navbar-nav ml-auto topnav">
                            <li className="nav-item active">
                                <Link to="/cart" className="nav-link">
                                    <i className="fas fa-shopping-cart">
                                    <div className="cart-price">
                                    {/* total price */}
                                    ${this.total()}
                                    </div>   
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
         items: state.cart
    }
}

export default connect(mapStateToProps) (Navbar)
