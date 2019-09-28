import React from 'react';

const Product = () => {
    return (
        <div className="minicart">
            <div className="cart-product-details">
                <p className="p-name">İsim</p>
                <div className="p-info">
                    <p>Price</p>
                    <p>QTY <input type="number"></input> x.xx$</p>
                </div>
                <p>Remove Item</p>
            </div>
        </div>
    );
};

export default Product;