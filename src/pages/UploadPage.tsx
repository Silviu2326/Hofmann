import React, { useState } from 'react';
import { UploadHeader } from '../components/upload/UploadHeader';
import { UploadZone } from '../components/upload/UploadZone';
import { UploadProgress } from '../components/upload/UploadProgress';
import { AlbumPreview } from '../components/upload/AlbumPreview';
import { usePhotoStore } from '../store/usePhotoStore';
import { PhotoGrid } from '../components/PhotoGrid';
import { Book, Image, Sparkles } from 'lucide-react';

export const UploadPage: React.FC = () => {
  const photos = usePhotoStore((state) => state.photos);
  const [isUploading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <UploadHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crea tu álbum de fotos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sube tus mejores momentos y crea un álbum único con nuestro editor profesional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sube tus fotos</h3>
            <p className="text-gray-600 text-sm">
              Arrastra y suelta tus fotos o selecciónalas desde tu dispositivo
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Edita y personaliza</h3>
            <p className="text-gray-600 text-sm">
              Mejora tus fotos con nuestras herramientas profesionales de edición
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Crea tu álbum</h3>
            <p className="text-gray-600 text-sm">
              Organiza tus fotos y diseña un álbum profesional
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Zone */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <UploadZone />
            </div>
            
            {/* Photo Grid */}
            {photos.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Fotos seleccionadas ({photos.length})
                  </h3>
                  <span className="text-sm text-gray-500">
                    Arrastra para reordenar
                  </span>
                </div>
                <PhotoGrid />
              </div>
            )}

            {/* Album Preview */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <AlbumPreview />
            </div>
          </div>

          <div className="space-y-6">
            {/* Upload Progress */}
            {photos.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <UploadProgress
                  totalFiles={photos.length}
                  uploadedFiles={photos.length}
                  failedFiles={0}
                  isUploading={isUploading}
                />
              </div>
            )}

            {/* Tips Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                Consejos para tus fotos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                  Formatos: JPG, PNG, GIF y WebP
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                  Tamaño máximo: 25 MB por foto
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-2" />
                  Resolución mínima: 1500x1500 px
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                  Hasta 500 fotos por álbum
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                  Edición individual disponible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};