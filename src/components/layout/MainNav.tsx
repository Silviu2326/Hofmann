import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

export const MainNav: React.FC = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink href="/album-fotos" text="Álbum de fotos" hasDropdown />
            <NavLink href="/calendarios" text="Calendarios personalizados" hasDropdown />
            <NavLink href="/cuadros" text="Cuadros personalizados" hasDropdown />
            <NavLink href="/imprimir-fotos" text="Imprimir fotos" />
            <NavLink href="/regalos" text="Regalos originales" hasDropdown />
            <NavLink href="/tarjetas" text="Tarjetas personalizadas" hasDropdown />
            <NavLink href="/blog" text="Blog" className="text-emerald-600 font-medium" />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
  hasDropdown?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, hasDropdown, className }) => (
  <Link
    to={href}
    className={`flex items-center text-gray-700 hover:text-rose-500 text-sm whitespace-nowrap ${className || ''}`}
  >
    <span>{text}</span>
    {hasDropdown && <ChevronDown className="ml-0.5 h-4 w-4" />}
  </Link>
);