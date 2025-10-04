// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md relative">
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        TravelAid
      </div>

      {/* Menu Button */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
             viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Popup Navigation for Mobile */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden transition-all duration-300">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-100">.</a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-100">.</a>
          <a href="#booking" className="block px-4 py-2 hover:bg-gray-100">.</a>
          <a href="#chatbot" className="block px-4 py-2 hover:bg-gray-100">.</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">.</a>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">.</a>
        <a href="#" className="hover:underline">.</a>
        <a href="#" className="hover:underline">.</a>
        <a href="#" className="hover:underline">.</a>
        <a href="#" className="hover:underline">.</a>
      </nav>
    </header>
  );
};

export default Navbar;
