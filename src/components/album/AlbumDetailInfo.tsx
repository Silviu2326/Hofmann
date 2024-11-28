import React from 'react';
import { Star, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AlbumDetailInfoProps {
  name: string;
  dimensions: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  features: string[];
  description: string;
}

export const AlbumDetailInfo: React.FC<AlbumDetailInfoProps> = ({
  name,
  dimensions,
  price,
  originalPrice,
  rating,
  reviewCount,
  features,
  description,
}) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/editor/new-album');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="mt-2 text-gray-600">{dimensions} | Incluye apertura plana</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">
            {price.toFixed(2)} €
          </span>
          <span className="text-lg text-rose-500 line-through">
            {originalPrice.toFixed(2)} €
          </span>
          <span className="text-sm bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full">
            -50%
          </span>
        </div>
        <p className="text-sm text-gray-500">(excl. envío)</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">{rating}</span>
        <span className="text-sm text-gray-500">
          basado en {reviewCount} reseñas
        </span>
      </div>

      <p className="text-gray-700">{description}</p>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-teal-600" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleCreateClick}
        className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Crear ahora
      </button>
    </div>
  );
};