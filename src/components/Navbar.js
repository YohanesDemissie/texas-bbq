import React from 'react';
import '../styles/Navbar.css';
import logo from '../media/Mr-Texas-Smokehouse.png';
import Products from './Products';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <ul className="navbar">
        <li>Home</li>
        <li>Locations</li>
        <li><Link className="links" to="/products" src={Products}>Products</Link></li>
        <li>Contact</li>
      </ul>

      <div className="logo-container">
        <img className="logo" src={logo} alt="Mr.TexasBBQ" />
      </div>
    </div>
  )
}

export default Navbar;