import React from 'react';
import { Button } from '@/components/ui/button';

const ProfileActions: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
        Book Visit
      </Button>
      <Button variant="outline" className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50">
        Shop Wines
      </Button>
    </div>
  );
};

export default ProfileActions;