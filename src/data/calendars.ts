export const calendarTypes = [
  {
    id: 'wall',
    name: 'Calendario de pared',
    description: 'Decora tus paredes con tus mejores momentos',
    image: 'https://www.hofmann.es/product-pictures/Calendar/product-block/calendar-year-es.jpg?d=310x273',
    basePrice: 14.99,
    styles: [
      { id: 'all', name: 'Todos los estilos', description: 'Ver todos los diseños disponibles', image: '', priceModifier: 1 },
      { id: 'classic', name: 'Classic', description: 'Diseño tradicional y elegante', image: '', priceModifier: 1, count: 207 },
      { id: 'modern', name: 'Modern', description: 'Estilo contemporáneo y minimalista', image: '', priceModifier: 1.1, count: 383 },
      { id: 'bold', name: 'Bold', description: 'Diseños llamativos y modernos', image: '', priceModifier: 1.1, count: 153 },
      { id: 'playful', name: 'Playful', description: 'Diseños divertidos y coloridos', image: '', priceModifier: 1, count: 100 },
      { id: 'natural', name: 'Natural', description: 'Inspirado en la naturaleza', image: '', priceModifier: 1, count: 183 },
      { id: 'scrapbook', name: 'Scrapbook', description: 'Estilo artesanal y personal', image: '', priceModifier: 1.2, count: 93 }
    ],
    sizes: [
      { id: 'popular', name: 'Más popular', dimensions: 'Todos los tamaños', priceModifier: 1 },
      { id: 'a3-vertical', name: 'A3 vertical', dimensions: '30 x 40 cm', priceModifier: 1.5, count: 140 },
      { id: 'a4-double', name: 'A4 doble', dimensions: '30 x 40 cm', priceModifier: 1.3, count: 139 },
      { id: 'a4-vertical', name: 'A4 vertical', dimensions: '20 x 30 cm', priceModifier: 1, count: 136 },
      { id: 'square', name: 'Cuadrado', dimensions: '20 x 20 cm', priceModifier: 1, count: 137 },
      { id: 'a5-vertical', name: 'A5 vertical', dimensions: '15 x 20 cm', priceModifier: 0.8, count: 121 },
      { id: 'a5-landscape', name: 'A5 apaisado', dimensions: '20 x 15 cm', priceModifier: 0.8, count: 121 },
      { id: 'a4-landscape', name: 'A4 apaisado', dimensions: '30 x 20 cm', priceModifier: 1, count: 121 },
      { id: 'a3-landscape', name: 'A3 apaisado', dimensions: '40 x 30 cm', priceModifier: 1.5, count: 121 },
      { id: 'kitchen', name: 'Calendario de cocina', dimensions: '15 x 40 cm', priceModifier: 1.2, count: 18 }
    ]
  },
  {
    id: 'desk',
    name: 'Calendario de escritorio',
    description: 'Pon tus recuerdos favoritos en tu escritorio',
    image: 'https://www.hofmann.es/product-pictures/Calendar/product-block/calendar-desk-es.jpg?d=310x273',
    basePrice: 8.69,
    styles: [
      { id: 'all', name: 'Todos los estilos', description: 'Ver todos los diseños disponibles', image: '', priceModifier: 1 },
      { id: 'basic', name: 'Diseña tu producto', description: 'Personalízalo a tu gusto', image: '', priceModifier: 1, count: 156 },
      { id: 'simple', name: 'Guión sencillo', description: 'Diseño limpio y minimalista', image: '', priceModifier: 1, count: 124 },
      { id: 'serif', name: 'Serif sencillo', description: 'Elegante diseño con serifa', image: '', priceModifier: 1, count: 98 },
      { id: 'modern', name: 'Modern', description: 'Estilo contemporáneo', image: '', priceModifier: 1.1, count: 167 },
      { id: 'playful', name: 'Playful', description: 'Diseños divertidos', image: '', priceModifier: 1, count: 89 }
    ],
    sizes: [
      { id: 'popular', name: 'Más popular', dimensions: 'Todos los tamaños', priceModifier: 1 },
      { id: 'standard', name: 'Estándar', dimensions: '20 x 10 cm', priceModifier: 1, count: 116 },
      { id: 'vertical', name: 'Vertical con base de madera', dimensions: '12 x 17 cm', priceModifier: 1.2, count: 15 },
      { id: 'horizontal', name: 'Horizontal con base de madera', dimensions: '17 x 12 cm', priceModifier: 1.2, count: 14 }
    ]
  },
  {
    id: 'family',
    name: 'Planificador familiar',
    description: 'Organiza las actividades de toda la familia',
    image: 'https://www.hofmann.es/product-pictures/Calendar/product-block/calendar-family-es.jpg?d=310x273',
    basePrice: 16.99,
    styles: [
      { id: 'all', name: 'Todos los estilos', description: 'Ver todos los diseños disponibles', image: '', priceModifier: 1 },
      { id: 'classic', name: 'Classic', description: 'Diseño tradicional', image: '', priceModifier: 1, count: 45 },
      { id: 'modern', name: 'Modern', description: 'Estilo moderno', image: '', priceModifier: 1.1, count: 36 },
      { id: 'playful', name: 'Playful', description: 'Diseño divertido para niños', image: '', priceModifier: 1, count: 28 },
      { id: 'minimal', name: 'Minimal', description: 'Diseño minimalista y funcional', image: '', priceModifier: 1.1, count: 31 }
    ],
    sizes: [
      { id: 'popular', name: 'Más popular', dimensions: 'Todos los tamaños', priceModifier: 1 },
      { id: 'standard', name: 'Estándar', dimensions: '30 x 30 cm', priceModifier: 1, count: 81 },
      { id: 'large', name: 'Grande', dimensions: '40 x 40 cm', priceModifier: 1.3, count: 59 }
    ]
  }
];