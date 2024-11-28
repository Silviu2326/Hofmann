import React, { useState, useEffect } from 'react';
import { AlbumFilters } from '../components/album/AlbumFilters';
import { AlbumCard } from '../components/album/AlbumCard';
import { VideoHero } from '../components/album/VideoHero';
import { Star, Heart, Clock, ChevronUp } from 'lucide-react';
import { albums } from '../data/albums';

export const AlbumCatalogPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedCover, setSelectedCover] = useState('all');
  const [selectedBinding, setSelectedBinding] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredAlbums = albums.filter(album => {
    if (selectedSize !== 'all' && album.size !== selectedSize) return false;
    if (selectedFormat !== 'all' && album.format !== selectedFormat) return false;
    if (selectedCover !== 'all' && album.cover !== selectedCover) return false;
    if (selectedBinding !== 'all' && album.binding !== selectedBinding) return false;
    return true;
  });

  const sortedAlbums = [...filteredAlbums].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return b.reviewCount || 0 - (a.reviewCount || 0);
    }
  });

  return (
    <div className="min-h-screen">
      <VideoHero />
      
      <div id="album-content" className="bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-500 font-medium">Diseña tu álbum</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Álbumes de fotos personalizados
            </h2>
            <p className="text-lg text-gray-600">
              Crea un álbum único con tus mejores recuerdos. Calidad profesional garantizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calidad Premium</h3>
              <p className="text-gray-600">
                Papel fotográfico profesional y acabados de lujo que harán que tus fotos brillen
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diseño Único</h3>
              <p className="text-gray-600">
                Personaliza cada detalle con nuestro editor intuitivo y cientos de diseños
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">
                Recibe tu álbum en 5-7 días laborables con seguimiento en tiempo real
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <AlbumFilters
                  selectedSize={selectedSize}
                  selectedFormat={selectedFormat}
                  selectedCover={selectedCover}
                  selectedBinding={selectedBinding}
                  onSizeChange={setSelectedSize}
                  onFormatChange={setSelectedFormat}
                  onCoverChange={setSelectedCover}
                  onBindingChange={setSelectedBinding}
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Mostrando {sortedAlbums.length} álbumes
                </p>
                <select 
                  className="border-gray-300 rounded-lg text-gray-700 text-sm focus:ring-rose-500 focus:border-rose-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Más populares</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="rating">Mejor valorados</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedAlbums.map((album) => (
                  <AlbumCard key={album.id} {...album} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-rose-500 text-white p-3 rounded-full shadow-lg hover:bg-rose-600 transition-colors z-50"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};