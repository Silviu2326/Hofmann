import React from 'react';
import { Search } from 'lucide-react';

const stickerCategories = [
  { id: 'emoji', name: 'Emojis' },
  { id: 'nature', name: 'Naturaleza' },
  { id: 'travel', name: 'Viajes' },
  { id: 'celebration', name: 'Celebración' },
];

export const StickersPanel = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar pegatinas..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            {stickerCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square rounded-lg cursor-pointer hover:opacity-75 bg-gray-100 flex items-center justify-center"
            >
              <span className="text-2xl">🌟</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};