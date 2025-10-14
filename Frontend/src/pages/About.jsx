import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About AI-Driven Ferry Booking and Assistance System</h1>
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rail travel is one of the most widely used and efficient mode of transportation, yet passengers 
            continue to face significant challenges in managing their journeys smoothly. Common difficulties 
            include manual and time-consuming booking processes for luggage transport, lack of adequate 
            accessibility support for differently-abled travelers, and long, unpredictable waiting times.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The AI-Driven Ferry Booking and Assistance System aims to address these challenges by providing 
            an integrated platform that allows passengers to easily book luggage transportation and accessibility 
            services, receive real-time updates, and interact with an AI-powered chatbot for instant guidance.
          </p>
        </div>
      {/* Key Challenges Addressed */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges Addressed</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Manual Booking Hassles</h3>
              <p className="text-gray-600 text-sm">
                Current booking processes are tedious, time-consuming, and lack automation, often leading to 
                delays and passenger frustration.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Limited Accessibility Support</h3>
              <p className="text-gray-600 text-sm">
                Differently-abled passengers frequently face inadequate or uncertain support, affecting their 
                independence and comfort.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Unpredictable Waiting Times</h3>
              <p className="text-gray-600 text-sm">
                Long, irregular waiting periods for luggage or assistance services create unnecessary stress 
                and can result in missed connections.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Inefficient Resource Allocation</h3>
              <p className="text-gray-600 text-sm">
                Without intelligent scheduling, drivers and staff may be underutilized or assigned inefficiently, 
                increasing operational costs.
              </p>
            </div>
          </div>

       {/* Objectives */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Objectives</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Smart AI Booking Platform</h3>
                <p className="text-gray-600 text-sm">
                  Create an intuitive system where passengers can easily book luggage ferry and wheelchair 
                  assistance services with real-time updates and service tracking.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">AI-Powered Recommendation Engine</h3>
                <p className="text-gray-600 text-sm">
                  Analyze passenger profiles, luggage details, and operational conditions to suggest optimal 
                  ferry services and provide efficient task assignments for drivers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Conversational Chatbot Support</h3>
                <p className="text-gray-600 text-sm">
                  Integrate an AI chatbot to resolve passenger queries, provide booking guidance, and answer 
                  FAQs instantly in simple, clear language.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Universal Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Include dedicated wheelchair booking and assistance services with a mobile-friendly web 
                  interface accessible across devices.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                5
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Operational Efficiency</h3>
                <p className="text-gray-600 text-sm">
                  Reduce idle time for drivers through intelligent task assignment, lower dependency on manual 
                  intervention, and maximize resource utilization.
                </p>
              </div>
            </div>
          </div>
        </div>

            {/* Key Features */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Luggage Ferry Booking</h3>
              <p className="text-gray-600 text-sm">
                Easy booking for luggage transportation services
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Wheelchair Assistance</h3>
              <p className="text-gray-600 text-sm">
                Accessible travel support for differently-abled passengers
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">AI Chatbot</h3>
              <p className="text-gray-600 text-sm">
                24/7 instant assistance and query resolution
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track your service status and estimated times
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600 text-sm">
                AI-powered optimization for efficient service
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default About;