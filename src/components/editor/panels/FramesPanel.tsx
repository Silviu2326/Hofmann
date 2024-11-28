import React from 'react';
import { Search } from 'lucide-react';

const frameStyles = [
  { id: 'classic', name: 'Clásico' },
  { id: 'modern', name: 'Moderno' },
  { id: 'vintage', name: 'Vintage' },
  { id: 'minimal', name: 'Minimalista' },
];

export const FramesPanel = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar marcos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            {frameStyles.map(style => (
              <option key={style.id} value={style.id}>
                {style.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square rounded-lg cursor-pointer hover:opacity-75 border-4 border-gray-300"
            >
              <div className="w-full h-full bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};