// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-center gap-6 text-lg font-medium text-gray-700">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
