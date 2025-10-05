import { Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Company Branding */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
            RailAid
          </h2>
        </div>

        {/* Tagline & Description */}
        <div className="text-center mb-6 px-4">
          <p className="text-lg font-semibold text-green-300 mb-2">
            "Making Railway Travel Seamless & Accessible"
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
            Your trusted companion for hassle-free luggage transport and wheelchair assistance. 
            We prioritize your comfort, security, and independence with AI-powered smart solutions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h3 className="text-center text-sm font-semibold text-gray-300 mb-4">
            Connect With Us
          </h3>

          {/* Contact Details */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
            <a
              href="mailto:support@railaid.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>support@railaid.com</span>
            </a>
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 123 456 7890</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} RailAid. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;