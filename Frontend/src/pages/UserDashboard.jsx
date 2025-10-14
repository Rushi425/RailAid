import React, { useState } from "react";
import { Package, Clock, MapPin, CheckCircle, User } from "lucide-react";

const UserDashboard = () => {
  const activeBookings = [
    {
      id: "LUG001",
      type: "Luggage Ferry",
      status: "In Progress",
      from: "Platform 1",
      to: "Platform 5",
      time: "10:45 AM",
      driver: "Rajesh Kumar",
    },
    {
      id: "WHL002",
      type: "Wheelchair Service",
      status: "Scheduled",
      from: "Entrance Gate",
      to: "Platform 3",
      time: "11:30 AM",
      driver: "Priya Sharma",
    },
  ];

  const WheelchairIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2a7 7 0 0 0-14 0v2" />
      <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
      <circle cx="12" cy="17" r="3" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Package className="text-white" size={26} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TravelAid</h1>
              <p className="text-xs text-gray-500">Railway Assistance</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <User size={18} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Viren Adgale
              </span>
            </div>
            <button className="text-sm bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition">
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
          Active Bookings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activeBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      booking.type === "Luggage Ferry"
                        ? "bg-blue-100"
                        : "bg-purple-100"
                    }`}
                  >
                    {booking.type === "Luggage Ferry" ? (
                      <Package className="text-blue-600" size={20} />
                    ) : (
                      <div className="text-purple-600">
                        <WheelchairIcon />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {booking.type}
                    </p>
                    <p className="text-xs text-gray-500">ID: {booking.id}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-400" />
                  <div>
                    <p className="text-gray-500">From</p>
                    <p className="font-medium text-gray-900">{booking.from}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-400" />
                  <div>
                    <p className="text-gray-500">To</p>
                    <p className="font-medium text-gray-900">{booking.to}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-gray-600">{booking.time}</span>
                </div>
                <p className="text-gray-600">
                  Driver:{" "}
                  <span className="font-medium">{booking.driver}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
