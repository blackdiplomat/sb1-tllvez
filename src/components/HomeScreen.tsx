import React from 'react';
import { MapPin } from 'lucide-react';
import SearchBar from './home/SearchBar';
import NearbyWineries from './home/NearbyWineries';

const HomeScreen = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Discover Wineries</h1>
        <SearchBar />
      </div>
      
      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="font-medium">Explore Nearby</p>
            <p className="text-sm text-purple-200">12 wineries within 5 miles</p>
          </div>
        </div>
      </div>

      <NearbyWineries />
    </div>
  );
};

export default HomeScreen;