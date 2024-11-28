import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarType } from '../../types/calendar';
import { ChevronRight } from 'lucide-react';

interface CalendarTypeCardProps {
  calendar: CalendarType;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export const CalendarTypeCard: React.FC<CalendarTypeCardProps> = ({ calendar, onSelect, isSelected }) => {
  return (
    <Link
      to={`/calendarios/${calendar.id}`}
      onClick={() => onSelect(calendar.id)}
      className={`block cursor-pointer group rounded-lg overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-2 ring-rose-500 shadow-lg' : 'hover:shadow-md'
      }`}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={calendar.image}
          alt={calendar.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{calendar.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{calendar.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              Desde {calendar.basePrice.toFixed(2)}€
            </span>
          </div>
          <ChevronRight className="text-rose-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};