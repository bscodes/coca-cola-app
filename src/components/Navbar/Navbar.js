import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg';
import './Navbar.css';

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-3 p-3">
            <div className="container">
                <div className="navbar-brand">
                <Link to="/" className="nav-link"><Logo className="responsive-logo"/></Link>
                </div>

                <div>
                    <ul className="navbar-nav ml-auto topnav">
                        {/* <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li> */}
                        <li className="nav-item active">
                            <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></Link>
                        </li>
                    </ul>
                </div>
                
            </div>
                
        </nav>

    )
}

export default Navbar;
