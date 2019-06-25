import React from 'react';
import '../styles/Navbar.css';
import logo from '../media/Mr-Texas-Smokehouse.png';

function Navbar() {
  return(
    <div>
      <ul className="navbar">
        <li>Home</li>
        <li>Stores</li>
        <img className="logo" src={logo} alt="Mr.TexasBBQ" />
        <li>About</li>
        <li>Contact</li>

        <li></li>
      </ul>
    </div>
  )
}

export default Navbar;