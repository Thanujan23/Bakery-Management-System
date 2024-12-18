import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Services from './components/Service';
import ServiceDetails from './components/ServiceDetails';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm'
import Menu from './components/Menu';
import ProductPage from './components/Product';
import ContactUs from './components/ContactUs';  // Importing Contact Us component



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services />} /> {/* Add Services Route */}
        <Route path="/services/:id" element={<ServiceDetails/>} />
        <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials page */}
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />







      </Routes>
    </Router>
  );
}

export default App;
