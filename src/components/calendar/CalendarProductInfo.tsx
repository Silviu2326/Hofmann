import React from 'react';
import { Star } from 'lucide-react';

interface PriceBreakdown {
  quantity: string;
  price: number;
  originalPrice: number;
  discount: string;
}

interface CalendarProductInfoProps {
  name: string;
  price: number;
  originalPrice: number;
  priceBreakdown: PriceBreakdown[];
  onCreateClick: () => void;
}

export const CalendarProductInfo: React.FC<CalendarProductInfoProps> = ({
  name,
  price,
  originalPrice,
  priceBreakdown,
  onCreateClick,
}) => {
  const languages = ['Español', 'Catalán', 'Vasco', 'Valenciano'];
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      
      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">{price.toFixed(2)} €</span>
          <span className="text-lg text-rose-500 line-through">{originalPrice.toFixed(2)} €</span>
          <span className="text-sm text-rose-500 font-medium">-40%</span>
        </div>
        <p className="text-sm text-gray-500">(excl. envío)</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Elige el idioma</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <button
              key={lang}
              className={`px-4 py-2 rounded-lg border ${
                index === 0
                  ? 'border-teal-600 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onCreateClick}
        className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Crear ahora
      </button>

      <div className="bg-rose-50 rounded-lg p-4">
        <h3 className="font-medium text-rose-900 mb-2">Más recuerdos, más ahorros | Descuento por volumen</h3>
        <div className="space-y-2">
          {priceBreakdown.map((tier) => (
            <div key={tier.quantity} className="flex justify-between text-sm">
              <span className="text-gray-600">{tier.quantity}</span>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{tier.price.toFixed(2)} €</span>
                <span className="text-gray-400 line-through">{tier.originalPrice.toFixed(2)} €</span>
                <span className="text-rose-600">-{tier.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2 text-sm">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${star <= 4.5 ? 'text-yellow-400' : 'text-gray-200'}`}
              fill={star <= 4.5 ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="font-medium">4.5</span>
        <span className="text-gray-600">basado en</span>
        <a href="#reviews" className="text-teal-600 hover:text-teal-700">132 reseñas</a>
      </div>

      <div className="pt-6 border-t">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Star className="w-4 h-4 text-teal-600" />
          <span>Impresión y acabado de alta calidad</span>
        </div>
      </div>
    </div>
  );
};