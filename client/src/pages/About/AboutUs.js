// AboutUs.js
import React from 'react';
//import { createTheme } from '@material-ui/core/styles';

import './styles.css';



const AboutUs = () => {
  return (
    
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>

      <section className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Welcome to our website! We are a passionate team dedicated to providing valuable information and resources to our visitors. Our journey began with a shared vision of creating a platform that is user-friendly, informative, and enjoyable.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower and inspire people through knowledge and innovation. We strive to make a positive impact on the world by delivering high-quality content and services that cater to the needs of our diverse audience.
        </p>

        <h2>Meet the Team</h2>
        <p>
          We are a diverse group of individuals with a wide range of skills and expertise. From developers and designers to content creators and marketing professionals, our team collaborates to bring you the best experience possible.
        </p>
      </section>

      <footer className="about-us-footer">
        &copy; 2024 Your Company Name. All rights reserved.
      </footer>
    </div>
    
  );
};

export default AboutUs;
