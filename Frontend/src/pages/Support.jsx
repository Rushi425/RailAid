import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import Chatbot from '../components/Chatbot'; // Your existing chatbot

const Support = () => {
  const faqs = [
    {
      question: "How do I book luggage ferry service?",
      answer:
        "Go to the Booking page, select 'Luggage Ferry', enter your details and confirm.",
    },
    {
      question: "How to request wheelchair assistance?",
      answer:
        "Navigate to Accessibility Services, select 'Wheelchair Assistance' and fill in your travel details.",
    },
    {
      question: "Can I track my luggage?",
      answer:
        "Yes! After booking, you'll receive a tracking link to monitor your luggage in real-time.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, debit/credit cards, and net banking for all services.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
          RailAid Support Center
        </h1>
        <p className="text-gray-600 text-center md:text-left">
          Get help with your bookings and services
        </p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-gray-800 mb-2">📞 Contact Us</h3>
          <p className="text-sm text-gray-600 mb-2">Phone: +91 1234 567 890</p>
          <p className="text-sm text-gray-600">Email: support@railaid.in</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-3 text-left focus:outline-none hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-3 pt-0 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    
      {/* AI Chatbot Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          💬 Chat with AI Assistant
        </h2>
        <p className="text-gray-600 mb-4">
          Have questions? Our AI assistant is here to help you 24/7
        </p>

        {/* Fully responsive Chatbot Container */}
        <div className="w-full h-[60vh] md:h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden">
          <Chatbot />
        </div>
      </div>

    </div>
  );
};

export default Support;
