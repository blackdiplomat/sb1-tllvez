import React from 'react';
import { Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileHeader: React.FC = () => {
  return (
    <div className="relative h-48">
      <img 
        src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&w=800"
        alt="Brown Estate Vineyard"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button size="icon" variant="secondary" className="bg-white/80 backdrop-blur-sm">
          <Star className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="secondary" className="bg-white/80 backdrop-blur-sm">
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;