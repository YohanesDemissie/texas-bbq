import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../media/Mr-Texas-Smokehouse.png';
import Home from './Home'
import Products from './Products';
import Locations from './Locations';
import Contact from './Contact';

function Navbar() {
  return(
    <div>
      <ul className="navbar">
        <li><Link className="links" to="/" href={Home}>Home</Link></li>
        <li><Link className="links" to="/locations" href={Locations}>Locations</Link></li>
        <li><Link className="links" to="/products" href={Products}>Products</Link></li>
        <li><Link className="links" to="/contact" href={Contact}>Contact</Link></li>
      </ul>

      <div className="logo-container">
        <img className="logo" src={logo} alt="Mr.TexasBBQ" />
      </div>
    </div>
  )
}

export default Navbar;