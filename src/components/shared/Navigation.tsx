import React from 'react';
import { Home, Map, Users, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', value: 'home' },
  { icon: Map, label: 'Explore', value: 'explore' },
  { icon: Users, label: 'Community', value: 'community' },
  { icon: ShoppingBag, label: 'Shop', value: 'shop' },
  { icon: User, label: 'Profile', value: 'profile' }
];

const Navigation: React.FC = () => {
  const [active, setActive] = React.useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className="flex flex-col items-center space-y-1 group"
          >
            <Icon 
              className={cn(
                'w-6 h-6 transition-colors',
                active === value 
                  ? 'text-purple-600' 
                  : 'text-gray-400 group-hover:text-purple-600'
              )}
            />
            <span className={cn(
              'text-xs',
              active === value 
                ? 'text-purple-600 font-medium' 
                : 'text-gray-500 group-hover:text-purple-600'
            )}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;