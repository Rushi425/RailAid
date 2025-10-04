import React from "react";
import { FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 md:px-20 mt-auto">

      {/* Top Row: Logo + Quick Links */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          TravelAid
        </div>
      </div>

        {/* Quick Links
        <div className="flex md:flex-col gap-4 text-right md:text-right ml-auto">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#booking" className="hover:underline">Booking</a>
          <a href="#contact" className="hover:underline">Contact</a><br />
        </div> */}
        
      {/* </div> */}

      {/* Trust Points / Features */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaUsers className="text-white" />
          <span>Trusted by thousands</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-white" />
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-white" />
          <span>Secure & Reliable</span>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="text-center text-sm border-t border-white/20 pt-4">
        &copy; 2025 TravelAid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
