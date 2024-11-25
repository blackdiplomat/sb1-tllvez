import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const wines = [
  {
    id: 1,
    name: "2021 Chaos Theory",
    winery: "Brown Estate",
    price: "$65",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?auto=format&fit=crop&w=300"
  },
  {
    id: 2,
    name: "2020 Pinot Noir",
    winery: "Vision Cellars",
    price: "$55",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=300"
  }
];

const RecommendedWines: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Recommended Wines</h2>
        <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1 text-sm font-medium">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
        {wines.map((wine, index) => (
          <motion.div
            key={wine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-48"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="font-medium text-gray-900 line-clamp-1">{wine.name}</h3>
                <p className="text-sm text-gray-500">{wine.winery}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{wine.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-purple-600">{wine.price}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedWines;