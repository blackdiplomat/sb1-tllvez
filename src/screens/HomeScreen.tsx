import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedWineries from '@/components/home/FeaturedWineries';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import RecommendedWines from '@/components/home/RecommendedWines';
import Navigation from '@/components/shared/Navigation';
import SearchBar from '@/components/shared/SearchBar';

const HomeScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Vine Noir</h1>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
        <div className="max-w-lg mx-auto px-4 pb-3">
          <SearchBar />
        </div>
      </header>

      <main className="flex-1 max-w-lg mx-auto px-4 py-6 space-y-8 pb-24">
        <FeaturedWineries />
        <UpcomingEvents />
        <RecommendedWines />
      </main>

      <Navigation />
    </motion.div>
  );
};