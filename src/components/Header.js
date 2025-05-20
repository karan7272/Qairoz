import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Qairo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Qairo Logo" />
        </Link>

        <button 
          className={`nav-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
