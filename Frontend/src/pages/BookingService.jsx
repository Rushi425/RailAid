import React, { useState } from "react";

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

    console.log("Ferry Booking Details:", formData);
    setBookingSuccess(true);

    setFormData({
      fromPort: "",
      toPort: "",
      date: "",
      passengers: 1,
      luggage: 0,
      driverAvailable: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6">
          Ferry Booking Service 
        </h1>

        {bookingSuccess && (
          <div className="bg-green-100 border border-green-300 text-green-800 rounded-lg px-4 py-3 text-center mb-6">
            Ferry Booking Confirmed! You’ll receive a confirmation email soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
        

          {/* From and To */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                From Port
              </label>
              <input
                type="text"
                name="fromPort"
                value={formData.fromPort}
                onChange={handleChange}
                placeholder="Enter departure port"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                To Port
              </label>
              <input
                type="text"
                name="toPort"
                value={formData.toPort}
                onChange={handleChange}
                placeholder="Enter destination port"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Date and Passengers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                No. of Passengers
              </label>
              <input
                type="number"
                name="passengers"
                min="1"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Luggage and Driver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Luggage (in kg)
              </label>
              <input
                type="number"
                name="luggage"
                min="0"
                value={formData.luggage}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div className="flex items-center space-x-3 mt-5 md:mt-7">
              <input
                type="checkbox"
                name="driverAvailable"
                checked={formData.driverAvailable}
                onChange={handleChange}
                className="w-5 h-5 text-indigo-600 focus:ring-indigo-400 border-gray-300 rounded"
              />
              <label className="text-gray-700 font-medium">
                Driver Available
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          >
            Confirm  Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingService;
