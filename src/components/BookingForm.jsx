import React, { useState } from 'react';
import './bookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', service: '', date: '' });
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`Thank you, ${formData.name}! Your booking is confirmed.`);
    setFormData({ name: '', service: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="service"
        placeholder="Service Name"
        value={formData.service}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Book Now</button>
      {confirmation && <p>{confirmation}</p>}
    </form>
  );
};

export default BookingForm;
