import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Wine } from '@/types';

interface WineCardProps {
  wine: Wine;
  onClick?: () => void;
}

const WineCard: React.FC<WineCardProps> = ({ wine, onClick }) => {
  return (
    <Card 
      className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex space-x-4">
        <img 
          src={wine.image} 
          alt={wine.name}
          className="w-24 h-32 object-cover rounded-lg"
        />
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-medium">{wine.name}</h3>
            <p className="text-sm text-gray-500">{wine.winery}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{wine.rating}</span>
          </div>
          <div className="text-lg font-medium text-purple-600">
            ${wine.price}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WineCard;