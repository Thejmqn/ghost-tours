import React, { useState } from 'react';
import './Navbar.css';
import logo from './../media/logo.png';
import instaLogo from './../media/instagram_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="haunted-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">
            <a href="/" className="logo-link">Ghosts on Grounds</a>
          </span>
          <div className="logo-image">
            <img className="ghost-logo" src={logo} alt="Ghosts on Grounds Logo"/>
        </div>
        </div>
        
        <div className="nav-actions">
          <a href="https://instagram.com/ghosts_on_grounds" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={instaLogo} alt="Instagram" className="camera-icon" />
          </a>
          
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="https://forms.gle/2x4Yy2L8C9K9Lagf7" className="nav-link">Sign Up</a>
          </li>
          <li className="nav-item">
            <a href="https://forms.gle/nEmxfJcCTaFHDFsa7" className="nav-link">Report a Ghost</a>
          </li>
          <li className="nav-item">
            <a href="https://forms.gle/rZLUdfDshzoxk78w8" className="nav-link">Donate</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;