import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import { useFabricCanvas } from '../../hooks/useFabricCanvas';
import { fabric } from 'fabric';
import { PageImages } from '../../types/album';
import QRCode from 'qrcode';

interface AlbumCanvasProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pages: PageImages[];
  onImageUpdate: (
    pageIndex: number,
    side: 'left' | 'right',
    imageUrl: string
  ) => void;
  videoName: string | null;
  setVideoName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AlbumCanvas: React.FC<AlbumCanvasProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pages,
  onImageUpdate,
  videoName,
  setVideoName,
}) => {
  const leftCanvasRef = useRef<HTMLDivElement>(null);
  const rightCanvasRef = useRef<HTMLDivElement>(null);

  const { canvas: leftCanvas } = useFabricCanvas('canvas-left');
  const { canvas: rightCanvas } = useFabricCanvas('canvas-right');

  const [leftHasImage, setLeftHasImage] = useState(false);
  const [rightHasImage, setRightHasImage] = useState(false);

  // Usamos una referencia para evitar añadir el QR más de una vez
  const qrAddedRef = useRef(false);

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (!event.target?.result) reject('File read error');
        else resolve(event.target.result as string);
      };
      reader.onerror = () => reject('File read error');
      reader.readAsDataURL(file);
    });
  };

  const addImageFromURL = (
    dataUrl: string,
    canvas: fabric.Canvas
  ): Promise<fabric.Image> => {
    return new Promise((resolve, reject) => {
      fabric.Image.fromURL(
        dataUrl,
        (img) => {
          const scale = Math.min(
            (canvas.width || 800) / img.width!,
            (canvas.height || 600) / img.height!
          );

          img.scale(scale);
          img.center();

          img.setControlsVisibility({
            mt: true,
            mb: true,
            ml: true,
            mr: true,
            bl: true,
            br: true,
            tl: true,
            tr: true,
            mtr: true,
          });

          canvas.clear();
          canvas.add(img);
          canvas.setActiveObject(img);
          canvas.renderAll();

          resolve(img);
        },
        {
          crossOrigin: 'Anonymous',
        }
      );
    });
  };

  const addImageToPage = async (file: File, side: 'left' | 'right') => {
    const pageIndex = currentPage / 2;
    const canvas = side === 'left' ? leftCanvas : rightCanvas;

    if (!canvas) return;

    try {
      const dataUrl = await readFileAsDataURL(file);
      await addImageFromURL(dataUrl, canvas);
      onImageUpdate(pageIndex, side, dataUrl);

      if (side === 'left') {
        setLeftHasImage(true);
      } else {
        setRightHasImage(true);
      }
    } catch (error) {
      console.error('Error adding image to page:', error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent, side: 'left' | 'right') => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    const hasImage = side === 'left' ? leftHasImage : rightHasImage;

    if (!hasImage && imageFiles.length > 0) {
      await addImageToPage(imageFiles[0], side);
    }
  };

  const handleFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>,
    side: 'left' | 'right'
  ) => {
    const files = Array.from(e.target.files || []);
    const hasImage = side === 'left' ? leftHasImage : rightHasImage;

    if (!hasImage && files.length > 0) {
      await addImageToPage(files[0], side);
    }
  };

  useEffect(() => {
    const pageIndex = currentPage / 2;
    const page = pages[pageIndex];

    qrAddedRef.current = false; // Reset the QR added flag when page changes

    if (leftCanvas && page?.leftImage) {
      addImageFromURL(page.leftImage, leftCanvas);
      setLeftHasImage(true);
    } else if (leftCanvas) {
      setLeftHasImage(false);
      leftCanvas.clear();
      leftCanvas.renderAll();
    }

    if (rightCanvas && page?.rightImage) {
      addImageFromURL(page.rightImage, rightCanvas);
      setRightHasImage(true);
    } else if (rightCanvas) {
      setRightHasImage(false);
      rightCanvas.clear();
      rightCanvas.renderAll();
    }
  }, [currentPage, leftCanvas, rightCanvas, pages]);

  useEffect(() => {
    if (videoName && !qrAddedRef.current) {
      // Determina en qué lienzo añadir el QR (izquierdo si está vacío, si no derecho)
      const canvas = leftHasImage ? rightCanvas : leftCanvas;
      const side = leftHasImage ? 'right' : 'left';
      if (canvas) {
        QRCode.toDataURL(videoName, { margin: 1 })
          .then((qrDataUrl) => {
            fabric.Image.fromURL(qrDataUrl, (qrImg) => {
              qrImg.scaleToWidth(150); // Ajusta el tamaño según necesites

              // Establece el origen y posición de la imagen QR
              qrImg.set({
                originX: 'center',
                originY: 'top',
                top: 0,
              });

              // Crea el texto y ajústalo
              const text = new fabric.Text(videoName, {
                fontSize: 20,
                textAlign: 'center',
                originX: 'center',
                originY: 'top',
                top: qrImg.getScaledHeight() + 10, // Posición debajo del QR
              });

              // Agrupa el QR y el texto
              const group = new fabric.Group([qrImg, text], {
                left: (canvas.width || 800) / 2,
                top:
                  (canvas.height || 600) / 2 -
                  (qrImg.getScaledHeight() + text.height) / 2,
                originX: 'center',
                originY: 'top',
              });

              canvas.clear();
              canvas.add(group);
              canvas.renderAll();

              // Actualiza el estado para indicar que el lienzo tiene una imagen
              if (canvas === leftCanvas) {
                setLeftHasImage(true);
              } else {
                setRightHasImage(true);
              }

              // Actualiza las imágenes de la página para persistencia
              onImageUpdate(currentPage / 2, side, canvas.toDataURL());

              // Restablece videoName para evitar múltiples inserciones
              setVideoName(null);

              // Marca que el QR ha sido añadido
              qrAddedRef.current = true;
            });
          })
          .catch((err) => {
            console.error('Error generating QR code:', err);
          });
      }
    }
  }, [
    videoName,
    leftCanvas,
    rightCanvas,
    currentPage,
    onImageUpdate,
    setVideoName,
  ]);

  return (
    <div className="flex-1 bg-gray-100 h-screen flex items-center justify-center relative">
      <button
        className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 disabled:opacity-50"
        onClick={() => onPageChange(Math.max(0, currentPage - 2))}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex gap-1 h-[90vh] max-w-[90vw] mx-auto">
        <div
          ref={leftCanvasRef}
          className="flex-1 bg-white shadow-lg rounded-l-lg overflow-hidden relative group"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <canvas id="canvas-left" className="w-full h-full" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileInput(e, 'left')}
            id="photo-upload-left"
          />
          {!leftHasImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
              <button
                onClick={() =>
                  document.getElementById('photo-upload-left')?.click()
                }
                className="opacity-0 group-hover:opacity-100 bg-white p-4 rounded-full shadow-lg transition-opacity"
              >
                <Upload className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={rightCanvasRef}
          className="flex-1 bg-white shadow-lg rounded-r-lg overflow-hidden relative group"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'right')}
        >
          <canvas id="canvas-right" className="w-full h-full" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileInput(e, 'right')}
            id="photo-upload-right"
          />
          {!rightHasImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
              <button
                onClick={() =>
                  document.getElementById('photo-upload-right')?.click()
                }
                className="opacity-0 group-hover:opacity-100 bg-white p-4 rounded-full shadow-lg transition-opacity"
              >
                <Upload className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 disabled:opacity-50"
        onClick={() => onPageChange(Math.min(totalPages - 2, currentPage + 2))}
        disabled={currentPage >= totalPages - 2}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};