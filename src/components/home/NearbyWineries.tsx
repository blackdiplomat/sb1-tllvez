import React from 'react';
import WineryCard from '@/components/shared/WineryCard';
import type { Winery } from '@/types';

const wineries: Winery[] = [
  {
    id: 1,
    name: "Brown Estate",
    location: "Napa Valley, CA",
    distance: "2.5 miles",
    image: "https://images.unsplash.com/photo-1543418219-44e30b057fea?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Silver Oak",
    location: "Alexander Valley, CA",
    distance: "3.8 miles",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Stag's Leap",
    location: "Napa Valley, CA",
    distance: "4.2 miles",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=100&h=100"
  }
];

const NearbyWineries: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Nearby Wineries</h2>
      <div className="space-y-3">
        {wineries.map((winery) => (
          <WineryCard 
            key={winery.id} 
            winery={winery}
            onClick={() => console.log('Winery clicked:', winery.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default NearbyWineries;