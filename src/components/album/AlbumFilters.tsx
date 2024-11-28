import React from 'react';
import { Filter } from 'lucide-react';
import { AlbumFilterSection } from './AlbumFilterSection';
import { albumFilters } from '../../data/albumFilters';

interface AlbumFiltersProps {
  selectedSize: string;
  selectedFormat: string;
  selectedCover: string;
  selectedBinding: string;
  onSizeChange: (size: string) => void;
  onFormatChange: (format: string) => void;
  onCoverChange: (cover: string) => void;
  onBindingChange: (binding: string) => void;
}

export const AlbumFilters: React.FC<AlbumFiltersProps> = ({
  selectedSize,
  selectedFormat,
  selectedCover,
  selectedBinding,
  onSizeChange,
  onFormatChange,
  onCoverChange,
  onBindingChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="font-medium text-gray-700">Filtros</span>
      </div>

      <div className="space-y-6">
        <AlbumFilterSection
          title="Elegir tamaño"
          options={albumFilters.sizes}
          selectedId={selectedSize}
          onChange={onSizeChange}
        />

        <AlbumFilterSection
          title="Elegir formato"
          options={albumFilters.formats}
          selectedId={selectedFormat}
          onChange={onFormatChange}
        />

        <AlbumFilterSection
          title="Elegir tipo de tapa"
          options={albumFilters.covers}
          selectedId={selectedCover}
          onChange={onCoverChange}
        />

        <AlbumFilterSection
          title="Elegir encuadernación"
          options={albumFilters.binding}
          selectedId={selectedBinding}
          onChange={onBindingChange}
        />
      </div>
    </div>
  );
};