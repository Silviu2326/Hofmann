import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const CalendarProductHeader: React.FC = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex space-x-2 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link to="/calendarios" className="text-gray-500 hover:text-gray-700">
            Calendarios personalizados
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link to="/calendarios/wall" className="text-gray-500 hover:text-gray-700">
            Calendarios A3
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">Diseña tu producto</span>
        </nav>
      </div>
    </div>
  );
};