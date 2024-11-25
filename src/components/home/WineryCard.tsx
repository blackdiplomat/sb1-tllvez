import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface Winery {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

interface WineryCardProps {
  winery: Winery;
}

const WineryCard: React.FC<WineryCardProps> = ({ winery }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[2/1] relative">
        <img 
          src={winery.image} 
          alt={winery.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900">{winery.name}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin className="w-4 h-4" />
          {winery.location}
        </div>
        <p className="text-sm text-gray-600">{winery.description}</p>
      </div>
    </Card>
  );
};

export default WineryCard;