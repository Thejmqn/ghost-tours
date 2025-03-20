import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import background from './../media/IMG_0638.jpg'; // Reusing the same background image

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      
      <div className="about-hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="about-hero-overlay">
          <h1 className="about-title">Welcome to Ghosts on Grounds</h1>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Every Place is Haunted</h2>
          <p>
          The University of Virginia lies in the heart of the colonial town of Charlottesville, VA. 
          Known for its Jeffersonian Architecture and its location nestled in the foothills of the Blue Ridge, 
          UVA has accumulated a large and well-known reputation. 
          </p>
          <p>
          Unbeknownst to many is the secret, mysterious reputation of the unexplained activity tainting the school’s legacy for 
          hundreds of years. From its beginnings, UVA has seemed to be a god-forsaken home to ghosts 
          and other creatures that patrol the “grounds” after midnight.
          </p>
          <p>
          From the building of Jefferson’s vision by enslaved laborers to the gruesome and unnerving events of the Civil War, 
          the paranormal activity and unsolved mysteries have been baked into UVA’s tarnished legacy.
          </p>
        </section>

        <section className="about-section locations-section">
          <h2 className="section-title">Haunted Locations</h2>
          <p>
          Come explore grounds under the cover of darkness with us to hear stories about:
          </p>
          <ul className="locations-list">
            <li className="location-item">
              <span className="location-name">Old Cabell Hall</span>
              <p>
                Famed architect of Old Cabell, Stanford White, mysteriously murdered. 
                Mean Jean, who ruled her beloved building with an iron fist passed away on the way to work and 
                her strong perfume can still be smelt patrolling the halls.
              </p>
            </li>
            <li className="location-item">
              <span className="location-name">Shannon Library</span>
              <p>
                Civil War Surgeon Bennett Wood Green has made numerous appearances in front of students in the crowded 
                stacks of the former Alderman Library. It is said that he is protecting his books with his knife, bone saw, and 
                bloody handkerchief, from going into the wrong hands. 
              </p>
            </li>
            <li className="location-item">
              <span className="location-name">Edgar Allen Poe’s Room</span>
              <p>
                The mysterious and misunderstood poet Poe attended UVA in 1826. Known as one of the poor students he dropped out 
                for financial reasons after burning all his furniture in West Range 13 to stay warm. 
                But, before he left, he etched into his door a bone-chilling poem to warn all future students of the grave danger at UVA.
              </p>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2 className="section-title">Join Us... If You Dare</h2>
          <p>
            Ready to explore the supernatural side of UVA? Sign up for one of our upcoming tours and 
            prepare to step into a world where the past refuses to stay buried.
          </p>
          <div className="about-buttons">
            <a href="https://forms.gle/zVT3oiUfsfLxhcE46" className="about-button sign-up-btn">Sign Up Now</a>
            <a href="https://forms.gle/nEmxfJcCTaFHDFsa7" className="about-button report-btn">Report A Ghost</a>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
