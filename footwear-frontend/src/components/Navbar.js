import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>👟 Footwear Shop</h2>
    <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="/ShoeDetail" element>Products</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;
