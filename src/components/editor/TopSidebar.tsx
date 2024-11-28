import React, { useState } from 'react';
import { Eye, ShoppingCart, ChevronDown } from 'lucide-react';

interface TopSidebarProps {
  price: number;
  originalPrice: number;
  title: string;
}

interface SizeOption {
  size: string;
  price: number;
  originalPrice: number;
}

export const TopSidebar: React.FC<TopSidebarProps> = ({
  price: initialPrice,
  originalPrice: initialOriginalPrice,
  title,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('L - 21 x 28 cm');
  const [price, setPrice] = useState(initialPrice);
  const [originalPrice, setOriginalPrice] = useState(initialOriginalPrice);

  const sizeOptions: SizeOption[] = [
    { size: 'L - 21 x 28 cm', price: 24.0, originalPrice: 47.99 },
    { size: 'M - 15 x 20 cm', price: 19.99, originalPrice: 39.99 },
    { size: 'S - 10 x 15 cm', price: 14.99, originalPrice: 29.99 },
  ];

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const handleSizeChange = (option: SizeOption) => {
    setSelectedSize(option.size);
    setPrice(option.price);
    setOriginalPrice(option.originalPrice);
    setIsDropdownOpen(false);
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-red-500 tracking-tight hover:text-red-600 transition-colors cursor-pointer">
          Hofmann
        </div>

        <div className="flex items-center space-x-8 flex-1 justify-center">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="group flex items-center space-x-3 hover:text-gray-600 transition-colors duration-150 relative"
          >
            <span className="text-base font-medium text-gray-900 group-hover:text-gray-600 whitespace-nowrap">
              {title}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-[400px] bg-white rounded-lg shadow-xl border border-gray-200 z-50 -translate-x-1/2 left-1/2">
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <img
                        src="/vite.svg"
                        alt="Album icon"
                        className="w-5 h-5"
                      />
                    </span>
                    Cambia el tamaño del álbum
                  </h2>

                  <div className="space-y-2">
                    {sizeOptions.map((option) => (
                      <button
                        key={option.size}
                        onClick={() => handleSizeChange(option)}
                        className={`w-full text-left px-4 py-3 rounded-lg border ${
                          selectedSize === option.size
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-500 hover:bg-gray-50'
                        } flex justify-between items-center transition-all duration-150`}
                      >
                        <span className="font-medium text-gray-900">
                          {option.size}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500 line-through text-sm">
                            €{option.originalPrice.toFixed(2)}
                          </span>
                          <span className="font-medium text-blue-600">
                            €{option.price.toFixed(2)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4 border-t mt-4">
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150 text-sm"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => setIsDropdownOpen(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150 text-sm"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </button>

          <div className="flex items-center space-x-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                €{price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                €{originalPrice.toFixed(2)}
              </span>
            </div>
            <span className="px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-md whitespace-nowrap">
              -{discount}%
            </span>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              IVA incl.
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-150">
            <Eye className="w-4 h-4 mr-2 text-gray-500" />
            Vista previa
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Añadir a la cesta
          </button>
        </div>
      </div>
    </div>
  );
};
