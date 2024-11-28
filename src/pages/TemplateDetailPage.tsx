import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import { Star, Truck, ChevronRight, ArrowLeft } from 'lucide-react';

export const TemplateDetailPage: React.FC = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const template = templates.find((t) => t.id === templateId);

  if (!template) {
    return <div>Template not found</div>;
  }

  const handleCreate = () => {
    navigate(`/editor/${template.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span className="ml-1">Volver</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={template.coverImage}
              alt={template.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              -45%
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{template.name}</h1>
              <p className="mt-4 text-lg text-gray-600">{template.description}</p>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-gray-900">
                {template.price.toFixed(2)}€
              </span>
              <span className="text-xl text-red-600 line-through">
                {(template.price * 1.45).toFixed(2)}€
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Tamaño</p>
                  <p className="text-sm text-gray-500">{template.dimensions.width} x {template.dimensions.height} cm</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Páginas</p>
                  <p className="text-sm text-gray-500">{template.minPages} - {template.maxPages}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Tapa</p>
                  <p className="text-sm text-gray-500">Dura acolchada</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-teal-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Somos expertos en entregar productos de alta calidad
                  </h3>
                  <p className="mt-1 text-sm text-teal-600 hover:text-teal-700 cursor-pointer">
                    Información de Entrega
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Características</h3>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleCreate}
              className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Crear álbum</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};