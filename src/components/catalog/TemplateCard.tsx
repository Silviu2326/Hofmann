import React from 'react';
import { Link } from 'react-router-dom';
import { Template } from '../../types/album';
import { ChevronRight, Star } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <Link
      to={`/template/${template.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={template.coverImage}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          -45%
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{template.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {template.price.toFixed(2)}€
              </span>
              <span className="text-sm text-rose-500 line-through">
                {(template.price * 1.45).toFixed(2)}€
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {template.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                <Star className="w-3 h-3 mr-1" />
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {template.minPages}-{template.maxPages} páginas
            </span>
            <ChevronRight className="text-rose-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};