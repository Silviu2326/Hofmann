export interface CalendarType {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
  styles: CalendarStyle[];
  sizes: CalendarSize[];
}

export interface CalendarStyle {
  id: string;
  name: string;
  description: string;
  image: string;
  priceModifier: number;
}

export interface CalendarSize {
  id: string;
  name: string;
  dimensions: string;
  priceModifier: number;
  count?: number;
}