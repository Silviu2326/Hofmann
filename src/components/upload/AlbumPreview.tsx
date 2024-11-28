import React from 'react';
import { motion } from 'framer-motion';
import { usePhotoStore } from '../../store/usePhotoStore';
import { Book, ChevronLeft, ChevronRight } from 'lucide-react';

export const AlbumPreview: React.FC = () => {
  const photos = usePhotoStore((state) => state.photos);
  const [currentPage, setCurrentPage] = React.useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 2, Math.ceil(photos.length / 2) - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 2, 0));
  };

  if (photos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Tu álbum está vacío
        </h3>
        <p className="text-gray-600">
          Sube algunas fotos para ver cómo quedará tu álbum
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Vista previa del álbum
      </h3>
      
      <div className="relative aspect-[2/1.4] bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Página izquierda */}
          <motion.div 
            className="w-1/2 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentPage}
          >
            {photos[currentPage] && (
              <img
                src={photos[currentPage].url}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            )}
          </motion.div>
          
          {/* Página derecha */}
          <motion.div 
            className="w-1/2 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentPage + 1}
          >
            {photos[currentPage + 1] && (
              <img
                src={photos[currentPage + 1].url}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            )}
          </motion.div>
        </div>

        {/* Controles de navegación */}
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(photos.length / 2) - 1}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicador de páginas */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
          Páginas {currentPage + 1}-{Math.min(currentPage + 2, photos.length)} de {photos.length}
        </div>
      </div>
    </div>
  );
};