import React from 'react';
import { CalendarType } from '../../types/calendar';
import { Filter } from 'lucide-react';

interface CalendarFiltersProps {
  calendar: CalendarType;
  selectedSize: string;
  selectedStyle: string;
  onSizeChange: (size: string) => void;
  onStyleChange: (style: string) => void;
}

export const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  calendar,
  selectedSize,
  selectedStyle,
  onSizeChange,
  onStyleChange,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="font-medium text-gray-700">Filtros</span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Elegir tamaño</h3>
          <div className="space-y-3">
            {calendar.sizes.map((size) => (
              <label key={size.id} className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size.id}
                  checked={selectedSize === size.id}
                  onChange={(e) => onSizeChange(e.target.value)}
                  className="h-4 w-4 text-rose-500 border-gray-300 focus:ring-rose-500"
                />
                <div className="ml-3 flex-grow">
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {size.name}
                  </span>
                  {size.count && (
                    <span className="ml-1 text-sm text-gray-500">
                      ({size.count})
                    </span>
                  )}
                  {size.dimensions !== 'Todos los tamaños' && (
                    <p className="text-xs text-gray-500">{size.dimensions}</p>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Elegir estilo</h3>
          <div className="space-y-3">
            {calendar.styles.map((style) => (
              <label key={style.id} className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="style"
                  value={style.id}
                  checked={selectedStyle === style.id}
                  onChange={(e) => onStyleChange(e.target.value)}
                  className="h-4 w-4 text-rose-500 border-gray-300 focus:ring-rose-500"
                />
                <div className="ml-3 flex-grow">
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {style.name}
                  </span>
                  {style.count && (
                    <span className="ml-1 text-sm text-gray-500">
                      ({style.count})
                    </span>
                  )}
                  {style.description && (
                    <p className="text-xs text-gray-500">{style.description}</p>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};