import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UploadHeader: React.FC = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/album-fotos" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Subir fotos</h1>
          </div>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <HelpCircle className="h-5 w-5 mr-1" />
            <span className="text-sm">Ayuda</span>
          </button>
        </div>
      </div>
    </div>
  );
};