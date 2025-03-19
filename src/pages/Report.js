import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ComingSoon.css';
import background from './../media/IMG_0638.jpg'; // Reusing the same background image
import logo from './../media/logo.png'; // Adding the ghost logo

const Report = () => {
  return (
    <div className="report-container">
      <Navbar />
      
      <div className="report-hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="report-hero-overlay">
          <h1 className="report-title">Report a Ghost</h1>
        </div>
      </div>

      <div className="report-content">
        <div className="report-notification">
          <div className="report-icon">
            <img src={logo} alt="Ghost logo" className="ghost-logo-large" />
          </div>
          <h2 className="notification-title">Coming Soon...</h2>
          <p className="notification-text">
            Our paranormal reporting system is currently in the spirit realm.
          </p>
          <p className="notification-text">
            The ability to report mysterious sightings to our R&D division will be available shortly.
            In the meantime, keep in mind any strange activity you see around Grounds, and let us know soon.
          </p>
          <div className="report-buttons">
            <a href="/" className="report-button home-btn">Return Home</a>
            <a href="/about" className="report-button about-btn">Learn About Our Tours</a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Report;