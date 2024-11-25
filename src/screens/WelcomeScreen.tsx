import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Wine } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const setScreen = useStore((state) => state.setScreen);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&w=2000)' }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-8">
        <div className="text-center space-y-4">
          <Wine className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Vine Noir</h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Discover and support Black-owned wineries across the country
          </p>
        </div>

        <div className="w-full max-w-xs space-y-4">
          <Button 
            className="w-full bg-white text-purple-900 hover:bg-gray-100"
            onClick={() => setScreen('signup')}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;