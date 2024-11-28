import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { usePhotoStore } from '../store/usePhotoStore';
import toast from 'react-hot-toast';

export const PhotoUploader: React.FC = () => {
  const addPhotos = usePhotoStore((state) => state.addPhotos);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPhotos = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substring(7),
        url: URL.createObjectURL(file),
        file,
      }));
      addPhotos(newPhotos);
      toast.success(`${acceptedFiles.length} photos uploaded successfully!`);
    },
    [addPhotos]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive
          ? 'Drop the photos here...'
          : 'Drag & drop photos here, or click to select'}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Supports: JPG, PNG, GIF, WebP
      </p>
    </div>
  );
};