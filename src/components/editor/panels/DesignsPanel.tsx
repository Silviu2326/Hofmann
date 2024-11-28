import React from 'react';

const designs = [
  { id: '2col', name: '2 Columnas' },
  { id: 'grid4', name: 'Cuadrícula 4' },
  { id: 'circle', name: 'Círculo' },
  { id: 'heart', name: 'Corazón' },
  { id: 'collage', name: 'Collage' },
];

export const DesignsPanel = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
          <option>Todo</option>
          <option>Populares</option>
          <option>Recientes</option>
        </select>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-4">
        {designs.map((design) => (
          <div 
            key={design.id}
            className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 flex items-center justify-center border border-gray-200"
          >
            <div className="w-3/4 h-3/4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};