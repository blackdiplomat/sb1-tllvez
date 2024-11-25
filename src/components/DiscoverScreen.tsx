import React from 'react';
import { Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const wines = [
  {
    id: 1,
    name: "2021 Chaos Theory",
    winery: "Brown Estate",
    price: 65,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?auto=format&fit=crop&w=200"
  },
  {
    id: 2,
    name: "2020 Zinfandel",
    winery: "Brown Estate",
    price: 55,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=200"
  },
  {
    id: 3,
    name: "2019 Cabernet",
    winery: "Brown Estate",
    price: 75,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1566754436893-98224ee05be3?auto=format&fit=crop&w=200"
  }
];

const DiscoverScreen = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Wines</h2>
        <Button variant="ghost" size="icon">
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <div className="space-y-4">
        {wines.map((wine) => (
          <Card key={wine.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
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
        ))}
      </div>
    </div>
  );
};

export default Di