import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AlbumDetailHeaderProps {
  name: string;
}

export const AlbumDetailHeader: React.FC<AlbumDetailHeaderProps> = ({ name }) => {
  return (
    <>
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/album-fotos" className="text-gray-500 hover:text-gray-700">
              Álbum de fotos
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">{name}</span>
          </nav>
        </div>
      </div>
      <div className="bg-rose-500 text-white py-2 text-center text-sm">
        <p>
          Hasta 60% en álbumes de fotos | Código: ESBLACK24 | 
          <Link to="/detalles" className="underline ml-2">
            Detalles de la oferta
          </Link>
        </p>
      </div>
    </>
  );
};