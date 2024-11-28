import React, { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FolderUp, Image } from 'lucide-react';
import { usePhotoStore } from '../../store/usePhotoStore';
import toast from 'react-hot-toast';

export const UploadZone: React.FC = () => {
  const addPhotos = usePhotoStore((state) => state.addPhotos);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFiles = (files: File[]) => {
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 25 * 1024 * 1024
    );

    if (validFiles.length === 0) {
      toast.error('No se encontraron imágenes válidas');
      return;
    }

    if (validFiles.length !== files.length) {
      toast('Algunas imágenes fueron ignoradas por no ser válidas', {
        icon: '⚠️',
      });
    }

    const newPhotos = validFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      url: URL.createObjectURL(file),
      file,
    }));

    addPhotos(newPhotos);
    toast.success(`${validFiles.length} fotos añadidas correctamente`);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      processFiles(acceptedFiles);
    },
    [addPhotos]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    },
    maxSize: 25 * 1024 * 1024,
  });

  const handleFolderUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    processFiles(files);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    processFiles(files);
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300
          ${
            isDragActive
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/50'
          }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-indigo-600" />
        <p className="mt-4 text-lg text-gray-900 font-medium">
          {isDragActive ? 'Suelta las fotos aquí...' : 'Arrastra y suelta tus fotos aquí'}
        </p>
        <p className="mt-2 text-sm text-gray-500">o usa una de las opciones de abajo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
        />
        <input
          type="file"
          ref={folderInputRef}
          className="hidden"
          webkitdirectory=""
          directory=""
          multiple
          onChange={handleFolderUpload}
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center space-x-2 p-4 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
        >
          <Image className="w-5 h-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Seleccionar fotos</span>
        </button>
        
        <button 
          onClick={() => folderInputRef.current?.click()}
          className="flex items-center justify-center space-x-2 p-4 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
        >
          <FolderUp className="w-5 h-5 text-indigo-600" />
          <span className="text-gray-700 font-medium">Subir carpeta</span>
        </button>
      </div>
    </div>
  );
};