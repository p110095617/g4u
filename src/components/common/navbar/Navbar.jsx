import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <ul className="navbar">
            <Link to="/Home" className="navbar-item">Home</Link>
            <Link to="/Board Games" className="navbar-item">Board Games</Link>
            <Link to="/Gadgets" className="navbar-item">Gadgets</Link>
            <Link to="/Gifts" className="navbar-item">Gifts</Link>
            <Link to="/Toys" className="navbar-item">Toys</Link>
            <Link to="/Login" className="navbar-item">Login</Link>
        </ul>
    )
}

export default Navbar;