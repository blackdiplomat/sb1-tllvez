import React from 'react';
import { Wine, Calendar } from 'lucide-react';

const WineryProfile = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg">
      <div className="text-sm text-gray-500 mb-2">Winery Profile</div>
      <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">Brown Estate</h2>
          <p className="text-gray-500">Napa Valley's First Black-Owned Winery</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Book Visit
          </button>
          <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors">
            Shop Wines
          </button>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">About</div>
          <p className="text-gray-600 text-sm">
            Established in 1995, Brown Estate is renowned for their exceptional Zinfandel...
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Wine className="w-5 h-5 text-gray-400 mb-1" />
            <div className="text-sm font-medium">12 Wines</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Calendar className="w-5 h-5 text-gray-400 mb-1" />
            <div className="text-sm font-medium">Events</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineryProfile;