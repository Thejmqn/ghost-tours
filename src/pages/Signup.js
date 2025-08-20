import "./Signup.css";
import Navbar from "./../components/Navbar.js";
import Footer from "./../components/Footer.js";
import background from "./../media/IMG_0638.jpg"; // reuse same background image

export default function Signup() {
  return (
    <div className="signup-container">
      <Navbar />

      {/* Hero Header */}
      <div className="about-hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="about-hero-overlay">
          <h1 className="about-title">Sign Up for Ghosts on Grounds</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="signup-content">
        {/* Signup Instructions */}
        <div className="signup-instructions">
          <h2>How to Sign Up</h2>
          <p>To reserve your spot on a tour, please follow these steps:</p>
          <ol>
            <li>Scroll down and click on the calendar button for the day you want to sign up.</li>
            <li>A popup box will appear with details about that day’s tour.</li>
            <li>Click on the link inside the description of the popup box to complete your signup.</li>
          </ol>
          <p>
            That’s it! Once you’ve signed up, you’ll receive confirmation and any additional details
            about your upcoming ghost tour.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="calendar-container">
          <iframe
            className="calendar-frame"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&title=Ghosts%20on%20Grounds%20Schedule&src=Y18wNTI1ZWYyNTkyZjhiNmVkOWM2N2Y2ZGUzNmUyNWQ4M2NiMjQ3MTJlZTYzMWJlN2UyNjFlNjQ4ODc0ZGFlM2VjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%234285f4"
            frameBorder="0"
            scrolling="no"
            title="Ghosts on Grounds Signup Calendar"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
