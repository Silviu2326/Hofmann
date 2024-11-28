import { AlbumFilters } from '../types/filters';

export const albumFilters: AlbumFilters = {
  sizes: [
    { id: 'all', name: 'Todos los tamaños', count: 0 },
    { id: 'small', name: 'Pequeño', count: 2 },
    { id: 'medium', name: 'Mediano', count: 6 },
    { id: 'large', name: 'Grande', count: 15 },
    { id: 'xl', name: 'XL', count: 7 }
  ],
  formats: [
    { id: 'all', name: 'Todos los formatos', count: 0 },
    { id: 'landscape', name: 'Apaisado', count: 13 },
    { id: 'portrait', name: 'Vertical', count: 6 },
    { id: 'square', name: 'Cuadrado', count: 11 }
  ],
  covers: [
    { id: 'all', name: 'Todas las tapas', count: 0 },
    { id: 'padded', name: 'Tapa acolchada', count: 10 },
    { id: 'hardcover', name: 'Tapa dura', count: 13 },
    { id: 'softcover', name: 'Tapa blanda', count: 7 }
  ],
  binding: [
    { id: 'all', name: 'Todas las encuadernaciones', count: 0 },
    { id: 'flat', name: 'Apertura plana', count: 11 },
    { id: 'normal', name: 'Apertura normal', count: 19 }
  ]
};