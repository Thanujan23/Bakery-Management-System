import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer';

const Services = () => {
  const [services] = useState([
    { id: 1, name: 'Custom Cake Orders' },
    { id: 2, name: 'Event Catering' },
    { id: 3, name: 'Baking Classes' },
  ]);

  const [search, setSearch] = useState('');

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <input
        type="text"
        placeholder="Search for a service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="services-list">
        {filteredServices.map((service) => (
          <div className="service-card" key={service.id}>
            <Link to={`/services/${service.id}`}>
              <h2>{service.name}</h2>
            </Link>
            {/* Book Now Button */}
            <div className="book-now">
              <Link to={`/book/${service.id}`}>
                <button className="book-now-button">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Testimonials Page */}
      <div className="testimonials-link">
        <Link to="/testimonials">
          <button className="navigate-button">See What Our Customers Say</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
