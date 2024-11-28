import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="https://www.hofmann.es/content/default_hofmann.es.jpg" 
        alt="Hofmann" 
        className="h-12"
      />
    </Link>
  );
};