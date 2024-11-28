import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Slider } from '../ui/Slider';
import { usePhotoStore } from '../../store/usePhotoStore';
import { RotateCw, Save, ArrowLeft } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';

export const PhotoEditor: React.FC = () => {
  const { photoId } = useParams();
  const navigate = useNavigate();
  const photos = usePhotoStore((state) => state.photos);
  const updatePhoto = usePhotoStore((state) => state.updatePhoto);
  const photo = photos.find(p => p.id === photoId);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0
  });

  if (!photo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Foto no encontrada</h2>
          <p className="text-gray-600 mb-4">La foto que intentas editar no existe o ha sido eliminada</p>
          <button
            onClick={() => navigate('/upload')}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Volver a la galería
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    updatePhoto(photo.id, {
      filters,
      transform: {
        rotation,
        crop: croppedAreaPixels || { x: 0, y: 0, width: 100, height: 100 }
      }
    });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Guardar cambios
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <Cropper
                image={photo.url}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(_, croppedPixels) => setCroppedAreaPixels(croppedPixels)}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Ajustes básicos</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Rotación</label>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => setRotation((r) => (r + 90) % 360)}
                      className="p-2 border rounded-lg hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
                    >
                      <RotateCw className="w-5 h-5 text-indigo-600" />
                    </button>
                    <Slider
                      value={rotation}
                      onChange={(value) => setRotation(value)}
                      min={0}
                      max={360}
                      step={1}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Zoom</label>
                  <Slider
                    value={zoom}
                    onChange={(value) => setZoom(value)}
                    min={1}
                    max={3}
                    step={0.1}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Ajustes de imagen</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Brillo</label>
                  <Slider
                    value={filters.brightness}
                    onChange={(value) => setFilters(f => ({ ...f, brightness: value }))}
                    min={0}
                    max={200}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Contraste</label>
                  <Slider
                    value={filters.contrast}
                    onChange={(value) => setFilters(f => ({ ...f, contrast: value }))}
                    min={0}
                    max={200}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Saturación</label>
                  <Slider
                    value={filters.saturation}
                    onChange={(value) => setFilters(f => ({ ...f, saturation: value }))}
                    min={0}
                    max={200}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Desenfoque</label>
                  <Slider
                    value={filters.blur}
                    onChange={(value) => setFilters(f => ({ ...f, blur: value }))}
                    min={0}
                    max={10}
                    step={0.1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};