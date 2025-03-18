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
          <span className="logo-text">Ghosts on Grounds</span>
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
            <a href="/signup" className="https://forms.gle/zVT3oiUfsfLxhcE46">Sign Up</a>
          </li>
          <li className="nav-item">
            <a href="/report" className="nav-link">Report</a>
          </li>
          <li className="nav-item">
            <a href="/learn-more" className="nav-link">Learn More</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;