import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AlbumDetailHeader } from '../components/album/AlbumDetailHeader';
import { AlbumDetailGallery } from '../components/album/AlbumDetailGallery';
import { AlbumDetailInfo } from '../components/album/AlbumDetailInfo';
import { AlbumFeatures } from '../components/album/AlbumFeatures';
import { AlbumPricing } from '../components/album/AlbumPricing';
import { albums } from '../data/albums';

export const AlbumDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const album = albums.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!album) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Álbum no encontrado</h2>
          <p className="text-gray-600 mb-4">El álbum que buscas no está disponible</p>
          <button
            onClick={() => navigate('/album-fotos')}
            className="text-rose-600 hover:text-rose-700 font-medium"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const handleCreateClick = () => {
    navigate('/upload');
  };

  const features = [
    {
      title: 'Apertura plana',
      description: [
        'Para que no te pierdas ni un detalle de tus fotos',
        'Ideal para fotos panorámicas y las hechas con gran angular'
      ],
      image: 'https://www.hofmann.es/content/paddedphotobook/panel/layflat.jpg?w=1440'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AlbumDetailHeader name={album.name} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AlbumDetailGallery images={album.images} />
          
          <AlbumDetailInfo
            name={album.name}
            dimensions="21 x 28 cm"
            price={album.price}
            originalPrice={album.originalPrice}
            rating={album.rating || 4.5}
            reviewCount={album.reviewCount || 0}
            description={album.description}
            features={album.features}
            onCreateClick={handleCreateClick}
          />
        </div>

        <AlbumFeatures features={features} />

        <div className="mt-16">
          <AlbumPricing
            name={album.name}
            dimensions="21 x 28 cm"
            basePrice={album.price}
            shippingCost={4.99}
            options={{
              photos: { label: 'Cantidad de fotos', value: 'Ilimitada' },
              pages: { label: 'Opciones de página', value: '24 - 120 páginas (1,20 € por página extra)' },
              cover: { label: 'Opciones de portada', value: 'Tapa acolchada (gratis)' }
            }}
          />
        </div>
      </main>
    </div>
  );
};