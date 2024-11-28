import React from 'react';
import { templates } from '../data/templates';
import { TemplateCard } from '../components/catalog/TemplateCard';
import { Star, Heart, Clock } from 'lucide-react';

export const CatalogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-rose-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Crea tu álbum de fotos personalizado
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Diseña un álbum único con tus mejores recuerdos. Calidad profesional garantizada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Calidad Premium</h3>
                <p className="text-sm text-gray-600 text-center">
                  Papel fotográfico profesional y acabados de lujo
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Diseño Único</h3>
                <p className="text-sm text-gray-600 text-center">
                  Personaliza cada detalle a tu gusto
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
                <p className="text-sm text-gray-600 text-center">
                  Recibe tu álbum en 5-7 días laborables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </main>
    </div>
  );
};