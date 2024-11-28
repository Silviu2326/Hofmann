import React from 'react';

interface PricingOption {
  label: string;
  value: string;
}

interface AlbumPricingProps {
  name: string;
  dimensions: string;
  basePrice: number;
  shippingCost: number;
  options: {
    photos: PricingOption;
    pages: PricingOption;
    cover: PricingOption;
  };
}

export const AlbumPricing: React.FC<AlbumPricingProps> = ({
  name,
  dimensions,
  basePrice,
  shippingCost,
  options,
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Todos los precios y opciones
      </h2>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {name} ({dimensions})
        </h3>
        <p className="text-gray-600 mb-4">
          A partir de {basePrice.toFixed(2)}€ (excl. {shippingCost.toFixed(2)}€ en gastos de envío y manipulación)
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Especificaciones</h4>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-600">Cantidad de fotos</dt>
                <dd className="text-gray-900">{options.photos.value}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Opciones de página</dt>
                <dd className="text-gray-900">{options.pages.value}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Opciones de portada</dt>
                <dd className="text-gray-900">{options.cover.value}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};