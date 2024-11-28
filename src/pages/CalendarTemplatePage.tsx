import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { calendarTypes } from '../data/calendars';
import { ArrowLeft } from 'lucide-react';
import { CalendarFilters } from '../components/calendar/CalendarFilters';
import { CalendarTemplateGrid } from '../components/calendar/CalendarTemplateGrid';

export const CalendarTemplatePage: React.FC = () => {
  const { calendarId } = useParams();
  const calendar = calendarTypes.find((c) => c.id === calendarId);
  const [selectedSize, setSelectedSize] = useState(calendar?.sizes[0]?.id || '');
  const [selectedStyle, setSelectedStyle] = useState(calendar?.styles[0]?.id || '');

  if (!calendar) {
    return <div>Calendar not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/calendarios" className="flex items-center text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span className="ml-1">Volver a calendarios</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Escoge tu calendario temático</h1>
          <p className="mt-2 text-gray-600">
            {calendar.sizes.reduce((total, size) => total + (size.count || 0), 0)} productos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <CalendarFilters
                calendar={calendar}
                selectedSize={selectedSize}
                selectedStyle={selectedStyle}
                onSizeChange={setSelectedSize}
                onStyleChange={setSelectedStyle}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <CalendarTemplateGrid
              calendar={calendar}
              selectedSize={selectedSize}
              selectedStyle={selectedStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};