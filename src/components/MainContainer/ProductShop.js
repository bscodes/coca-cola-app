import React, { Component } from 'react';
import './ProductShop.css';
import Image from './classic.png';
import Product from './Product';

const products = [
    
        {
            id: 1,
            productName: "",
            price: 5.00
        }
]

class ProductShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            fontSize : "",
            boxWidth: "190"
        };
    }
    
    updateInputValue = (e) => {
        const {name} = this.state;
        this.setState({
            [e.target.name] : e.target.value
        });
        
        if (name.length === 16) {
            this.setState({
                fontSize : "22"
            })
        } else if (name.length === 15) {
            this.setState({
                fontSize : "22"
            })
        } else if (name.length === 14) {
            this.setState({
                fontSize : "25"
            })
        } else if (name.length === 13) {
            this.setState({
                fontSize : "27"
            })
        } else if (name.length === 12) {
            this.setState({
                fontSize : "29"
            })
        } else if (name.length === 11) {
            this.setState({
                fontSize : "31"
            })
        } else if (name.length === 10) {
            this.setState({
                fontSize : "35"
            })
        } else if (name.length === 9) {
            this.setState({
                fontSize : "37"
            })
        } else if (name.length <= 8) {
            this.setState({
                fontSize : "42"
            })
        }
    }


    addToCart = (e) => {
        e.preventDefault();
        // set form sending settings
        
    }

    render() {
        const {name,fontSize} = this.state;
        
        
        return (
            <div className="row">
                {/*-------------------------------------image area------------------------------------- */}
                <div className="col-lg-6 mb-2 product-thumbnail">
                    <div className="product-name mb-4 mt-4 text-center">
                        <h2>Original.</h2>
                    </div>
                    <div className="product-img-box mb-4 mt-5">
                        <img src={Image} alt="" className="product-img img-fluid"/>
                    </div>
                    <div className="input-value text-center align-middle" style={{fontSize: fontSize+'px'}}>
                        <p className="input-value-text" /* style={{fontSize: fontSize+'px'}} */>
                        {name}
                        </p>
                    </div>
                </div>
                {/*------------------------------------- image area end ---------------------------------*/}
                <div className="col-lg-6 col-md-6 mb-4 product-shop">
                    <div className="product-right mb-4">
                        <Product/>
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
                            <form onSubmit = {this.addToCart.bind(this)}>
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
            </div>
        )
    }
}

export default ProductShop;
