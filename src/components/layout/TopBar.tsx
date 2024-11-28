import React from 'react';
import { Phone, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-rose-400 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center space-x-6 text-sm">
          <Link to="/servicio-cliente" className="flex items-center hover:text-rose-100 transition-colors">
            <Phone className="h-4 w-4 mr-1" />
            <span>Servicio al Cliente</span>
          </Link>
          <Link to="/mi-cuenta" className="flex items-center hover:text-rose-100 transition-colors">
            <User className="h-4 w-4 mr-1" />
            <span>Mi cuenta</span>
          </Link>
          <Link to="/carrito" className="flex items-center hover:text-rose-100 transition-colors">
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span>Mi carrito</span>
          </Link>
        </div>
      </div>
    </div>
  );
};