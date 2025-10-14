import React from "react";
import { useNavigate } from "react-router-dom";
import StationAvailabilityCheck from "../components/StationAvailabilityCheck";
import { ChevronRight } from "lucide-react";

const StationCheck = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 text-gray-100 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          {/* Logo & Header */}
          <div className="text-center mb-10 bg-gradient-to-b from-slate-900 to-slate-800 py-10 rounded-2xl shadow-xl border border-slate-700">
            <h1 className="text-5xl font-extrabold mb-3 tracking-wide">
              <span className="text-blue-500 drop-shadow-md">Rail</span>
              <span className="text-white">Aid</span>
            </h1>

            <p className="text-gray-400 text-sm italic mb-2">
              Your Station Partner
            </p>

            <h3 className="text-lg text-gray-200 mb-6 font-medium">
              Login to access our exclusive services
            </h3>

            <button
              onClick={() => navigate("/user-login")}
              className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full hover:from-indigo-500 hover:to-blue-500 transition-transform transform hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </div>

          {/* Station Availability Component */}
          <StationAvailabilityCheck />

          {/* Back to Home Button */}
          <div className="mt-6">
            <button
              onClick={() => props?.setStationCheck(false)}
              className="w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Skip <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StationCheck;
