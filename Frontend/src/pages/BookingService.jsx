// src/pages/BookingService.jsx
import React, { useState } from "react";
import "./BookingService.css";

const BookingService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fromPort: "",
    toPort: "",
    date: "",
    passengers: 1,
    luggage: 0,
    driverAvailable: false,
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.fromPort ||
      !formData.toPort ||
      !formData.date
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    // Simulate booking logic (to be replaced with Firebase later)
    console.log("Ferry Booking Details:", formData);

    setBookingSuccess(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      fromPort: "",
      toPort: "",
      date: "",
      passengers: 1,
      luggage: 0,
      driverAvailable: false,
    });
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Ferry Booking Service</h1>

      {bookingSuccess && (
        <p className="success-message">
          🛳️ Ferry Booking Confirmed! You'll receive a confirmation email soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>From Port:</label>
            <input
              type="text"
              name="fromPort"
              value={formData.fromPort}
              onChange={handleChange}
              placeholder="Enter departure port"
            />
          </div>

          <div className="form-group">
            <label>To Port:</label>
            <input
              type="text"
              name="toPort"
              value={formData.toPort}
              onChange={handleChange}
              placeholder="Enter destination port"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Journey:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>No. of Passengers:</label>
            <input
              type="number"
              name="passengers"
              min="1"
              value={formData.passengers}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Luggage (in kg):</label>
            <input
              type="number"
              name="luggage"
              min="0"
              value={formData.luggage}
              onChange={handleChange}
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="driverAvailable"
                checked={formData.driverAvailable}
                onChange={handleChange}
              />
              Driver Available
            </label>
          </div>
        </div>

        <button type="submit" className="book-btn">
          Confirm Ferry Booking
        </button>
      </form>
    </div>
  );
};

export default BookingService;
