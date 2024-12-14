import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Footer from './Footer'; // Import the Footer component

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const productCardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate product cards on scroll
    productCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card, // Trigger animation when this element enters the viewport
            start: 'top 80%', // Start animation when the top of the card is 90% into the viewport
            toggleActions: 'play none none none', // Play animation on enter
          },
        }
      );
    });

    // Animate button on scroll
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 }, // Initial state
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: buttonRef.current, // Trigger animation when the button enters the viewport
          start: 'top 90%', // Start animation when the top of the button is 90% into the viewport
          toggleActions: 'play none none none', // Play animation on enter
        },
      }
    );
  }, []);

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
          <div
            className="product-card"
            ref={(el) => (productCardsRef.current[0] = el)}
          >
            <img src="choca.jfif" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>$18.99</p>
          </div>
          <div
            className="product-card"
            ref={(el) => (productCardsRef.current[1] = el)}
          >
            <img src="cinnomon.jfif" alt="Cinnamon Rolls" />
            <h3>Cinnamon Rolls</h3>
            <p>$6.99</p>
          </div>
          <div
            className="product-card"
            ref={(el) => (productCardsRef.current[2] = el)}
          >
            <img src="fresh.jfif" alt="Croissants" />
            <h3>Fresh Croissants</h3>
            <p>$3.49</p>
          </div>
        </div>
        <Link to="/menu">
          <button className="cta-button" ref={buttonRef}>
            View Full Menu
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
