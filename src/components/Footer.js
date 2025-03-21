import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Ghosts on Grounds. All rights reserved.
            Ghosts on Grounds is not affiliated with the University of Virginia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
