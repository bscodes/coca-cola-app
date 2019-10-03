import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './Navbar.css';

 function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-dark mb-3 p-3">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                    <Logo className="responsive-logo"/>
                    </a>

                    
                </div>
                <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div className="dropdown-menu">
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Separated link</a>
                        </div>
                    </div>
            </div>
        </nav>

    )
}

export default Navbar;
