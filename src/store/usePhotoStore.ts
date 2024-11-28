import { create } from 'zustand';
import { Photo } from '../types';

interface PhotoStore {
  photos: Photo[];
  selectedPhotos: string[];
  addPhotos: (newPhotos: Photo[]) => void;
  removePhoto: (id: string) => void;
  updatePhoto: (id: string, updates: Partial<Photo>) => void;
  selectPhoto: (id: string) => void;
  deselectPhoto: (id: string) => void;
  reorderPhotos: (fromIndex: number, toIndex: number) => void;
}

export const usePhotoStore = create<PhotoStore>((set) => ({
  photos: [],
  selectedPhotos: [],
  addPhotos: (newPhotos) =>
    set((state) => ({ photos: [...state.photos, ...newPhotos] })),
  removePhoto: (id) =>
    set((state) => ({
      photos: state.photos.filter((photo) => photo.id !== id),
      selectedPhotos: state.selectedPhotos.filter((photoId) => photoId !== id),
    })),
  updatePhoto: (id, updates) =>
    set((state) => ({
      photos: state.photos.map((photo) =>
        photo.id === id ? { ...photo, ...updates } : photo
      ),
    })),
  selectPhoto: (id) =>
    set((state) => ({
      selectedPhotos: [...state.selectedPhotos, id],
    })),
  deselectPhoto: (id) =>
    set((state) => ({
      selectedPhotos: state.selectedPhotos.filter((photoId) => photoId !== id),
    })),
  reorderPhotos: (fromIndex, toIndex) =>
    set((state) => {
      const newPhotos = [...state.photos];
      const [movedPhoto] = newPhotos.splice(fromIndex, 1);
      newPhotos.splice(toIndex, 0, movedPhoto);
      return { photos: newPhotos };
    }),
}));