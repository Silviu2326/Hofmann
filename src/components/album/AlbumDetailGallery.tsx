import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AlbumDetailGalleryProps {
  images: string[];
  discount?: number;
}

export const AlbumDetailGallery: React.FC<AlbumDetailGalleryProps> = ({ 
  images,
  discount = 50 
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        -{discount}%
      </div>
      
      <div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Preview"
          className="w-full h-full object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 ${
              currentImage === index ? 'border-rose-500' : 'border-gray-200'
            }`}
          >
            <img 
              src={image} 
              alt={`Preview ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};