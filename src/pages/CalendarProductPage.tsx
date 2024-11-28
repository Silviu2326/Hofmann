import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarProductHeader } from '../components/calendar/CalendarProductHeader';
import { CalendarProductGallery } from '../components/calendar/CalendarProductGallery';
import { CalendarProductInfo } from '../components/calendar/CalendarProductInfo';

export const CalendarProductPage: React.FC = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const previewImages = [
    'https://www.hofmann.es/managed-assets/predesigned-products/preview/7ee9QXzkKY-AS8QwC4DOeh/Predesignedproduct_7ee9QXzkKY-AS8QwC4DOeh.png',
    'https://images.unsplash.com/photo-1515847049296-a281d6401047?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&q=80&w=1000',
  ];

  const priceBreakdown = [
    { quantity: '1 - 2', price: 17.99, originalPrice: 29.99, discount: '40%' },
    { quantity: '3', price: 16.19, originalPrice: 29.99, discount: '46%' },
    { quantity: '4 - 6', price: 15.29, originalPrice: 29.99, discount: '49%' },
    { quantity: '7+', price: 14.40, originalPrice: 29.99, discount: '52%' },
  ];

  const handleCreateClick = () => {
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CalendarProductHeader />
      
      <div className="bg-rose-500 text-white py-2 text-center text-sm">
        <p>
          Hasta 60% en calendarios personalizados | Código: ESBLACK24 | 
          Termina en 23:59h, 01-12-2024
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CalendarProductGallery images={previewImages} />
          
          <CalendarProductInfo
            name="Calendario personalizado A3"
            price={17.99}
            originalPrice={29.99}
            priceBreakdown={priceBreakdown}
            onCreateClick={handleCreateClick}
          />
        </div>
      </main>
    </div>
  );
};