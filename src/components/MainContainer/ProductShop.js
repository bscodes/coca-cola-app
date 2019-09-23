import React, { Component } from 'react';
import './ProductShop.css';

class ProductShop extends Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 mb-4 product-shop">
                <div className="product-right mb-4">
                    <div className="product-name">
                        <h1>Original.</h1>
                    </div>
                    {/* <div className="price-info">
                        <div className="price-box">
                            <h3>$5.00</h3>
                        </div>
                    </div> */}
                    <div className="product-info mt-4">
                        <h5 className="product-info-text">Get a special name or personal message on a Coke bottle. 
                        Great for gifting, birthdays/holidays, weddings, 
                        corporate events, party favors, and more.
                        </h5>
                    </div>
                    <div className="product-options mt-4">
                        <form>
                            <div className="form-group">
                                <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter any name up to 18 characters"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShop;
