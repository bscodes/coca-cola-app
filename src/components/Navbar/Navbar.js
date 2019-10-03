import React from 'react';
import { Link } from 'react-router-dom'
/* import Cart from '../MainContainer/Cart'; */
import { ReactComponent as Logo } from './logo.svg';
import './Navbar.css';

 function Navbar() {
    return (
        <nav className="navbar navbar-default mb-3 p-3">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                    <Logo className="responsive-logo"/>
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                    </ul>
                    
                </div>
                {/* <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div className="dropdown-menu">
                        <div className="dropdown-divider"></div>
                        <Cart/>
                        <a className="dropdown-item" href="/">Separated link</a>
                    </div>
                </div> */}
            </div>
        </nav>

    )
}

export default Navbar;
