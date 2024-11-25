import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <Input 
        type="text"
        placeholder="Search wineries, wines, or events..."
        className="pl-10 bg-gray-50 border-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default SearchBar;