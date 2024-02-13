// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/government">Government</Link>
      <Link to="/community">Community</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavigationBar;
