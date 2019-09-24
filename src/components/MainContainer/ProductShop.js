import React, { Component } from 'react';
import './ProductShop.css';

class ProductShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            fontSize : "",
            boxWidth: "50"
        };
    }
    
    updateInputValue = (e) => {
        const {name,boxWidth} = this.state;
        this.setState({
            [e.target.name] : e.target.value
        });
        // eğer p'nin uzunluğu div'i geçiyorsa
        // fontsize'da -1 yap
        /* if (name.length >= 17) {
            this.setState({
                fontSize : "19"
            })
        } else if (name.length === 13) {
            this.setState({
                fontSize : "31"
            })
        } else if (name.length === 12) {
            this.setState({
                fontSize : "28"
            })
        } else if (name.length === 11) {
            this.setState({
                fontSize : "31"
            })
        } else if (name.length === 10) {
            this.setState({
                fontSize : "34"
            })
        } else if (name.length === 9) {
            this.setState({
                fontSize : "38"
            })
        } else if (name.length === 8) {
            this.setState({
                fontSize : "42"
            })
        } else {
            this.setState({
                fontSize : "44"
            })
        } */
    }

    addName = (e) => {
        e.preventDefault();
        // set add to cart 
    }

    

    render() {
        const {name,fontSize,boxWidth} = this.state;
        return (
            <div className="col-lg-6 col-md-6 mb-4 product-shop">
                <div className="product-right mb-4">
                    <div className="product-name">
                        <h1>Original.</h1>
                    </div>
                    <div className="product-info mt-4">
                        <h5 className="product-info-text">Get a special name or personal message on a Coke bottle. 
                        Great for gifting, birthdays/holidays, weddings, 
                        corporate events, party favors, and more.
                        </h5>
                    </div>
                    <div className="product-options mt-4">
                        <form onSubmit = {this.addName.bind(this)}>
                            <div className="form-group mb-4">
                                <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter any name up to 18 characters"
                                name="name"
                                value = {name}
                                onChange = {this.updateInputValue}
                                maxLength = "18"
                                />
                            </div>
                            <hr/>
                            <div className="input-value" style={{width: boxWidth + '%'}}>
                                <p className="input-value-text" style={{fontSize: fontSize+'px'}}>
                                {name}
                                </p>
                            </div>
                            <div className="price-info mb-4">
                                <div className="price-box">
                                    <h3>$5.00</h3>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block mt-2">ADD TO CART</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShop;
