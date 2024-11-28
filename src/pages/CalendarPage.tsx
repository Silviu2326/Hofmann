import React, { useState } from 'react';
import { calendarTypes } from '../data/calendars';
import { CalendarTypeCard } from '../components/calendar/CalendarTypeCard';
import { VideoHeroCalendar } from '../components/calendar/VideoHeroCalendar';

export const CalendarPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <VideoHeroCalendar />
      
      <div id="calendar-content" className="bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-rose-100/50 rounded-lg p-4 mb-12 text-center">
            <p className="text-rose-700 font-medium">
              Hasta 60% en calendarios personalizados | Código: ESBLACK24
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calendarTypes.map((calendar) => (
              <CalendarTypeCard
                key={calendar.id}
                calendar={calendar}
                onSelect={setSelectedType}
                isSelected={selectedType === calendar.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};