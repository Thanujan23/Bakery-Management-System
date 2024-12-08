import React from 'react';
import Footer from './Footer'; // Adjust the path if Footer is in a different folder

const AboutUs = () => {
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>About Sweet Delights Bakery</h1>
        <p>
          Welcome to Sweet Delights Bakery! Our mission is to bring joy to your taste buds with our
          freshly baked treats. Every item is crafted with love, using the finest ingredients to
          ensure top-notch quality.
        </p>
        <p>
          We specialize in cakes, cookies, pastries, and much more. Whether it’s a celebration or a
          casual treat, Sweet Delights Bakery is here to make your moments sweeter.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
