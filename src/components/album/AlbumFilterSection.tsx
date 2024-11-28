import React from 'react';
import { FilterOption } from '../../types/filters';

interface AlbumFilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedId: string;
  onChange: (id: string) => void;
}

export const AlbumFilterSection: React.FC<AlbumFilterSectionProps> = ({
  title,
  options,
  selectedId,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium text-gray-900">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center">
            <input
              type="radio"
              name={title}
              value={option.id}
              checked={selectedId === option.id}
              onChange={() => onChange(option.id)}
              className="h-4 w-4 text-rose-500 border-gray-300 focus:ring-rose-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              {option.name}
              {option.count > 0 && (
                <span className="text-gray-500 ml-1">({option.count})</span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};