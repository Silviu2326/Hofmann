import { Album } from '../types/album';

export const albums: Album[] = [
  {
    id: '1',
    name: 'Álbum Premium Boda',
    image: 'https://www.hofmann.es/product-pictures/PAP_318/product-page-slider/image-slider-1.jpg?d=700x700',
    images: [
      'https://www.hofmann.es/product-pictures/PAP_318/product-page-slider/image-slider-1.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_318/product-page-slider/image-slider-2.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_318/product-page-slider/image-slider-3.jpg?d=700x700'
    ],
    price: 49.99,
    originalPrice: 89.99,
    description: 'Álbum de lujo con acabados premium, perfecto para bodas y eventos especiales',
    rating: 4.8,
    reviewCount: 156,
    isBestseller: true,
    features: [
      'Papel fotográfico premium',
      'Tapa personalizable',
      'Acabado mate o brillante',
      'Caja de regalo incluida'
    ],
    size: 'large',
    format: 'landscape',
    cover: 'padded',
    binding: 'flat',
    style: 'classic',
    occasion: 'wedding'
  },
  {
    id: '2',
    name: 'Álbum Viajes Aventura',
    image: 'https://www.hofmann.es/product-pictures/PAP_193/product-page-slider/image-slider-1.jpg?d=700x700',
    images: [
      'https://www.hofmann.es/product-pictures/PAP_193/product-page-slider/image-slider-1.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_193/product-page-slider/image-slider-2.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_193/product-page-slider/image-slider-3.jpg?d=700x700'
    ],
    price: 34.99,
    originalPrice: 59.99,
    description: 'Captura tus aventuras en este álbum resistente y elegante',
    rating: 4.6,
    reviewCount: 89,
    isNew: true,
    features: [
      'Papel resistente',
      'Diseño moderno',
      'Portada personalizable',
      'Formato horizontal'
    ],
    size: 'medium',
    format: 'square',
    cover: 'hardcover',
    binding: 'normal',
    style: 'minimal',
    occasion: 'travel'
  },
  {
    id: '3',
    name: 'Álbum Familiar Deluxe',
    image: 'https://www.hofmann.es/product-pictures/PAP_319/product-page-slider/image-slider-1.jpg?d=700x700',
    images: [
      'https://www.hofmann.es/product-pictures/PAP_319/product-page-slider/image-slider-1.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_319/product-page-slider/image-slider-2.jpg?d=700x700',
      'https://www.hofmann.es/product-pictures/PAP_319/product-page-slider/image-slider-3.jpg?d=700x700'
    ],
    price: 39.99,
    originalPrice: 69.99,
    description: 'El álbum perfecto para preservar los momentos más especiales en familia',
    rating: 4.7,
    reviewCount: 124,
    features: [
      'Gran formato',
      'Papel premium',
      'Diseño elegante',
      'Acabado profesional'
    ],
    size: 'large',
    format: 'portrait',
    cover: 'hardcover',
    binding: 'flat',
    style: 'classic',
    occasion: 'family'
  }
];