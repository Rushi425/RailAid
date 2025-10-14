import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StationAvailabilityCheck = () => {
  const navigate = useNavigate();

  const [selectedStation, setSelectedStation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const availableStations = [
    { name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)', code: 'CSMT', city: 'Mumbai' },
    { name: 'Dadar Railway Station', code: 'DR', city: 'Mumbai' },
    { name: 'Lokmanya Tilak Terminus (LTT)', code: 'LTT', city: 'Mumbai' },
    { name: 'Pune Junction', code: 'PUNE', city: 'Pune' },
    { name: 'Nagpur Junction', code: 'NGP', city: 'Nagpur' },
    { name: 'Nashik Road Railway Station', code: 'NK', city: 'Nashik' },
    { name: 'Thane Railway Station', code: 'TNA', city: 'Thane' },
    { name: 'Kolhapur (Chhatrapati Shahu Maharaj Terminus)', code: 'KOP', city: 'Kolhapur' },
    { name: 'Aurangabad Railway Station', code: 'AWB', city: 'Aurangabad' },
    { name: 'Solapur Junction', code: 'SUR', city: 'Solapur' },
  ];

  const filteredStations = availableStations.filter(
    (station) =>
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCheckAvailability = () => {
    if (selectedStation) {
      const station = availableStations.find((s) => s.code === selectedStation);
      if (station) {
        setIsAvailable(true);
        setIsChecked(true);
      }
    } else {
      setIsAvailable(false);
      setIsChecked(true);
    }
  };

  const handleStationSelect = (stationCode) => {
    setSelectedStation(stationCode);
    setSearchQuery('');
    setIsChecked(false);
  };

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-700 w-full">
      <h2 className="text-2xl font-semibold text-center mb-2 text-blue-400">
        Check Your Station
      </h2>
      <p className="text-gray-400 text-center text-sm mb-6">
        See if RailAid services are available at your station
      </p>

      {/* Search Input */}
      <div className="relative">
        {/* <Search className="absolute  left-0 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" /> */}
        <input
          type="text"
          placeholder="🔍  Search station name or code..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsChecked(false);
          }}
          className="w-full pl-12 lef pr-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Dropdown Results */}
        {searchQuery && filteredStations.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-slate-900 border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
            {filteredStations.map((station) => (
              <button
                key={station.code}
                onClick={() => handleStationSelect(station.code)}
                className="w-full text-left px-4 py-3 hover:bg-slate-800 transition-colors border-b border-slate-700 last:border-b-0"
              >
                <p className="font-medium text-white text-sm">{station.name}</p>
                <p className="text-xs text-gray-400">
                  {station.code} • {station.city}
                </p>
              </button>
            ))}
          </div>
        )}

        {searchQuery && filteredStations.length === 0 && (
          <div className="absolute z-10 w-full mt-2 bg-slate-900 border border-slate-600 rounded-lg shadow-xl p-4">
            <p className="text-gray-400 text-sm text-center">No stations found</p>
          </div>
        )}
      </div>

      {/* Selected Station Display */}
      {selectedStation && !searchQuery && (
        <div className="mb-4 p-3 bg-blue-600/20 border border-blue-500 rounded-lg">
          <p className="text-xs text-gray-300 mb-1">Selected Station:</p>
          <p className="font-semibold text-blue-400 text-sm">
            {availableStations.find((s) => s.code === selectedStation)?.name}
          </p>
        </div>
      )}

      {/* Check Availability Button */}
      {selectedStation && !isChecked && (
        <button
          onClick={handleCheckAvailability}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mb-4"
        >
          <Search className="h-5 w-5" />
          Check Availability
        </button>
      )}

      {/* Availability Result - Service Available */}
      {isChecked && isAvailable && (
        <div>
          <div className="flex items-center gap-3 p-4 bg-green-600/20 border border-green-500 rounded-lg mb-4">
            <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-400">Service Available!</p>
              <p className="text-xs text-gray-300">
                RailAid services are active at this station
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/user-login')}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
          >
            Book Your Slot
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Availability Result - Service NOT Available */}
      {isChecked && !isAvailable && (
        <div className="flex items-center gap-3 p-4 bg-red-600/20 border border-red-500 rounded-lg">
          <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-400">Service Not Available</p>
            <p className="text-xs text-gray-300">
              Please select a valid station from the list
            </p>
          </div>
        </div>
      )}

      {/* Available Stations Info */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">
          Currently available at {availableStations.length} major stations in Maharashtra
        </p>
      </div>
    </div>
  );
};

export default StationAvailabilityCheck;
