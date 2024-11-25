import React from 'react';
import { MapPin, Wine, Calendar, User } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="mt-8 bg-white rounded-xl p-4 shadow-lg">
      <div className="flex justify-around">
        <MapPin className="w-6 h-6 text-purple-600 cursor-pointer hover:text-purple-700 transition-colors" />
        <Wine className="w-6 h-6 text-gray-400 cursor-pointer hover:text-purple-600 transition-colors" />
        <Calendar className="w-6 h-6 text-gray-400 cursor-pointer hover:text-purple-600 transition-colors" />
        <User className="w-6 h-6 text-gray-400 cursor-pointer hover:text-purple-600 transition-colors" />
      </div>
    </div>
  );
};

export default Navigation;