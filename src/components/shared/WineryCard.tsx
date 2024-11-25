import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Winery } from '@/types';

interface WineryCardProps {
  winery: Winery;
  onClick?: () => void;
}

const WineryCard: React.FC<WineryCardProps> = ({ winery, onClick }) => {
  return (
    <Card 
      className="p-3 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={winery.image} 
          alt={winery.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="font-medium">{winery.name}</div>
          <div className="text-sm text-gray-500">{winery.location}</div>
          <div className="text-xs text-purple-600">{winery.distance}</div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>
    </Card>
  );
};

export default WineryCard;