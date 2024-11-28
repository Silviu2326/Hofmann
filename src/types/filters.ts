export interface FilterOption {
  id: string;
  name: string;
  count: number;
  description?: string;
  dimensions?: string;
}

export interface AlbumFilters {
  sizes: FilterOption[];
  formats: FilterOption[];
  covers: FilterOption[];
  binding: FilterOption[];
}

export interface PriceRange {
  min: number;
  max: number;
}