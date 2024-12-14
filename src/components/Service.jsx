import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer';

const Services = () => {
  const [services] = useState([
    { id: 1, name: 'Custom Cake Orders' },
    { id: 2, name: 'Event Catering' },
    { id: 3, name: 'Baking Classes' },
    { id: 4, name: 'Corporate Event Catering' },
    { id: 5, name: 'Birthday Party Packages' },
    { id: 6, name: 'Wedding Cake Services' },
    { id: 7, name: 'Dessert Buffets' },
    { id: 8, name: 'Seasonal Specials' },
    { id: 9, name: 'Cookie Decorating Workshops' },
    { id: 10, name: 'Gift Baskets and Hampers' },
  ]);

  const [search, setSearch] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleCheckboxChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleBookNow = () => {
    if (selectedServices.length > 0) {
      setShowBookingForm(true);
    } else {
      alert('Please select at least one service to book.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for services: ${selectedServices.join(', ')}`);
    // Reset form and selections
    setSelectedServices([]);
    setShowBookingForm(false);
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">
      <h1 className="services-header">Our Services</h1>
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
            <input
              type="checkbox"
              id={`service-${service.id}`}
              onChange={() => handleCheckboxChange(service.name)}
              checked={selectedServices.includes(service.name)}
            />
            <label htmlFor={`service-${service.id}`}>{service.name}</label>
          </div>
        ))}
      </div>

      <button className="book-now-button" onClick={handleBookNow}>
        Book Now
      </button>

      {showBookingForm && (
        <form className="booking-form" onSubmit={handleFormSubmit}>
          <h2>Booking Details</h2>
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Description:
            <textarea name="description" required />
          </label>
          <label>
            Booking Date:
            <input type="date" name="date" required />
          </label>
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      )}

      {/* Testimonials Section */}
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
