import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WineryCard from './WineryCard';

const wineries = [
  {
    id: 1,
    name: "Brown Estate",
    location: "Napa Valley, CA",
    image: "https://images.unsplash.com/photo-1543418219-44e30b057fea?auto=format&fit=crop&w=600",
    description: "Napa Valley's First Black-Owned Winery"
  },
  {
    id: 2,
    name: "Vision Cellars",
    location: "Windsor, CA",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600",
    description: "Specializing in Pinot Noir"
  }
];

const FeaturedWineries: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Featured Wineries</h2>
        <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1 text-sm font-medium">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {wineries.map((winery, index) => (
          <motion.div
            key={winery.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <WineryCard winery={winery} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWineries;