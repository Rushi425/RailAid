import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Train,
  Package,
    AlertCircle
} from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqCategories = [
    {
      category: 'Booking',
      icon: <Package className="w-5 h-5" />,
      questions: [
        {
          q: 'How do I book luggage ferry service?',
          a: 'You can book luggage ferry service by logging into your account, selecting "Book Ferry Service", entering your luggage details, source and destination platform, and confirming your booking. You will receive real-time updates on your booking status.'
        },
        {
          q: 'Can I cancel or modify my booking?',
          a: 'Yes, you can cancel or modify your booking up to 30 minutes before your scheduled time. Go to "My Bookings" section and select the booking you wish to modify or cancel. Cancellation charges may apply based on timing.'
        },
        {
          q: 'What are the luggage weight and size limits?',
          a: 'Standard luggage ferry service supports bags up to 30kg per item. For oversized or heavier luggage, please select the "Heavy Luggage" option during booking. Maximum dimensions: 80cm x 60cm x 40cm per bag.'
        },
        {
          q: 'How much does the ferry service cost?',
          a: 'Pricing varies based on distance, luggage size, and peak hours. Standard service starts at ₹50 per bag. Heavy luggage and wheelchair assistance services have different pricing. Check the booking page for exact rates.'
        }
      ]
    },
    {
      category: 'Wheelchair Assistance',
      icon: <Wheelchair className="w-5 h-5" />,
      questions: [
        {
          q: 'How do I book wheelchair assistance?',
          a: 'Select "Wheelchair Assistance" from the main menu, provide your train details and required assistance type (boarding, deboarding, or platform transfer). Our staff will be assigned to assist you at your specified location and time.'
        },
        {
          q: 'Is wheelchair assistance available 24/7?',
          a: 'Yes, wheelchair assistance is available round the clock at all major platforms. For smaller stations, service is available during operational hours (5:00 AM - 11:00 PM). Advance booking is recommended.'
        },
        {
          q: 'Do I need to pay for wheelchair assistance?',
          a: 'No, wheelchair assistance service is completely free for all passengers. This is part of our commitment to inclusive and accessible travel for differently-abled passengers.'
        }
      ]
    },
    {
      category: 'Payment & Refunds',
      icon: <CheckCircle className="w-5 h-5" />,
      questions: [
        {
          q: 'What payment methods are accepted?',
          a: 'We accept UPI, Credit/Debit Cards, Net Banking, and Digital Wallets (Paytm, PhonePe, Google Pay). Cash on delivery option is also available at select stations.'
        },
        {
          q: 'How long does it take to process refunds?',
          a: 'Refunds are processed within 5-7 business days from the cancellation date. The amount will be credited to your original payment method. You will receive an email confirmation once the refund is initiated.'
        },
        {
          q: 'Will I get a full refund if I cancel?',
          a: 'Cancellation charges: Free cancellation up to 2 hours before service time. 50% charge if cancelled within 2 hours. No refund for no-shows or cancellations after service completion.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      icon: <AlertCircle className="w-5 h-5" />,
      questions: [
        {
          q: 'The app/website is not working properly',
          a: 'Try clearing your browser cache or updating the app to the latest version. If the issue persists, please contact our technical support team at support@travelaid.com with details of the problem and screenshots if possible.'
        },
        {
          q: 'I am not receiving booking confirmations',
          a: 'Check your spam/junk folder first. Ensure your email address is correct in your profile settings. You can also view all bookings in the "My Bookings" section. For SMS issues, verify your mobile number is updated.'
        },
        {
          q: 'How do I reset my password?',
          a: 'Click on "Forgot Password" on the login page, enter your registered email address, and you will receive a password reset link. Follow the instructions in the email to create a new password.'
        }
      ]
    }
  ];

  const contactChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      details: '+91 123-456-7890',
      subtext: 'Mon-Sun: 24/7 Available',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      details: 'support@travelaid.com',
      subtext: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      details: 'Chat with AI Assistant',
      subtext: 'Instant responses',
      action: 'Start Chat'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Help Desk',
      details: 'Station Information Counter',
      subtext: 'Available at all major stations',
      action: 'Find Location'
    }
  ];

  const toggleFaq = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedFaq(expandedFaq === key ? null : key);
  };

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <HelpCircle className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl text-blue-100">
            Get answers to your questions and reach out to our support team
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === 'faq'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === 'contact'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === 'guide'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Quick Guide
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find quick answers to common questions</p>
            </div>

            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isExpanded = expandedFaq === key;
                    
                    return (
                      <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(catIndex, qIndex)}
                          className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                        >
                          <span className="font-semibold text-left text-gray-800">{faq.q}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-4 pb-4 pt-2 bg-gray-50">
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            {/* Contact Channels */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                  <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{channel.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{channel.details}</p>
                  <p className="text-sm text-gray-600 mb-4">{channel.subtext}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    {channel.action} →
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleFormChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Describe your issue or question in detail..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Quick Guide Tab */}
        {activeTab === 'guide' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quick Start Guide</h2>
              <p className="text-gray-600">Learn how to use TravelAid in simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Create Account</h3>
                <p className="text-gray-600 mb-4">
                  Sign up with your email and mobile number. Verify your account through OTP sent to your phone.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Enter basic details</li>
                  <li>• Verify phone number</li>
                  <li>• Complete profile setup</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book Service</h3>
                <p className="text-gray-600 mb-4">
                  Choose luggage ferry or wheelchair assistance. Enter your train and platform details.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Select service type</li>
                  <li>• Add luggage/assistance details</li>
                  <li>• Choose time slot</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Track & Enjoy</h3>
                <p className="text-gray-600 mb-4">
                  Get real-time updates on your service. Rate your experience after completion.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Live tracking available</li>
                  <li>• Driver contact details</li>
                  <li>• Instant notifications</li>
                </ul>
              </div>
            </div>

            {/* Video Tutorials Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Video Tutorials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <Train className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2">How to Book Ferry Service</h4>
                    <p className="text-sm text-gray-600 mb-3">Learn to book luggage transport in 2 minutes</p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Watch Tutorial →
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    {/* <Wheelchair className="w-16 h-16 text-gray-400" /> */}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Wheelchair Assistance Guide</h4>
                    <p className="text-sm text-gray-600 mb-3">Step-by-step accessibility service booking</p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Watch Tutorial →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pro Tips for Better Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Book your service at least 30 minutes before your train departure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Keep your phone charged to receive real-time notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Update your train details if there are any schedule changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Rate your experience to help us improve our services</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-50 border-t border-red-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-bold text-red-800">Emergency Support</h3>
          </div>
          <p className="text-red-700">
            For urgent assistance at the station, call our 24/7 helpline:{' '}
            <span className="font-bold">1800-XXX-XXXX</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;