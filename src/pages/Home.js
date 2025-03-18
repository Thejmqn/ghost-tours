//import logo from './../media/logo.svg';
//import ghost from './../media/ghost.png';
import './App.css';
import Navbar from '../components/Navbar';
import background from './../media/IMG_0638.jpg';
import './Home.css';
import Footer from './../components/Footer';

const HomePage = () => {  
  return (
    <div className="home-container">
      <Navbar />
      
      <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Explore the Haunted Grounds of Mr. Jefferson's University</h1>
          
          <div className="hero-buttons">
            <a href="/learn-more" className="hero-button learn-more-btn">Learn More</a>
            <a href="https://forms.gle/zVT3oiUfsfLxhcE46" className="hero-button sign-up-btn">Sign Up</a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;

/*
        <p style={{color: "darkred", size: "4vh"}}>
          <a style={{textDecoration: "none"}} href="/haunted">Every place is haunted.</a>
        </p>
        <img src={ghost} style={{height: "20vh"}} className="Ghost-image" alt="A ghost" />
*/