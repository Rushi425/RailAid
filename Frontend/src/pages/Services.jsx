import React, { useState } from 'react';
import { 
  Package, 
  User, 
  Clock, 
  MapPin, 
  Zap,
  Shield,
  TrendingUp,
  MessageCircle,
  ChevronRight,
  Check,
  ArrowRight,
  Bell,
  Calendar,
  Navigation
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const mainServices = [
    {
      id: 1,
      icon: <Package className="w-12 h-12" />,
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
      pricing: 'Starting from ₹50 per bag',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <User className="w-12 h-12" />,
      emoji: '♿',
      title: 'Wheelchair Assistance',
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
      pricing: 'Completely FREE service',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: <MessageCircle className="w-12 h-12" />,
      emoji: '🤖',
      title: 'AI Chatbot Assistance',
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
      pricing: 'Free with every booking',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12" />,
      emoji: '🎯',
      title: 'Smart Recommendations',
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
      pricing: 'Included in service',
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
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up with your mobile number and verify via OTP',
      icon: '📱'
    },
    {
      step: 2,
      title: 'Select Service',
      description: 'Choose luggage ferry or wheelchair assistance',
      icon: '✅'
    },
    {
      step: 3,
      title: 'Enter Details',
      description: 'Provide train info, platform numbers, and time',
      icon: '📝'
    },
    {
      step: 4,
      title: 'Confirm Booking',
      description: 'Review details and complete your booking',
      icon: '✔️'
    },
    {
      step: 5,
      title: 'Track Service',
      description: 'Get real-time updates and driver location',
      icon: '📍'
    },
    {
      step: 6,
      title: 'Enjoy Journey',
      description: 'Relax and travel stress-free with our support',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience seamless railway travel with our AI-driven ferry booking and assistance system. 
            We provide comprehensive services to make your journey comfortable, safe, and stress-free.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Services</h2>
          <p className="text-xl text-gray-600">
            Integrated solutions for efficient and inclusive railway travel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="text-5xl">{service.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white text-opacity-90">{service.description}</p>
              </div>

              {/* Service Body */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                        ✨ {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pricing</p>
                    <p className="text-lg font-bold text-gray-800">{service.pricing}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center">
                    Book Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Features</h2>
            <p className="text-lg text-gray-600">
              Everything you need for a smooth and hassle-free journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to book and enjoy our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                      {step.step}
                    </div>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.step < howItWorks.length && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose TravelAid?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Safe & Secure</h3>
                  <p className="text-gray-600">
                    All our staff are verified and trained professionals. Your luggage and safety are our priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Time-Saving</h3>
                  <p className="text-gray-600">
                    No more waiting or rushing. Our efficient system ensures you reach your train on time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">AI-Powered</h3>
                  <p className="text-gray-600">
                    Smart recommendations and resource allocation for optimal service delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mr-4">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Inclusive</h3>
                  <p className="text-gray-600">
                    Dedicated services for differently-abled passengers ensuring equal access for all.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Round-the-clock chatbot assistance and customer support for all your queries.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-600">
                    Know exactly where your service provider is with live location updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Travel Hassle-Free?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied passengers who trust TravelAid for their railway journey
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition">
              Book Service Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;