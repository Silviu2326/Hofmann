import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarStyle, CalendarSize } from '../../types/calendar';
import { Star } from 'lucide-react';

interface TemplateProps {
  id: string;
  name: string;
  image: string;
  theme: string;
  bestseller?: boolean;
}

interface CalendarTemplateCardProps {
  template: TemplateProps;
  calendarId: string;
  size?: CalendarSize;
  style?: CalendarStyle;
}

export const CalendarTemplateCard: React.FC<CalendarTemplateCardProps> = ({
  template,
  calendarId,
  size,
  style,
}) => {
  const navigate = useNavigate();
  const finalPrice = 17.99;
  const originalPrice = finalPrice * 1.4;

  const handleCreateClick = () => {
    navigate(`/calendarios/${calendarId}/${template.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          -40%
        </div>
        {template.bestseller && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            Bestseller
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
        {size && size.dimensions !== 'Todos los tamaños' && (
          <p className="text-sm text-gray-600 mb-2">
            {size.name} - {size.dimensions}
          </p>
        )}

        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {finalPrice.toFixed(2)}€
          </span>
          <span className="text-sm text-rose-500 line-through">
            {originalPrice.toFixed(2)}€
          </span>
        </div>

        <button 
          onClick={handleCreateClick}
          className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Crear ahora
        </button>
      </div>
    </div>
  );
};