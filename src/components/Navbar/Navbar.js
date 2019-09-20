import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './Navbar.css'

 function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-dark mb-3 p-3">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                    <Logo className="responsive-logo"/>
                    </a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
