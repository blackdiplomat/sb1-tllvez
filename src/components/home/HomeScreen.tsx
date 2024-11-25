import React from 'react';
import SearchInput from '@/components/shared/SearchInput';
import ExploreCard from './ExploreCard';
import NearbyWineries from './NearbyWineries';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Discover Wineries</h1>
        <SearchInput 
          placeholder="Search wineries..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>
      
      <ExploreCard />
      <NearbyWineries />
    </div>
  );
};

export default HomeScreen;