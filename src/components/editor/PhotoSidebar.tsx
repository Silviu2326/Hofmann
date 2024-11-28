import React from 'react';
import { Upload } from 'lucide-react';

export function PhotoSidebar() {
  return (
    <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700">
          <Upload className="w-4 h-4" />
          <span>Upload Photos</span>
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-2 gap-2">
          {/* Photo grid will be populated here */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:opacity-75"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
