import React, { useState } from 'react';
import { 
  Package, User, Clock, MapPin, Zap, Shield, TrendingUp,
  MessageCircle, ChevronRight, Check, ArrowRight, Bell, Calendar, Navigation
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const mainServices = [
    {
      id: 1,
      icon: <Package className="w-12 h-12 text-white" />,
      title: 'Luggage Ferry Service',
      emoji: '🧳',
      description: 'Hassle-free luggage transportation from platform to platform within railway stations.',
      features: [
        'Heavy baggage handling support',
        'Real-time tracking of your luggage',
        'Secure and safe transportation',
        'Flexible time slot booking',
        'Multiple bag support'
      ],
      benefits: [
        'No more carrying heavy bags',
        'Save time and energy',
        'Avoid missing trains',
        'Professional handling'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <User className="w-12 h-12 text-white" />,
      title: 'Wheelchair Assistance',
      emoji: '♿',
      description: 'Dedicated wheelchair support and accessibility services for differently-abled passengers.',
      features: [
        'Trained assistance staff',
        'Platform-to-train boarding help',
        'Wheelchair provision if needed',
        'Priority service allocation',
        'Companion support available',
        'Station navigation guidance'
      ],
      benefits: [
        'Travel with confidence',
        'Complete independence',
        'Safe boarding & deboarding',
        'Dignity and respect'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      title: 'AI Chatbot Assistance',
      emoji: '🤖',
      description: 'Instant 24/7 support through our intelligent AI-powered chatbot for all your queries.',
      features: [
        'Instant query resolution',
        'Booking guidance and help',
        'Real-time service updates',
        'FAQ and information',
        '24/7 availability',
        'Multi-language support (coming soon)'
      ],
      benefits: [
        'Quick responses',
        'No waiting time',
        'Available anytime',
        'Easy to use'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: 'Smart Recommendations',
      emoji: '🎯',
      description: 'AI-powered recommendation engine that optimizes service allocation and routing.',
      features: [
        'Personalized service suggestions',
        'Optimal route recommendations',
        'Peak time predictions',
        'Driver assignment optimization',
        'Wait time minimization',
        'Resource allocation efficiency'
      ],
      benefits: [
        'Faster service delivery',
        'Reduced waiting time',
        'Better experience',
        'Cost effective'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Updates',
      description: 'Get instant notifications about your booking status, driver location, and service progress.'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'SMS & Email Alerts',
      description: 'Receive booking confirmations and updates via SMS and email for your convenience.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Easy Booking',
      description: 'Simple, user-friendly platform to book services quickly with just a few clicks.'
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: 'Driver Tracking',
      description: 'Track your assigned driver in real-time with live location updates on the map.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'Multiple payment options including UPI, cards, and cash with complete security.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'Fast service allocation with minimal waiting time through intelligent task assignment.'
    }
  ];

  const howItWorks = [
    { step: 1, title: 'Create Account', description: 'Sign up with your mobile number and verify via OTP', icon: '📱' },
    { step: 2, title: 'Select Service', description: 'Choose luggage ferry or wheelchair assistance', icon: '✅' },
    { step: 3, title: 'Enter Details', description: 'Provide train info, platform numbers, and time', icon: '📝' },
    { step: 4, title: 'Confirm Booking', description: 'Review details and complete your booking', icon: '✔️' },
    { step: 5, title: 'Track Service', description: 'Get real-time updates and driver location', icon: '📍' },
    { step: 6, title: 'Enjoy Journey', description: 'Relax and travel stress-free with our support', icon: '🎉' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            Seamless railway travel with AI-driven ferry booking and accessibility services. 
            Making your journey safe, stress-free, and comfortable.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl flex items-center justify-between mb-4`}>
                <div className="text-white text-3xl">{service.emoji}</div>
                <div>{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

              <ul className="mb-4 space-y-1">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>

             
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg mb-4">
                  {step.step}
                </div>
                <span className="text-2xl mb-2">{step.icon}</span>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
