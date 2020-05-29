import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom'

class Navbar extends Component {

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Vidly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link">Movies </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/customers" className="nav-link">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/rentals" className="nav-link">Rentals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/loginform" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/registrationform" className="nav-link">Register</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Navbar;