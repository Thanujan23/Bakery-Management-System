import React, { useState } from 'react';
import './testimonials.css'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Doe', feedback: 'Great service!', rating: 5 },
    { id: 2, name: 'Jane Smith', feedback: 'Highly recommend!', rating: 4 },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    feedback: '',
    rating: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonialData = {
      id: testimonials.length + 1,
      name: newTestimonial.name,
      feedback: newTestimonial.feedback,
      rating: newTestimonial.rating,
    };
    setTestimonials([...testimonials, newTestimonialData]);
    setNewTestimonial({ name: '', feedback: '', rating: 1 });
  };

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>"{testimonial.feedback}"</p>
          <p>Rating: {testimonial.rating} / 5</p>
        </div>
      ))}

      <h3>Add Your Testimonial</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newTestimonial.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={newTestimonial.feedback}
          onChange={handleInputChange}
          required
        />
        <select
          name="rating"
          value={newTestimonial.rating}
          onChange={handleInputChange}
          required
        >
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        <button type="submit">Submit Testimonial</button>
      </form>
    </div>
  );
};

export default Testimonials;
