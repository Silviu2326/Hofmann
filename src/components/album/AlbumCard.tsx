import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

interface AlbumCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  description: string;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({
  id,
  name,
  image,
  price,
  originalPrice,
  description,
  rating = 4.5,
  reviewCount = 0,
  isBestseller = false,
  isNew = false,
}) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <Link
      to={`/album-fotos/${id}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          -{discount}%
        </div>
        {isBestseller && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            Bestseller
          </div>
        )}
        {isNew && (
          <div className="absolute bottom-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Nuevo
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {price.toFixed(2)}€
              </span>
              <span className="text-sm text-rose-500 line-through">
                {originalPrice.toFixed(2)}€
              </span>
            </div>
            {reviewCount > 0 && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{rating}</span>
              </div>
            )}
          </div>

          <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
            <span>Ver detalles</span>
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};