import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import WelcomeScreen from '@/screens/WelcomeScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import HomeScreen from '@/screens/HomeScreen';
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  const currentScreen = useStore((state) => state.currentScreen);

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && <WelcomeScreen />}
        {currentScreen === 'signup' && <SignUpScreen />}
        {currentScreen === 'home' && <HomeScreen />}
      </AnimatePresence>
      <Toaster />
    </div>
  );
};