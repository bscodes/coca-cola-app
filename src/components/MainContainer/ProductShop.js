import React, { Component } from 'react';
import './ProductShop.css';
import Image from './classic.png';

const products = [
    {
        productName : "Original.", 
        price: 5.00
    }
]

class ProductShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            fontSize : ""
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

   
    render() {
        const {name,fontSize,/* id,productName,price,qty,addToCart */} = this.state;
        
        
        return (
            <div>
                {products.map((item,index) => {
                        return <div className="row" id={index}>
                        {/*-------------------------------------image area------------------------------------- */}
                        
                        <div className="col-lg-6 mb-2 product-thumbnail">
                            <div className="product-name mb-4 mt-4 text-center">
                                <h2>{item.productName}</h2>
                            </div>
                            <div className="product-img-box mb-4 mt-5">
                                <img src={Image} alt="" className="product-img img-fluid"/>
                            </div>
                            <div className="input-value text-center align-middle" style={{fontSize: fontSize+'px'}}>
                                <p className="input-value-text">
                                {name}
                                </p>
                            </div>
                        </div>
                        {/*------------------------------------- image area end ---------------------------------*/}
                        <div className="col-lg-6 col-md-6 mb-4 product-shop">
                            <div className="product-right mb-4">
                                <div className="product-name">
                                    <h1>{item.productName}</h1>
                                </div>
                                <div className="product-info mt-4">
                                    <h5 className="product-info-text">Get a special name or personal message on a Coke bottle. 
                                    Great for gifting, birthdays/holidays, weddings, 
                                    corporate events, party favors, and more.
                                    </h5>
                                </div>
                                <div className="product-options mt-4">
                                    
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
                                            <h3>$ {item.price}</h3>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger btn-block mt-2">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default ProductShop;
