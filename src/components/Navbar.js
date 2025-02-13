import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
        <Link className="navbar-item" to="/">HOME</Link>
        <Link className="navbar-item" to="/cse">CSE</Link>
        <Link className="navbar-item" to="/csd">CSD</Link>
        <Link className="navbar-item" to="/csm">CSM</Link>
        <Link className="navbar-item" to="/ece">ECE</Link>
        <Link className="navbar-item" to="/eee">EEE</Link>
        <Link className="navbar-item" to="/civil">CIVIL</Link>
        <Link className="navbar-item" to="/chemical">CHEMICAL</Link>
        <Link className="navbar-item" to="/mechanical">MECHANICAL</Link>
    </div>
  );
}

export default Navbar;
