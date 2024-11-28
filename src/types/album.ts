export interface Album {
  id: string;
  name: string;
  image: string;
  images: string[];
  price: number;
  originalPrice: number;
  description: string;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
  isNew?: boolean;
  features: string[];
  size: string;
  format: string;
  cover: string;
  binding: string;
  style: string;
  occasion: string;
}