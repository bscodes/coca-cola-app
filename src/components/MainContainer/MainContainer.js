import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import ProductShop from './ProductShop';
import Cart from './Cart';



class MainContainer extends Component {

     render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path = "/" component = {ProductShop} />
                    <Route exact path = "/cart" component = {Cart} />
                </Switch>
            </div>
        )
    }
}

export default MainContainer;
