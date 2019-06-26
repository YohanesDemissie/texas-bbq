import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../media/Mr-Texas-Smokehouse.png';
import Home from './Home'
import Products from './Products';

function Navbar() {
  return(
    <div>
      <ul className="navbar">
        <li><Link className="links" to="/" href={Home}>Home</Link></li>
        <li>Locations</li>
        <li><Link className="links" to="/products" href={Products}>Products</Link></li>
        <li>Contact</li>
      </ul>

      <div className="logo-container">
        <img className="logo" src={logo} alt="Mr.TexasBBQ" />
      </div>
    </div>
  )
}

export default Navbar;