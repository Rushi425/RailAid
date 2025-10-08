import React from 'react'
import StationAvailabilityCheck from '../components/StationAvailabilityCheck';
import { Home, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StationCheck = (props) => {
  return (
    <>

    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 text-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-blue-400">Rail</span>Aid
          </h1>
          <p className="text-gray-400 text-sm">Your Station Partner</p>
        </div>

        {/* Station Availability Component */}
        <StationAvailabilityCheck />

        {/* Back to Home Button */}
        <div className="mt-6">
          <button
            onClick={() => props?.setStationCheck(false)}
            className="w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
          >
            Skip <ChevronRight/>
          </button>
        </div>

      </div>
    </div>
    </>
  )
}

export default StationCheck