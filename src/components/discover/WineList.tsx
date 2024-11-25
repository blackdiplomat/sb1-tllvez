import React from 'react';
import WineCard from '@/components/shared/WineCard';
import type { Wine } from '@/types';

const wines: Wine[] = [
  {
    id: 1,
    name: "2021 Chaos Theory",
    winery: "Brown Estate",
    price: 65,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?auto=format&fit=crop&w=200",
    description: "A bold blend of Cabernet Sauvignon and Zinfandel"
  },
  {
    id: 2,
    name: "2020 Zinfandel",
    winery: "Brown Estate",
    price: 55,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=200",
    description: "Classic Napa Valley Zinfandel"
  },
  {
    id: 3,
    name: "2019 Cabernet",
    winery: "Brown Estate",
    price: 75,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1566754436893-98224ee05be3?auto=format&fit=crop&w=200",
    description: "Estate grown Cabernet Sauvignon"
  }
];

const WineList: React.FC = () => {
  return (
    <div className="space-y-4">
      {wines.map((wine) => (
        <WineCard 
          key={wine.id} 
          wine={wine}
          onClick={() => console.log('Wine clicked:', wine.name)}
        />
      ))}
    </div>
  );
};

export default WineList;