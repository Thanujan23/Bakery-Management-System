import React, { useState } from 'react';
import './Login.css';
import Footer from './Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Submit form logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Sweet Delights Bakery</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>

      {/* Add Footer Component */}
      <Footer />
    </div>
  );
};

export default Login;
