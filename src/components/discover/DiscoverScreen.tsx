import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WineList from './WineList';
import SearchInput from '@/components/shared/SearchInput';

const DiscoverScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Wines</h2>
        <Button variant="ghost" size="icon">
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <SearchInput 
        placeholder="Search wines..."
        value={searchQuery}
        onChange={setSearchQuery}
        className="mb-4"
      />

      <WineList />
    </div>
  );
};

export default DiscoverScreen;