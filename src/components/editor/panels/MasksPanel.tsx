import React from 'react';
import { Search } from 'lucide-react';

const maskCategories = [
  { id: 'shapes', name: 'Formas' },
  { id: 'abstract', name: 'Abstracto' },
  { id: 'organic', name: 'Orgánico' },
  { id: 'geometric', name: 'Geométrico' },
];

export const MasksPanel = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar máscaras..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            {maskCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square rounded-lg cursor-pointer hover:opacity-75 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden"
            >
              <div className="w-full h-full bg-white" style={{
                clipPath: 'circle(40% at 50% 50%)'
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};