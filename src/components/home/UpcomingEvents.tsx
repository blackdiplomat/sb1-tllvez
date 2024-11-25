import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const events = [
  {
    id: 1,
    title: "Wine Tasting Experience",
    winery: "Brown Estate",
    date: "Mar 15, 2024",
    time: "2:00 PM",
    price: "$75"
  },
  {
    id: 2,
    title: "Harvest Tour & Tasting",
    winery: "Vision Cellars",
    date: "Mar 20, 2024",
    time: "11:00 AM",
    price: "$95"
  }
];

const UpcomingEvents: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
        <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1 text-sm font-medium">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.winery}</p>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="text-purple-600">{event.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{event.time}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{event.price}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;