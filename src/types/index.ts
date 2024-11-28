export interface Photo {
  id: string;
  url: string;
  file: File;
  thumbnail?: string;
  filters?: PhotoFilters;
  transform?: Transform;
}

export interface PhotoFilters {
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
}

export interface Transform {
  rotation: number;
  crop: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}