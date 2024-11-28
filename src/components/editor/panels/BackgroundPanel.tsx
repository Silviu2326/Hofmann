import React from 'react';
import { Search } from 'lucide-react';

const backgrounds = [
  { id: 'solid', name: 'Sólido' },
  { id: 'gradient', name: 'Degradado' },
  { id: 'pattern', name: 'Patrón' },
];

export const BackgroundPanel = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar fondos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {backgrounds.map((bg) => (
            <div 
              key={bg.id}
              className="aspect-square rounded-lg cursor-pointer hover:opacity-75 bg-gradient-to-br from-blue-500 to-purple-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};