import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer'; // Import the Footer component

const Home = () => {
  return (
    <div className="home">
      {/* First Section - Introductory Content with Background Image */}
      <section className="first-section">
        <div className="intro-content">
          <h1>Welcome to Sweet Delights Bakery</h1>
          <p>Freshly baked goods, crafted with love and delivered daily. Scroll down to explore more!</p>
        </div>
      </section>

      {/* Second Section - Featured Products */}
      <section className="second-section">
        <h2>Our Best-Sellers</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src="choca.jfif" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>$18.99</p>
          </div>
          <div className="product-card">
            <img src="cinnomon.jfif" alt="Cinnamon Rolls" />
            <h3>Cinnamon Rolls</h3>
            <p>$6.99</p>
          </div>
          <div className="product-card">
            <img src="fresh.jfif" alt="Croissants" />
            <h3>Fresh Croissants</h3>
            <p>$3.49</p>
          </div>
        </div>
        <button className="cta-button">View Full Menu</button>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
