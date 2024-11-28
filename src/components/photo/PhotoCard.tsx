import React from 'react';
import { Trash2, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Photo } from '../../types';
import { usePhotoStore } from '../../store/usePhotoStore';

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index }) => {
  const removePhoto = usePhotoStore((state) => state.removePhoto);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removePhoto(photo.id);
  };

  return (
    <div className="group relative aspect-square">
      <img
        src={photo.url}
        alt={`Foto ${index + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg" />
      
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Link
          to={`/editor/photo/${photo.id}`}
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <Edit className="w-4 h-4 text-gray-700" />
        </Link>
        <button
          onClick={handleDelete}
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>
      
      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-sm bg-black/50 px-2 py-1 rounded-full">
          {index + 1}
        </span>
      </div>
    </div>
  );
};