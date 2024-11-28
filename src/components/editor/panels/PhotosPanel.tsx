import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

export const PhotosPanel = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={handleUploadClick}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
        >
          <Upload className="w-4 h-4" />
          <span>Subir fotos</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            const photoUploadInput = document.getElementById('photo-upload') as HTMLInputElement;
            if (photoUploadInput && e.target.files) {
              const dataTransfer = new DataTransfer();
              Array.from(e.target.files).forEach(file => {
                dataTransfer.items.add(file);
              });
              photoUploadInput.files = dataTransfer.files;
              photoUploadInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="text-sm font-medium text-gray-500 mb-4">42 fotos</div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:opacity-75">
              {/* Photo preview will go here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};