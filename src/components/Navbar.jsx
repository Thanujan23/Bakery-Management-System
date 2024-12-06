import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-logo">
        <img
          src="/circle-line-simple-design-logo-600nw-2174926871.webp"
          alt="Logo"
          className="logo"
        />
        <span className="shop-name">Sweet Delights Bakery</span>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="navbar-links">
        <button>Home</button>
        <button>About Us</button>
        <button>Services</button>
        <button>Products</button>
        <button>Contact Us</button>
        <button>FAQ</button>
      </div>

      {/* Right Section: Register and Login */}
      <div className="navbar-buttons">
        <Link to="/signup">
          <button className="register">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      
        
        
      </div>
    </nav>
  );
};

export default Navbar;