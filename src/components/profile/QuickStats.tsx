import React from 'react';
import { Wine, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <Wine className="w-5 h-5 text-purple-600 mb-2" />
        <div className="font-medium">12 Wines</div>
        <div className="text-sm text-gray-500">Award-winning selection</div>
      </Card>
      <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <Calendar className="w-5 h-5 text-purple-600 mb-2" />
        <div className="font-medium">Events</div>
        <div className="text-sm text-gray-500">Tastings & Tours</div>
      </Card>
    </div>
  );
};

export default QuickStats;