import React from 'react';
import Footer from './Footer'; // Adjust the path if Footer is in a different folder
import './AboutUs.css'; // Assuming CSS file is named AboutUs.css

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Sweet Delights Bakery</h1>
        <img
          src="/female-baker-presenting-various-pastries-transparent-display-cabinet.jpg" // Replace with an actual bakery image URL
          alt="Sweet Delights Bakery"
          className="about-us-image"
        />
        <p>
          Welcome to <strong>Sweet Delights Bakery</strong>! Our mission is to bring joy to your
          taste buds with our freshly baked treats. Every item is crafted with love, using the
          finest ingredients to ensure top-notch quality.
        </p>
        <p>
          We specialize in a wide variety of baked goods, including:
          <ul>
            <li>Decadent cakes for every occasion</li>
            <li>Deliciously chewy cookies</li>
            <li>Flaky pastries with delightful fillings</li>
            <li>Custom desserts tailored to your taste</li>
          </ul>
        </p>
        <p>
          At Sweet Delights Bakery, we believe that every bite should be a moment of happiness. Our
          dedicated team of bakers and pastry chefs works tirelessly to create treats that not only
          taste incredible but also look like works of art.
        </p>
        <p>
          Whether it’s a grand celebration, a thoughtful gift, or simply a treat for yourself,
          <strong> Sweet Delights Bakery</strong> is here to make your moments sweeter.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
